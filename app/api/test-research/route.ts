import { NextRequest, NextResponse } from 'next/server';
import { validateResearchEnv } from '@/lib/env';

export async function POST(request: NextRequest) {
  const debugInfo: any = { step: 'starting' };
  
  try {
    debugInfo.step = 'environment validation';
    // Test environment validation
    validateResearchEnv();
    debugInfo.envValid = true;
    
    debugInfo.step = 'importing prisma';
    // Test database connection
    const { prisma } = await import('@/lib/db');
    debugInfo.prismaImported = true;
    
    debugInfo.step = 'connecting to database';
    // Try to connect to database
    await prisma.$connect();
    debugInfo.dbConnected = true;
    
    debugInfo.step = 'parsing request body';
    // Test data parsing
    const body = await request.json();
    debugInfo.bodyParsed = true;
    
    return NextResponse.json({
      success: true,
      message: 'Research system test passed',
      receivedData: body,
      debugInfo
    });
    
  } catch (error) {
    console.error('Research test failed at step:', debugInfo.step, error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorType: error?.constructor?.name,
      failedAtStep: debugInfo.step,
      debugInfo,
      // Don't include stack in production, too verbose
    }, { status: 500 });
  }
}