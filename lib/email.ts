import nodemailer from 'nodemailer';

export interface EmailConfig {
  host?: string;
  port?: number;
  user?: string;
  pass?: string;
  to?: string;
}

export function createEmailTransporter(config?: EmailConfig) {
  const smtpHost = config?.host || process.env.SMTP_HOST;
  const smtpPort = config?.port || parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = config?.user || process.env.SMTP_USER;
  const smtpPass = config?.pass || process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.');
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions, config?: EmailConfig): Promise<void> {
  const transporter = createEmailTransporter(config);
  const smtpUser = config?.user || process.env.SMTP_USER;
  
  const mailOptions = {
    from: `"NeuraForge AI Research" <${smtpUser}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    replyTo: options.replyTo || smtpUser,
  };

  await transporter.sendMail(mailOptions);
}