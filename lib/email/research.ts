import { emailService, EmailTemplateData } from './index';

export class ResearchEmailService {
  /**
   * Send completion notification email when research job finishes successfully
   */
  public static async notifyCompletion(
    jobId: string,
    userEmail: string,
    topic: string,
    baseUrl?: string
  ): Promise<boolean> {
    const reportUrl = `${baseUrl || process.env.NEXTAUTH_URL || 'https://neuraforge.tech'}/research/${jobId}`;
    
    const emailData: EmailTemplateData = {
      jobId,
      topic,
      reportUrl,
      userEmail
    };

    try {
      const success = await emailService.sendResearchCompletionEmail(emailData);
      
      if (success) {
        console.log(`✅ Research completion notification sent to ${userEmail} for job ${jobId}`);
      } else {
        console.log(`⚠️ Failed to send completion notification to ${userEmail} for job ${jobId}`);
      }
      
      return success;
    } catch (error) {
      console.error(`❌ Error sending completion notification for job ${jobId}:`, error);
      return false;
    }
  }

  /**
   * Send error notification email when research job fails
   */
  public static async notifyError(
    jobId: string,
    userEmail: string,
    topic: string,
    errorMessage?: string,
    baseUrl?: string
  ): Promise<boolean> {
    const reportUrl = `${baseUrl || process.env.NEXTAUTH_URL || 'https://neuraforge.tech'}/research/${jobId}`;
    
    const emailData: EmailTemplateData = {
      jobId,
      topic,
      reportUrl,
      userEmail,
      errorMessage: errorMessage
    };

    try {
      const success = await emailService.sendResearchErrorEmail(emailData);
      
      if (success) {
        console.log(`✅ Research error notification sent to ${userEmail} for job ${jobId}`);
      } else {
        console.log(`⚠️ Failed to send error notification to ${userEmail} for job ${jobId}`);
      }
      
      return success;
    } catch (error) {
      console.error(`❌ Error sending error notification for job ${jobId}:`, error);
      return false;
    }
  }

  /**
   * Check if email notifications are enabled and configured
   */
  public static isEmailEnabled(): boolean {
    return emailService.isConfigured();
  }

  /**
   * Send a test email to verify configuration
   */
  public static async sendTestNotification(recipient: string): Promise<boolean> {
    try {
      const success = await emailService.sendTestEmail(recipient);
      
      if (success) {
        console.log(`✅ Test email sent successfully to ${recipient}`);
      } else {
        console.log(`⚠️ Failed to send test email to ${recipient}`);
      }
      
      return success;
    } catch (error) {
      console.error(`❌ Error sending test email to ${recipient}:`, error);
      return false;
    }
  }
}