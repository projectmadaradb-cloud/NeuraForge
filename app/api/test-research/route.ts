import { NextRequest, NextResponse } from 'next/server';
import { validateResearchEnv } from '@/lib/env';

export async function POST(request: NextRequest) {
  try {
    // Test environment validation
    validateResearchEnv();
    
    // Test database connection
    const { prisma } = await import('@/lib/db');
    
    // Try to connect to database
    await prisma.$connect();
    
    // Test data parsing
    const body = await request.json();
    
    return NextResponse.json({
      success: true,
      message: 'Research system test passed',
      receivedData: body,
      databaseConnected: true
    });
    
  } catch (error) {
    console.error('Research test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorType: error?.constructor?.name,
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}