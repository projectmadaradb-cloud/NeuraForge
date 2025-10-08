import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.job.findUnique({
      where: { id: params.id },
      include: {
        sources: {
          select: {
            id: true,
            url: true,
            title: true,
            score: true,
          },
        },
        report: {
          select: {
            summary: true,
            insightsJson: true,
          },
        },
      },
    });
    
    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }
    
    // Parse insights JSON
    let insights = null;
    if (job.report?.insightsJson) {
      try {
        insights = JSON.parse(job.report.insightsJson);
      } catch (error) {
        console.error('Failed to parse insights JSON:', error);
      }
    }
    
    return NextResponse.json({
      id: job.id,
      topic: job.topic,
      audience: job.audience,
      format: job.format,
      tone: job.tone,
      length: job.length,
      status: job.status,
      progress: job.progress,
      errorMsg: job.errorMsg,
      createdAt: job.createdAt,
      completedAt: job.completedAt,
      sources: job.sources,
      summary: job.report?.summary,
      insights,
    });
    
  } catch (error) {
    console.error('Failed to fetch job:', error);
    return NextResponse.json(
      { error: 'Failed to fetch job details' },
      { status: 500 }
    );
  }
}