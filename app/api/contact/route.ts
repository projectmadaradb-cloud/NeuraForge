import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validations/contact';
import { z } from 'zod';

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per window

// Suspicious content patterns for spam detection
const SUSPICIOUS_PATTERNS = [
  /\b(viagra|casino|loan|debt|bitcoin|crypto|investment|roi|guaranteed|money|rich|wealthy)\b/i,
  /\b(click here|visit now|buy now|act now|limited time|urgent|winner|congratulations)\b/i,
  /http[s]?:\/\/[^\s]+/g, // URLs in message
  /\b\d{3}-\d{3}-\d{4}\b/, // Phone numbers
];

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const userRateLimit = rateLimitMap.get(clientIP);
  
  if (!userRateLimit || now > userRateLimit.resetTime) {
    // Reset or create new rate limit window
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  
  if (userRateLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userRateLimit.count++;
  return true;
}

function detectSpam(content: string): boolean {
  return SUSPICIOUS_PATTERNS.some(pattern => pattern.test(content));
}

function generateSubmissionId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const company = formData.get('company') as string; // honeypot field
    
    // Honeypot check
    if (company) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Rate limiting
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Spam detection
    const contentToCheck = `${name} ${email} ${message}`;
    if (detectSpam(contentToCheck)) {
      return NextResponse.json(
        { error: 'Message blocked by spam filter' },
        { status: 400 }
      );
    }
    
    // In development, just log and return success
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', { name, email, service, message });
      return NextResponse.json({
        success: true,
        message: 'Message received (development mode)'
      });
    }
    
    // Production email sending (requires environment variables)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || '587';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || 'hello@neuraforge.tech';
    
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    const submissionId = generateSubmissionId();
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💌 New Contact Form Submission</h1>
            <p>NeuraForge Contact Form - ${new Date().toLocaleString()}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            ${service ? `
            <div class="field">
              <div class="label">🔧 Service Interest:</div>
              <div class="value">${service}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">🌐 Client IP:</div>
              <div class="value">${clientIP}</div>
            </div>
            <div class="field">
              <div class="label">🆔 Submission ID:</div>
              <div class="value">${submissionId}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was automatically generated from the NeuraForge contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const mailOptions = {
      from: `"NeuraForge Contact Form" <${smtpUser}>`,
      to: smtpTo,
      replyTo: email,
      subject: `🚀 New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: emailHtml,
    };
    
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}