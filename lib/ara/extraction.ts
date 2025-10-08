import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import * as cheerio from 'cheerio';
import { fetchWithRetry } from '@/lib/retry';
import { createHash } from 'crypto';

export interface ExtractedContent {
  title: string;
  text: string;
  url: string;
  success: boolean;
  error?: string;
}

// Simple in-memory cache for extracted content
const contentCache = new Map<string, ExtractedContent>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function getCacheKey(url: string): string {
  return createHash('md5').update(url).digest('hex');
}

function setCachedContent(url: string, content: ExtractedContent): void {
  const key = getCacheKey(url);
  contentCache.set(key, { ...content, cachedAt: Date.now() } as any);
  
  // Simple cleanup - remove old entries
  if (contentCache.size > 100) {
    const now = Date.now();
    for (const [k, v] of contentCache.entries()) {
      if (now - (v as any).cachedAt > CACHE_TTL) {
        contentCache.delete(k);
      }
    }
  }
}

function getCachedContent(url: string): ExtractedContent | null {
  const key = getCacheKey(url);
  const cached = contentCache.get(key) as any;
  
  if (!cached) return null;
  
  const now = Date.now();
  if (now - cached.cachedAt > CACHE_TTL) {
    contentCache.delete(key);
    return null;
  }
  
  const { cachedAt, ...content } = cached;
  return content;
}

export async function fetchAndExtract(url: string): Promise<ExtractedContent> {
  try {
    // Check cache first
    const cached = getCachedContent(url);
    if (cached) {
      console.log('Using cached content for:', url);
      return cached;
    }

    // Add crawl delay to be respectful
    await delay(2000); // Increased to 2 seconds for politeness
    
    const response = await fetchWithRetry(url, {
      headers: {
        'User-Agent': 'NeuraForge Research Assistant (https://neuraforge.tech)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
      },
      timeout: 15000, // 15 second timeout
    }, {
      maxRetries: 2,
      baseDelay: 2000,
    });

    if (!response.ok) {
      const result = {
        title: '',
        text: '',
        url,
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`
      };
      setCachedContent(url, result); // Cache failures too (for shorter time)
      return result;
    }

    const html = await response.text();
    
    // Try Readability first for better content extraction
    const extracted = extractWithReadability(html, url);
    if (extracted.success && extracted.text.length > 100) {
      setCachedContent(url, extracted);
      return extracted;
    }
    
    // Fallback to Cheerio for simple extraction
    const result = extractWithCheerio(html, url);
    setCachedContent(url, result);
    return result;
    
  } catch (error) {
    console.error(`Extraction failed for ${url}:`, error);
    return {
      title: '',
      text: '',
      url,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

function extractWithReadability(html: string, url: string): ExtractedContent {
  try {
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    
    if (article && article.textContent) {
      return {
        title: article.title || extractTitleFromDOM(dom.window.document),
        text: cleanText(article.textContent),
        url,
        success: true
      };
    }
    
    return { title: '', text: '', url, success: false, error: 'Readability parsing failed' };
  } catch (error) {
    return { 
      title: '', 
      text: '', 
      url, 
      success: false, 
      error: error instanceof Error ? error.message : 'Readability error' 
    };
  }
}

function extractWithCheerio(html: string, url: string): ExtractedContent {
  try {
    const $ = cheerio.load(html);
    
    // Remove unwanted elements
    $('script, style, nav, header, footer, aside, .advertisement, .ads, .social-share').remove();
    
    // Extract title
    const title = $('title').text().trim() || 
                 $('h1').first().text().trim() || 
                 $('meta[property="og:title"]').attr('content') || 
                 'Untitled';
    
    // Extract main content
    let text = '';
    
    // Try common content selectors
    const contentSelectors = [
      'article',
      '.content',
      '.post-content',
      '.entry-content',
      '.article-content',
      'main',
      '.main-content'
    ];
    
    for (const selector of contentSelectors) {
      const content = $(selector).text().trim();
      if (content.length > text.length) {
        text = content;
      }
    }
    
    // Fallback to body if no specific content found
    if (text.length < 100) {
      text = $('body').text().trim();
    }
    
    return {
      title: cleanText(title),
      text: cleanText(text),
      url,
      success: text.length > 100
    };
    
  } catch (error) {
    return {
      title: '',
      text: '',
      url,
      success: false,
      error: error instanceof Error ? error.message : 'Cheerio extraction error'
    };
  }
}

function extractTitleFromDOM(document: Document): string {
  return document.title || 
         document.querySelector('h1')?.textContent?.trim() || 
         document.querySelector('meta[property="og:title"]')?.getAttribute('content') || 
         'Untitled';
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/\n\s*\n/g, '\n') // Remove extra newlines
    .trim();
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function batchExtract(urls: string[], maxConcurrent = 3): Promise<ExtractedContent[]> {
  const results: ExtractedContent[] = [];
  
  // Process URLs in batches to avoid overwhelming servers
  for (let i = 0; i < urls.length; i += maxConcurrent) {
    const batch = urls.slice(i, i + maxConcurrent);
    const batchResults = await Promise.all(
      batch.map(url => fetchAndExtract(url))
    );
    results.push(...batchResults);
    
    // Delay between batches
    if (i + maxConcurrent < urls.length) {
      await delay(2000);
    }
  }
  
  return results;
}