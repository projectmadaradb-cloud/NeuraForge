import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check critical environment variables
    const envCheck = {
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      hasDeepSeekKey: !!process.env.DEEPSEEK_API_KEY,
      hasSmtpConfig: !!process.env.SMTP_HOST,
      databaseUrlPrefix: process.env.DATABASE_URL?.substring(0, 20) + '...',
      nodeEnv: process.env.NODE_ENV,
    };
    
    return NextResponse.json({
      success: true,
      environment: envCheck,
      message: 'Environment check complete'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Environment check failed'
    }, { status: 500 });
  }
}