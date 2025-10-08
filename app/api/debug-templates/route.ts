import { NextRequest, NextResponse } from 'next/server';
import { generateCompletionEmailTemplate, generateErrorEmailTemplate } from '@/lib/email/templates';

export async function GET() {
  try {
    // Test data
    const testData = {
      jobId: 'debug-test-123',
      topic: 'Debug Premium AI Email Template Testing',
      reportUrl: 'https://neuraforge.tech/research/debug-test-123',
      userEmail: 'hello@neuraforge.tech'
    };

    // Generate both templates
    const completionHTML = generateCompletionEmailTemplate(testData);
    const errorHTML = generateErrorEmailTemplate({...testData, errorMessage: 'Debug test error message'});

    // Return debug info
    return NextResponse.json({
      success: true,
      debug: {
        completionEmailLength: completionHTML.length,
        errorEmailLength: errorHTML.length,
        completionHasLogo: completionHTML.includes('NeuraForge'),
        errorHasLogo: errorHTML.includes('NeuraForge'),
        completionHasSVG: completionHTML.includes('<svg'),
        errorHasSVG: errorHTML.includes('<svg'),
        completionHasYourLogo: completionHTML.includes('M64 168V72l64 64V72'),
        errorHasYourLogo: errorHTML.includes('M64 168V72l64 64V72'),
        completionHasSocialIcons: completionHTML.includes('errorIconGradient'),
        errorHasSocialIcons: errorHTML.includes('errorIconGradient'),
        sampleCompletionHTML: completionHTML.substring(0, 1000),
        sampleErrorHTML: errorHTML.substring(0, 1000)
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}