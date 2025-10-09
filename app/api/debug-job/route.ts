import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Test creating a simple job in the database
    const job = await prisma.job.create({
      data: {
        topic: 'Test job creation',
        audience: 'general',
        format: 'report',
        tone: 'professional',
        length: 'medium',
        status: 'queued',
        progress: 0,
      },
    });
    
    return NextResponse.json({
      success: true,
      jobId: job.id,
      message: 'Job created successfully in database'
    });
    
  } catch (error) {
    console.error('Database job creation failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Job creation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}