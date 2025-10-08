import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { enqueueJobWithRedis } from '@/lib/ara/worker';
import { validateResearchEnv } from '@/lib/env';

const createJobSchema = z.object({
  topic: z.string().min(10).max(500),
  audience: z.enum(['general', 'technical', 'executive', 'academic']).default('general'),
  format: z.enum(['summary', 'report', 'thread']).default('report'),
  tone: z.enum(['professional', 'casual', 'academic', 'conversational']).default('professional'),
  length: z.enum(['short', 'medium', 'long']).default('medium'),
  email: z.string().email().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Validate research environment at runtime
    validateResearchEnv();
    
    const body = await request.json();
    const validatedData = createJobSchema.parse(body);
    
    // Create job in database
    const job = await prisma.job.create({
      data: {
        topic: validatedData.topic,
        audience: validatedData.audience,
        format: validatedData.format,
        tone: validatedData.tone,
        length: validatedData.length,
        email: validatedData.email,
        status: 'queued',
        progress: 0,
      },
    });
    
    // Enqueue for processing
    await enqueueJobWithRedis(job.id);
    
    return NextResponse.json({
      jobId: job.id,
      status: 'queued',
      message: 'Research job created and queued for processing'
    });
    
  } catch (error) {
    console.error('Job creation failed:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.issues },
        { status: 400 }
      );
    }
    
    // Check for environment configuration errors
    if (error instanceof Error && (
      error.message.includes('DATABASE_URL') || 
      error.message.includes('DEEPSEEK_API_KEY')
    )) {
      return NextResponse.json(
        { 
          error: 'Research system not configured', 
          details: 'Please contact support - research functionality requires additional setup'
        },
        { status: 503 } // Service Unavailable
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create research job' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const jobs = await prisma.job.findMany({
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        topic: true,
        status: true,
        progress: true,
        createdAt: true,
        completedAt: true,
      },
    });
    
    return NextResponse.json({ jobs });
    
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}