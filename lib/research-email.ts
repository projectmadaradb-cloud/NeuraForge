import { sendEmail } from './email';
import { generateResearchCompleteEmail, generateResearchErrorEmail } from './email-templates';

export interface ResearchReportEmailData {
  userEmail: string;
  topic: string;
  jobId: string;
  format: string;
  length: string;
  sourceCount: number;
  insightCount: number;
  completedAt: Date;
  recipientName?: string;
}

export async function sendResearchCompleteNotification(data: ResearchReportEmailData): Promise<void> {
  if (!data.userEmail) {
    console.log('No email provided for research report notification');
    return;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';
    const reportUrl = `${baseUrl}/research/${data.jobId}`;
    const downloadUrl = `${baseUrl}/api/jobs/${data.jobId}/report?download=true`;

    const emailHtml = generateResearchCompleteEmail({
      recipientName: data.recipientName,
      topic: data.topic,
      reportUrl,
      downloadUrl,
      completedAt: data.completedAt,
      sourceCount: data.sourceCount,
      insightCount: data.insightCount,
      format: data.format,
      length: data.length,
    });

    await sendEmail({
      to: data.userEmail,
      subject: `🎉 Your NeuraForge Research Report is Ready: "${data.topic}"`,
      html: emailHtml,
    });

    console.log(`Research report notification sent to: ${data.userEmail}`);
  } catch (error) {
    console.error('Failed to send research report notification:', error);
    // Don't throw - we don't want to fail the job if email fails
  }
}

export async function sendResearchErrorNotification(data: {
  userEmail: string;
  topic: string;
  errorMessage: string;
  recipientName?: string;
}): Promise<void> {
  if (!data.userEmail) {
    console.log('No email provided for research error notification');
    return;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';
    const supportUrl = `${baseUrl}/contact`;

    const emailHtml = generateResearchErrorEmail({
      recipientName: data.recipientName,
      topic: data.topic,
      errorMessage: data.errorMessage,
      supportUrl,
    });

    await sendEmail({
      to: data.userEmail,
      subject: `⚠️ NeuraForge Research Report - Processing Issue`,
      html: emailHtml,
    });

    console.log(`Research error notification sent to: ${data.userEmail}`);
  } catch (error) {
    console.error('Failed to send research error notification:', error);
    // Don't throw - this is a secondary concern
  }
}