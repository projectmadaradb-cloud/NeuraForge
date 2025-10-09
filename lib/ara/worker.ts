import { prisma } from '../db';
import { searchWeb } from './search';
import { batchExtract } from './extraction';
import { dedupeAndChunk, embedChunks, rankChunksForSections } from './chunking';
import { draftReport } from './report';
import { renderAndExport } from './export';
import { ResearchEmailService } from '../email/research';

export interface JobProgress {
  step: string;
  progress: number;
  status: 'running' | 'completed' | 'error';
  message?: string;
}

export async function processResearchJob(jobId: string): Promise<void> {
  let job: any = null; // Declare job variable outside try block for error handling
  
  try {
    await updateProgress(jobId, 'Starting research pipeline', 0);
    
    // Get job details
    job = await prisma.job.findUnique({
      where: { id: jobId }
    });
    
    if (!job) {
      throw new Error('Job not found');
    }
    
    await prisma.job.update({
      where: { id: jobId },
      data: { status: 'running' }
    });
    
    // Step 1: Search for sources
    await updateProgress(jobId, 'Searching for sources', 10);
    const searchResults = await searchWeb(job.topic);
    
    if (searchResults.length === 0) {
      throw new Error('No sources found for the given topic');
    }
    
    // Step 2: Extract content from sources
    await updateProgress(jobId, 'Extracting content from sources', 25);
    const extractedContent = await batchExtract(
      searchResults.slice(0, 10).map(r => r.url) // Limit to top 10 sources
    );
    
    const validSources = extractedContent.filter(s => s.success);
    if (validSources.length === 0) {
      throw new Error('Failed to extract content from any sources');
    }
    
    // Step 3: Store sources in database
    await updateProgress(jobId, 'Processing and storing sources', 40);
    const dbSources = await Promise.all(
      validSources.map(source => 
        prisma.source.create({
          data: {
            jobId,
            url: source.url,
            title: source.title,
            contentText: source.text,
            score: 1.0 // Could implement relevance scoring
          }
        })
      )
    );
    
    // Step 4: Chunk and embed content
    await updateProgress(jobId, 'Chunking and embedding content', 55);
    const processedSources = await dedupeAndChunk(validSources);
    
    // Get all chunks for embedding
    const allChunks = processedSources.flatMap(source => source.chunks);
    const embeddedChunks = await embedChunks(allChunks);
    
    // Store chunks in database
    await Promise.all(
      embeddedChunks.map(async (chunk, index) => {
        const sourceIndex = chunk.sourceIndex;
        const dbSource = dbSources[sourceIndex];
        
        if (dbSource) {
          await prisma.chunk.create({
            data: {
              sourceId: dbSource.id,
              text: chunk.text,
              embedding: chunk.embedding || []
            }
          });
        }
      })
    );
    
    // Step 5: Rank and select relevant chunks
    await updateProgress(jobId, 'Analyzing and ranking content', 70);
    const relevantChunks = await rankChunksForSections(embeddedChunks, job.topic, 15);
    
    // Step 6: Generate report
    await updateProgress(jobId, 'Generating research report', 80);
    const reportData = await draftReport(
      job.topic,
      job.audience,
      job.format,
      job.tone,
      job.length,
      processedSources,
      relevantChunks
    );
    
    // Step 7: Export to PDF
    await updateProgress(jobId, 'Exporting to PDF', 90);
    const exportResult = await renderAndExport(reportData.mdx, jobId);
    
    // Step 8: Store final report
    await updateProgress(jobId, 'Finalizing report', 95);
    await prisma.report.create({
      data: {
        jobId,
        mdx: reportData.mdx,
        pdfUrl: exportResult.pdfUrl,
        summary: reportData.summary,
        insightsJson: JSON.stringify(reportData.insights)
      }
    });
    
    // Mark job as completed
    const completedAt = new Date();
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: 'done',
        progress: 100,
        completedAt
      }
    });

    await updateProgress(jobId, 'Research completed successfully', 100);
    
    // Send email notification if email was provided
    if (job.email) {
      await ResearchEmailService.notifyCompletion(
        job.id,
        job.email,
        job.topic
      );
    }
    
  } catch (error) {
    console.error(`Job ${jobId} failed:`, error);
    
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: 'error',
        errorMsg: error instanceof Error ? error.message : 'Unknown error',
        completedAt: new Date()
      }
    });
    
    // Send error notification if email was provided
    if (job && job.email) {
      await ResearchEmailService.notifyError(
        jobId,
        job.email,
        job.topic,
        error instanceof Error ? error.message : 'Unknown error occurred during research processing'
      );
    }

    throw error;
  }
}

export async function updateProgress(
  jobId: string, 
  message: string, 
  progress: number
): Promise<void> {
  try {
    await prisma.job.update({
      where: { id: jobId },
      data: { progress: Math.min(Math.max(progress, 0), 100) }
    });
    
    console.log(`Job ${jobId}: ${message} (${progress}%)`);
  } catch (error) {
    console.error('Failed to update progress:', error);
  }
}

// Queue management (simple implementation without Redis)
const jobQueue: string[] = [];
const activeJobs = new Set<string>();

export async function enqueueJob(jobId: string): Promise<void> {
  jobQueue.push(jobId);
  processQueue();
}

async function processQueue(): Promise<void> {
  if (activeJobs.size >= 2) { // Limit concurrent jobs
    return;
  }
  
  const jobId = jobQueue.shift();
  if (!jobId || activeJobs.has(jobId)) {
    return;
  }
  
  activeJobs.add(jobId);
  
  try {
    await processResearchJob(jobId);
  } catch (error) {
    console.error(`Job processing failed:`, error);
  } finally {
    activeJobs.delete(jobId);
    
    // Process next job in queue
    if (jobQueue.length > 0) {
      setTimeout(processQueue, 1000);
    }
  }
}

// Alternative: Redis queue implementation (if available)
export async function enqueueJobWithRedis(jobId: string): Promise<void> {
  try {
    // Force fallback to simple queue for now - Redis has connection issues
    console.log('Using simple queue fallback instead of Redis');
    return enqueueJob(jobId);
    
    /* Redis implementation disabled temporarily
    if (!process.env.UPSTASH_REDIS_REST_URL) {
      return enqueueJob(jobId); // Fallback to simple queue
    }
    
    const { Redis } = await import('@upstash/redis');
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    
    await redis.lpush('research_jobs', jobId);
    
    // Trigger worker (in production, this would be a separate worker process)
    processRedisQueue();
    */
    
  } catch (error) {
    console.error('Redis queue failed, using fallback:', error);
    return enqueueJob(jobId);
  }
}

async function processRedisQueue(): Promise<void> {
  try {
    const { Redis } = await import('@upstash/redis');
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    
    const jobId = await redis.rpop('research_jobs');
    if (jobId && typeof jobId === 'string') {
      await processResearchJob(jobId);
      
      // Check for more jobs
      setTimeout(processRedisQueue, 1000);
    }
  } catch (error) {
    console.error('Redis queue processing failed:', error);
  }
}