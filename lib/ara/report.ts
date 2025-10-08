import { OpenAI } from 'openai';
import { openaiWithRetry } from '@/lib/retry';
import { SYSTEM_PROMPT, USER_TEMPLATE, fillTemplate, PromptVariables } from './prompts';
import { TextChunk, ProcessedSource } from './chunking';

export interface ReportData {
  mdx: string;
  summary: string;
  insights: {
    keyFindings: string[];
    recommendations: string[];
    confidence: number;
    sourceCount: number;
  };
}

export async function draftReport(
  topic: string,
  audience: string,
  format: string,
  tone: string,
  length: string,
  sources: ProcessedSource[],
  relevantChunks: TextChunk[]
): Promise<ReportData> {
  try {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error('DeepSeek API key is required for report generation');
    }
    
    const client = new OpenAI({ 
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com'
    });
    
    // Prepare context from relevant chunks
    const context = formatContext(relevantChunks, sources);
    
    // Generate the main report
    const reportContent = await generateReportContent(
      client,
      topic,
      audience,
      format,
      tone,
      length,
      context
    );
    
    // Generate summary and insights
    const summary = await generateSummary(client, reportContent, topic);
    const insights = await generateInsights(client, reportContent, sources.length);
    
    // Format as MDX with proper citations
    const mdx = formatAsMDX(reportContent, sources, topic);
    
    return {
      mdx,
      summary,
      insights
    };
    
  } catch (error) {
    console.error('Report generation failed:', error);
    
    // Return fallback content
    return {
      mdx: createFallbackReport(topic, sources),
      summary: `Research report on ${topic} - insights unavailable due to processing error.`,
      insights: {
        keyFindings: ['Research insights temporarily unavailable'],
        recommendations: ['Please retry the analysis'],
        confidence: 0,
        sourceCount: sources.length
      }
    };
  }
}

async function generateReportContent(
  client: OpenAI,
  topic: string,
  audience: string,
  format: string,
  tone: string,
  length: string,
  context: string
): Promise<string> {
  const prompt = fillTemplate(USER_TEMPLATE, {
    topic,
    audience,
    format,
    tone,
    length,
    context
  });
  
  const response = await openaiWithRetry(async () => {
    return client.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.3,
      max_tokens: getMaxTokensForLength(length),
    });
  });
  
  return response.choices[0]?.message?.content || '';
}

async function generateSummary(client: OpenAI, content: string, topic: string): Promise<string> {
  const response = await openaiWithRetry(async () => {
    return client.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: 'Generate a concise 2-3 sentence summary of the research report.'
        },
        {
          role: 'user',
          content: `Report content:\n\n${content}\n\nTopic: ${topic}\n\nSummary:`
        }
      ],
      temperature: 0.2,
      max_tokens: 150,
    });
  });
  
  return response.choices[0]?.message?.content || `Research summary for ${topic}`;
}

async function generateInsights(client: OpenAI, content: string, sourceCount: number): Promise<{
  keyFindings: string[];
  recommendations: string[];
  confidence: number;
  sourceCount: number;
}> {
  const response = await openaiWithRetry(async () => {
    return client.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: 'Extract key findings and recommendations from the research report. Return as JSON with arrays of strings.'
        },
        {
          role: 'user',
          content: `Extract insights from this report:\n\n${content}\n\nReturn JSON with:\n- keyFindings: array of 3-5 key findings\n- recommendations: array of 3-5 actionable recommendations`
        }
      ],
      temperature: 0.1,
      max_tokens: 500,
    });
  });
  
  try {
    const insights = JSON.parse(response.choices[0]?.message?.content || '{}');
    return {
      keyFindings: insights.keyFindings || [],
      recommendations: insights.recommendations || [],
      confidence: calculateConfidence(content, sourceCount),
      sourceCount
    };
  } catch (error) {
    return {
      keyFindings: ['Key findings extraction failed'],
      recommendations: ['Recommendations extraction failed'],
      confidence: 0.5,
      sourceCount
    };
  }
}

function formatContext(chunks: TextChunk[], sources: ProcessedSource[]): string {
  let context = '';
  
  chunks.forEach((chunk, index) => {
    const source = sources[chunk.sourceIndex];
    if (source) {
      context += `\n[${chunk.sourceIndex + 1}] Source: ${source.title} (${source.url})\n`;
      context += `Content: ${chunk.text}\n\n`;
    }
  });
  
  return context;
}

function formatAsMDX(content: string, sources: ProcessedSource[], topic: string): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  let mdx = `---
title: "${topic}"
generated: "${currentDate}"
sources: ${sources.length}
---

# Research Report: ${topic}

*Generated on ${currentDate} from ${sources.length} sources*

${content}

---

## Sources

`;
  
  sources.forEach((source, index) => {
    mdx += `[${index + 1}] **${source.title}**  \n`;
    mdx += `${source.url}\n\n`;
  });
  
  mdx += `---

*This report was generated by NeuraForge Research Assistant. For custom automation needs, [start a project](https://neuraforge.tech/contact).*`;
  
  return mdx;
}

function createFallbackReport(topic: string, sources: ProcessedSource[]): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return `---
title: "${topic}"
generated: "${currentDate}"
sources: ${sources.length}
---

# Research Report: ${topic}

*Generated on ${currentDate}*

## Executive Summary

Research analysis for "${topic}" is currently unavailable due to processing limitations. This is a placeholder report showing the available sources that were found.

## Available Sources

${sources.map((source, index) => 
  `### [${index + 1}] ${source.title}\n\n**URL:** ${source.url}\n\n**Content Preview:** ${source.text.slice(0, 200)}...\n`
).join('\n')}

## Note

This is a fallback report. For a complete analysis, please ensure:
- OpenAI API key is properly configured
- All required services are available
- Sufficient source content was extracted

---

*For custom automation needs, [start a project](https://neuraforge.tech/contact).*`;
}

function getMaxTokensForLength(length: string): number {
  switch (length) {
    case 'short': return 1000;
    case 'long': return 3000;
    default: return 2000; // medium
  }
}

function calculateConfidence(content: string, sourceCount: number): number {
  // Simple confidence calculation based on content length and source count
  const contentScore = Math.min(content.length / 2000, 1) * 0.5;
  const sourceScore = Math.min(sourceCount / 5, 1) * 0.5;
  return Math.round((contentScore + sourceScore) * 100) / 100;
}