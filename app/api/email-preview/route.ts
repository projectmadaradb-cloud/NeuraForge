import { NextRequest, NextResponse } from 'next/server';
import { generateResearchCompleteEmail, generateResearchErrorEmail } from '@/lib/email-templates';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'complete';

  if (type === 'complete') {
    const html = generateResearchCompleteEmail({
      recipientName: 'Alex Thompson',
      topic: 'The Future of Artificial Intelligence in Healthcare: Opportunities and Challenges',
      reportUrl: 'http://localhost:3000/research/test-job-123',
      downloadUrl: 'http://localhost:3000/api/jobs/test-job-123/report?download=true',
      completedAt: new Date(),
      sourceCount: 15,
      insightCount: 12,
      format: 'report',
      length: 'medium'
    });

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else if (type === 'error') {
    const html = generateResearchErrorEmail({
      recipientName: 'Alex Thompson',
      topic: 'The Future of Artificial Intelligence in Healthcare',
      errorMessage: 'Unable to access required research databases due to temporary service outage. Our technical team is investigating and will retry your request automatically.',
      supportUrl: 'http://localhost:3000/contact'
    });

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else {
    return NextResponse.json(
      { error: 'Invalid type. Use ?type=complete or ?type=error' },
      { status: 400 }
    );
  }
}