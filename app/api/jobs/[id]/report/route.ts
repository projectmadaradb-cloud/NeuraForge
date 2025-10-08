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
        report: true,
        sources: {
          select: {
            url: true,
            title: true,
          },
          orderBy: {
            createdAt: 'asc',
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
    
    if (job.status !== 'done' || !job.report) {
      return NextResponse.json(
        { error: 'Report not ready', status: job.status },
        { status: 202 } // Accepted but not ready
      );
    }
    
    // Format sources with numbered references
    const sources = job.sources.map((source, index) => ({
      n: index + 1,
      url: source.url,
      title: source.title,
    }));
    
    return NextResponse.json({
      mdx: job.report.mdx,
      pdfUrl: job.report.pdfUrl,
      summary: job.report.summary,
      sources,
      insights: job.report.insightsJson ? JSON.parse(job.report.insightsJson) : null,
    });
    
  } catch (error) {
    console.error('Failed to fetch report:', error);
    return NextResponse.json(
      { error: 'Failed to fetch report' },
      { status: 500 }
    );
  }
}

// Download PDF endpoint
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const download = searchParams.get('download') === 'true';
    
    const job = await prisma.job.findUnique({
      where: { id: params.id },
      include: {
        report: true,
      },
    });
    
    if (!job?.report) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      );
    }
    
    // If PDF URL exists, redirect to it
    if (job.report.pdfUrl) {
      return NextResponse.redirect(job.report.pdfUrl);
    }
    
    // Otherwise, generate PDF on-demand
    const { renderAndExport } = await import('@/lib/ara/export');
    const exportResult = await renderAndExport(job.report.mdx, job.id);
    
    if (!exportResult.success || !exportResult.pdfBuffer) {
      return NextResponse.json(
        { error: 'Failed to generate PDF' },
        { status: 500 }
      );
    }
    
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Length', exportResult.pdfBuffer.length.toString());
    
    if (download) {
      headers.set('Content-Disposition', `attachment; filename="report-${params.id}.pdf"`);
    } else {
      headers.set('Content-Disposition', 'inline');
    }
    
    return new NextResponse(new Uint8Array(exportResult.pdfBuffer), { headers });
    
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}