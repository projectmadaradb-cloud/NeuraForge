import OpenAI from 'openai';
import { openaiWithRetry } from '@/lib/retry';
import { ExtractedContent } from './extraction';

export interface TextChunk {
  text: string;
  sourceIndex: number;
  embedding?: number[];
}

export interface ProcessedSource {
  id: string;
  url: string;
  title: string;
  text: string;
  chunks: TextChunk[];
}

const CHUNK_SIZE = 1000; // Characters
const CHUNK_OVERLAP = 200;

export async function dedupeAndChunk(sources: ExtractedContent[]): Promise<ProcessedSource[]> {
  // Filter successful extractions
  const validSources = sources.filter(s => s.success && s.text.length > 100);
  
  // Simple deduplication based on title similarity and content overlap
  const deduped = deduplicateSources(validSources);
  
  // Create chunks for each source
  const processed: ProcessedSource[] = [];
  
  for (let i = 0; i < deduped.length; i++) {
    const source = deduped[i];
    const chunks = createChunks(source.text, i);
    
    processed.push({
      id: `source_${i}`,
      url: source.url,
      title: source.title,
      text: source.text,
      chunks
    });
  }
  
  return processed;
}

function deduplicateSources(sources: ExtractedContent[]): ExtractedContent[] {
  const unique: ExtractedContent[] = [];
  const seenTitles = new Set<string>();
  
  for (const source of sources) {
    const normalizedTitle = source.title.toLowerCase().trim();
    
    // Skip if we've seen a very similar title
    const isDuplicate = Array.from(seenTitles).some(title => 
      similarity(title, normalizedTitle) > 0.8
    );
    
    if (!isDuplicate) {
      unique.push(source);
      seenTitles.add(normalizedTitle);
    }
  }
  
  return unique;
}

function createChunks(text: string, sourceIndex: number): TextChunk[] {
  const chunks: TextChunk[] = [];
  
  // Simple sentence-aware chunking
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    
    if (currentChunk.length + trimmedSentence.length > CHUNK_SIZE && currentChunk.length > 0) {
      // Save current chunk
      chunks.push({
        text: currentChunk.trim(),
        sourceIndex
      });
      
      // Start new chunk with overlap
      const words = currentChunk.split(' ');
      const overlapWords = words.slice(-20); // Keep last 20 words for context
      currentChunk = overlapWords.join(' ') + ' ' + trimmedSentence;
    } else {
      currentChunk += ' ' + trimmedSentence;
    }
  }
  
  // Add final chunk
  if (currentChunk.trim().length > 50) {
    chunks.push({
      text: currentChunk.trim(),
      sourceIndex
    });
  }
  
  return chunks;
}

export async function embedChunks(chunks: TextChunk[]): Promise<TextChunk[]> {
  // DeepSeek doesn't support embeddings API, so we'll use text-based ranking instead
  console.log('Using text-based similarity instead of embeddings for DeepSeek');
  return chunks;
}

export async function rankChunksForSections(chunks: TextChunk[], query: string, topK = 10): Promise<TextChunk[]> {
  // If we have embeddings, use vector similarity
  if (chunks.some(c => c.embedding)) {
    return await rankByEmbedding(chunks, query, topK);
  }
  
  // Fallback to keyword-based ranking
  return rankByKeywords(chunks, query, topK);
}

async function rankByEmbedding(chunks: TextChunk[], query: string, topK: number): Promise<TextChunk[]> {
  // DeepSeek doesn't support embeddings, fall back to text-based similarity
  console.log('Using text-based similarity ranking instead of embeddings');
  return rankByKeywords(chunks, query, topK);
}

function rankByKeywords(chunks: TextChunk[], query: string, topK: number): TextChunk[] {
  const queryTerms = query.toLowerCase().split(/\s+/);
  
  const scored = chunks.map(chunk => {
    const text = chunk.text.toLowerCase();
    let score = 0;
    
    for (const term of queryTerms) {
      const occurrences = (text.match(new RegExp(term, 'g')) || []).length;
      score += occurrences;
    }
    
    return { chunk, score };
  });
  
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.chunk);
}

function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  
  return dotProduct / (magnitudeA * magnitudeB);
}

function similarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}