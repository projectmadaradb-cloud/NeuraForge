import { NextRequest, NextResponse } from 'next/server';
import { ResearchEmailService } from '@/lib/email/research';

export async function POST(request: NextRequest) {
  try {
    const { email, type = 'completion' } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    let success = false;
    
    if (type === 'completion') {
      // Test completion email
      success = await ResearchEmailService.notifyCompletion(
        'test-job-' + Date.now(),
        email,
        'Premium AI Email Template Testing - NeuraForge Research Assistant Integration'
      );
    } else if (type === 'error') {
      // Test error email
      success = await ResearchEmailService.notifyError(
        'test-error-' + Date.now(),
        email,
        'Premium AI Email Template Testing - Error Handling',
        'This is a test error message to demonstrate our premium error email template design'
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid email type. Use "completion" or "error"' },
        { status: 400 }
      );
    }

    if (success) {
      return NextResponse.json({
        success: true,
        message: `Test ${type} email sent successfully to ${email}`
      });
    } else {
      return NextResponse.json(
        { 
          error: `Failed to send test ${type} email`
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Email test endpoint. POST with { "email": "test@example.com", "type": "completion|error" }'
  });
}