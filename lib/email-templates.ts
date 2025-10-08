export interface ResearchEmailTemplateData {
  recipientName?: string;
  topic: string;
  reportUrl: string;
  downloadUrl: string;
  completedAt: Date;
  sourceCount: number;
  insightCount: number;
  format: string;
  length: string;
}

export function generateResearchCompleteEmail(data: ResearchEmailTemplateData): string {
  const {
    recipientName = "Valued Client",
    topic,
    reportUrl,
    downloadUrl,
    completedAt,
    sourceCount,
    insightCount,
    format,
    length
  } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your NeuraForge Research Report is Ready</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background-color: #f7fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Header with gradient */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            animation: grain 20s linear infinite;
            pointer-events: none;
        }
        
        @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -5%); }
            20% { transform: translate(-10%, 5%); }
            30% { transform: translate(5%, -10%); }
            40% { transform: translate(-5%, 15%); }
            50% { transform: translate(-10%, 5%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(-15%, 10%); }
            90% { transform: translate(10%, 5%); }
        }
        
        .logo-container {
            position: relative;
            z-index: 1;
            margin-bottom: 20px;
        }
        
        .logo {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 800;
            color: white;
            text-decoration: none;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .brand-name {
            position: relative;
            z-index: 1;
            color: white;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
        }
        
        .tagline {
            position: relative;
            z-index: 1;
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            font-weight: 500;
        }
        
        /* Main content */
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
        }
        
        .success-badge {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 25px;
        }
        
        .success-badge::before {
            content: '✓';
            margin-right: 8px;
            font-weight: 800;
        }
        
        .report-card {
            background: linear-gradient(135deg, #f7fafc, #edf2f7);
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            border: 1px solid #e2e8f0;
        }
        
        .report-title {
            font-size: 18px;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .report-title::before {
            content: '📊';
            margin-right: 10px;
            font-size: 20px;
        }
        
        .report-topic {
            font-size: 16px;
            color: #4a5568;
            margin-bottom: 20px;
            font-style: italic;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-item {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        
        .stat-number {
            font-size: 24px;
            font-weight: 800;
            color: #667eea;
            display: block;
        }
        
        .stat-label {
            font-size: 12px;
            color: #718096;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        /* CTA Buttons */
        .cta-container {
            margin: 30px 0;
            text-align: center;
        }
        
        .cta-primary {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 16px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            margin: 0 10px 15px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .cta-secondary {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 14px 28px;
            border: 2px solid #667eea;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            margin: 0 10px;
            transition: all 0.3s ease;
        }
        
        .cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }
        
        .cta-secondary:hover {
            background: #667eea;
            color: white;
        }
        
        /* Footer */
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer-text {
            color: #6c757d;
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 0 8px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 50%;
            line-height: 40px;
            font-weight: 600;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
            margin: 25px 0;
        }
        
        .completion-time {
            color: #718096;
            font-size: 14px;
            margin-top: 15px;
        }
        
        /* Responsive */
        @media (max-width: 480px) {
            .email-container {
                margin: 10px;
                border-radius: 12px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .cta-primary, .cta-secondary {
                display: block;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <div class="logo">NF</div>
            </div>
            <div class="brand-name">NeuraForge</div>
            <div class="tagline">AI-Powered Research Excellence</div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <div class="greeting">Hello ${recipientName}! 👋</div>
            
            <div class="success-badge">Research Complete</div>
            
            <p style="font-size: 16px; color: #4a5568; margin-bottom: 25px;">
                Your comprehensive AI research report is ready! Our advanced neural networks have analyzed 
                multiple sources to deliver premium insights tailored specifically for your needs.
            </p>
            
            <div class="report-card">
                <div class="report-title">Research Report Ready</div>
                <div class="report-topic">"${topic}"</div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${sourceCount}</span>
                        <span class="stat-label">Sources Analyzed</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${insightCount}</span>
                        <span class="stat-label">Key Insights</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${format.charAt(0).toUpperCase() + format.slice(1)}</span>
                        <span class="stat-label">Format</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${length.charAt(0).toUpperCase() + length.slice(1)}</span>
                        <span class="stat-label">Length</span>
                    </div>
                </div>
                
                <div class="completion-time">
                    ⏱️ Completed on ${completedAt.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            </div>
            
            <div class="cta-container">
                <a href="${reportUrl}" class="cta-primary">📖 View Report Online</a>
                <a href="${downloadUrl}" class="cta-secondary">⬇️ Download PDF</a>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 14px; color: #718096; text-align: center;">
                <strong>Premium AI Research by NeuraForge</strong><br>
                Cutting-edge artificial intelligence • Comprehensive analysis • Professional insights
            </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                <strong>NeuraForge</strong> - Transforming Ideas into Intelligent Solutions
            </div>
            
            <div class="social-links">
                <a href="#" title="LinkedIn">in</a>
                <a href="#" title="Twitter">X</a>
                <a href="#" title="GitHub">⚡</a>
            </div>
            
            <div style="font-size: 12px; color: #adb5bd; margin-top: 20px;">
                This email was sent to you because you requested a research report from NeuraForge.<br>
                If you have any questions, simply reply to this email.
            </div>
        </div>
    </div>
</body>
</html>`;
}

export function generateResearchErrorEmail(data: {
  recipientName?: string;
  topic: string;
  errorMessage: string;
  supportUrl: string;
}): string {
  const { recipientName = "Valued Client", topic, errorMessage, supportUrl } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Report - Issue Encountered</title>
    <style>
        /* Simplified styles for error email */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background-color: #f7fafc;
            margin: 0;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #e53e3e, #c53030);
            padding: 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 15px;
        }
        
        .content {
            padding: 30px;
        }
        
        .error-badge {
            background: #fed7d7;
            color: #c53030;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 20px;
        }
        
        .cta-button {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">NF</div>
            <h1>NeuraForge</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${recipientName},</h2>
            
            <div class="error-badge">⚠️ Processing Issue</div>
            
            <p>We encountered an issue while processing your research request for "<strong>${topic}</strong>".</p>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <strong>Error Details:</strong><br>
                ${errorMessage}
            </div>
            
            <p>Our team has been automatically notified and is working to resolve this issue. We'll retry your request and notify you once it's complete.</p>
            
            <a href="${supportUrl}" class="cta-button">Contact Support</a>
            
            <p style="margin-top: 30px; font-size: 14px; color: #718096;">
                Thank you for your patience.<br>
                <strong>The NeuraForge Team</strong>
            </p>
        </div>
    </div>
</body>
</html>`;
}