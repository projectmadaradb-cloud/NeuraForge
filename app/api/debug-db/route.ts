import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const debugInfo: any = { timestamp: new Date().toISOString() };

  try {
    debugInfo.step = 'environment check';
    debugInfo.hasDatabase = !!process.env.DATABASE_URL;
    debugInfo.hasDeepSeek = !!process.env.DEEPSEEK_API_KEY;

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'DATABASE_URL missing', debugInfo }, { status: 503 });
    }

    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json({ error: 'DEEPSEEK_API_KEY missing', debugInfo }, { status: 503 });
    }

    debugInfo.step = 'importing prisma';
    const { prisma } = await import('@/lib/db');
    debugInfo.prismaImported = true;

    debugInfo.step = 'testing database connection';
    await prisma.$connect();
    debugInfo.dbConnected = true;

    debugInfo.step = 'testing simple query';
    const count = await prisma.job.count();
    debugInfo.jobCount = count;

    await prisma.$disconnect();
    debugInfo.step = 'complete';

    return NextResponse.json({
      success: true,
      message: 'Database connection test passed',
      debugInfo
    });

  } catch (error) {
    debugInfo.error = error instanceof Error ? error.message : 'Unknown error';
    debugInfo.errorType = error instanceof Error ? error.constructor.name : 'Unknown';

    return NextResponse.json(
      {
        success: false,
        error: 'Database connection test failed',
        debugInfo
      },
      { status: 500 }
    );
  }
}