import { marked } from 'marked';
import { playwrightWithRetry } from '@/lib/retry';

export interface ExportResult {
  success: boolean;
  pdfUrl?: string;
  pdfBuffer?: Buffer;
  error?: string;
}

export async function renderAndExport(mdx: string, jobId: string): Promise<ExportResult> {
  try {
    // Convert MDX to HTML
    const html = await convertMDXToHTML(mdx);
    
    // Generate PDF
    const pdfBuffer = await generatePDF(html);
    
    // Try to upload to storage if configured
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const pdfUrl = await uploadToStorage(pdfBuffer, jobId);
      return { success: true, pdfUrl, pdfBuffer };
    }
    
    // Return buffer for streaming if no storage
    return { success: true, pdfBuffer };
    
  } catch (error) {
    console.error('PDF generation failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'PDF generation failed'
    };
  }
}

async function convertMDXToHTML(mdx: string): Promise<string> {
  // Install marked if needed
  let marked: any;
  try {
    marked = (await import('marked')).marked;
  } catch {
    // Fallback to simple conversion
    return simpleMarkdownToHTML(mdx);
  }
  
  // Configure marked for better output
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  
  // Convert markdown to HTML
  const bodyHTML = marked(mdx);
  
  // Wrap in complete HTML document with styling
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Report</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #111827;
            border-bottom: 3px solid #7c3aed;
            padding-bottom: 0.5rem;
        }
        
        h2 {
            font-size: 1.75rem;
            font-weight: 600;
            margin: 2rem 0 1rem 0;
            color: #374151;
        }
        
        h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 1.5rem 0 0.75rem 0;
            color: #4b5563;
        }
        
        p {
            margin-bottom: 1rem;
            text-align: justify;
        }
        
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin-bottom: 0.5rem;
        }
        
        a {
            color: #7c3aed;
            text-decoration: none;
            font-weight: 500;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        blockquote {
            border-left: 4px solid #e5e7eb;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: #6b7280;
        }
        
        code {
            background: #f3f4f6;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: 'SF Mono', Monaco, monospace;
            font-size: 0.875rem;
        }
        
        pre {
            background: #f9fafb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1rem 0;
        }
        
        hr {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 2rem 0;
        }
        
        .metadata {
            font-style: italic;
            color: #6b7280;
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }
        
        .sources {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }
        
        .footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
            font-size: 0.875rem;
            color: #6b7280;
            text-align: center;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 20px;
            }
            
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    ${bodyHTML}
</body>
</html>`;
}

async function generatePDF(html: string): Promise<Buffer> {
  // Try to use Playwright first, fallback to Puppeteer
  try {
    return await playwrightWithRetry(async () => {
      const { chromium } = await import('playwright');
      
      const browser = await chromium.launch();
      const page = await browser.newPage();
      
      await page.setContent(html, { waitUntil: 'networkidle' });
      
      const pdfBuffer = await page.pdf({
        format: 'A4',
        margin: {
          top: '1in',
          right: '1in',
          bottom: '1in',
          left: '1in'
        },
        printBackground: true,
        preferCSSPageSize: true,
      });
      
      await browser.close();
      return Buffer.from(pdfBuffer);
    });
    
  } catch (error) {
    console.warn('Playwright PDF generation failed, trying Puppeteer:', error);
    return generatePDFWithPuppeteer(html);
  }
}

async function generatePDFWithPuppeteer(html: string): Promise<Buffer> {
  const puppeteer = await import('puppeteer');
  
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  const pdfBuffer = await page.pdf({
    format: 'A4',
    margin: {
      top: '1in',
      right: '1in',
      bottom: '1in',
      left: '1in'
    },
    printBackground: true,
  });
  
  await browser.close();
  return Buffer.from(pdfBuffer);
}

async function uploadToStorage(buffer: Buffer, jobId: string): Promise<string> {
  try {
    // Try Vercel Blob if available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { put } = await import('@vercel/blob');
      
      const blob = await put(`reports/${jobId}.pdf`, buffer, {
        access: 'public',
      });
      
      return blob.url;
    }
    
    // Could add other storage providers here (S3, etc.)
    throw new Error('No storage provider configured');
    
  } catch (error) {
    console.error('Storage upload failed:', error);
    throw error;
  }
}

function simpleMarkdownToHTML(markdown: string): string {
  return markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^(.*)$/, '<p>$1</p>');
}