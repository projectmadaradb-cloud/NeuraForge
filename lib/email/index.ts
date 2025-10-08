import nodemailer from 'nodemailer';
import { generateCompletionEmailTemplate, generateErrorEmailTemplate, EmailTemplateData } from './templates';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private config: EmailConfig | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || '587';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn('Email service not configured - missing SMTP environment variables');
      return;
    }

    this.config = {
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    };

    this.transporter = nodemailer.createTransport({
      ...this.config,
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  public isConfigured(): boolean {
    return this.transporter !== null && this.config !== null;
  }

  public async sendResearchCompletionEmail(data: EmailTemplateData): Promise<boolean> {
    if (!this.isConfigured() || !data.userEmail) {
      console.log('Email service not configured or no user email provided');
      return false;
    }

    try {
      const htmlContent = generateCompletionEmailTemplate(data);
      
      const mailOptions = {
        from: `"NeuraForge Research" <${this.config!.auth.user}>`,
        to: data.userEmail,
        replyTo: this.config!.auth.user,
        subject: `🎉 Your Research Report is Ready: ${data.topic.substring(0, 50)}${data.topic.length > 50 ? '...' : ''}`,
        html: htmlContent,
      };

      const result = await this.transporter!.sendMail(mailOptions);
      console.log(`Research completion email sent successfully to ${data.userEmail}:`, result.messageId);
      return true;
    } catch (error) {
      console.error('Failed to send research completion email:', error);
      return false;
    }
  }

  public async sendResearchErrorEmail(data: EmailTemplateData): Promise<boolean> {
    if (!this.isConfigured() || !data.userEmail) {
      console.log('Email service not configured or no user email provided');
      return false;
    }

    try {
      const htmlContent = generateErrorEmailTemplate(data);
      
      const mailOptions = {
        from: `"NeuraForge Research" <${this.config!.auth.user}>`,
        to: data.userEmail,
        replyTo: this.config!.auth.user,
        subject: `🚧 Research Processing Issue: ${data.topic.substring(0, 50)}${data.topic.length > 50 ? '...' : ''}`,
        html: htmlContent,
      };

      const result = await this.transporter!.sendMail(mailOptions);
      console.log(`Research error email sent successfully to ${data.userEmail}:`, result.messageId);
      return true;
    } catch (error) {
      console.error('Failed to send research error email:', error);
      return false;
    }
  }

  public async sendTestEmail(recipient: string): Promise<boolean> {
    if (!this.isConfigured()) {
      throw new Error('Email service not configured');
    }

    try {
      const testData: EmailTemplateData = {
        jobId: 'test-' + Date.now(),
        topic: 'Email System Test - NeuraForge Premium Templates',
        reportUrl: `${process.env.NEXTAUTH_URL || 'https://neuraforge.tech'}/research/test`,
        userEmail: recipient
      };

      return await this.sendResearchCompletionEmail(testData);
    } catch (error) {
      console.error('Failed to send test email:', error);
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

// Export types for use in other modules
export type { EmailTemplateData } from './templates';