// Email template interfaces
export interface EmailTemplateData {
  jobId: string;
  topic: string;
  reportUrl: string;
  userEmail: string;
  errorMessage?: string;
}

// Main completion email template function
export function getCompletionEmailHTML(data: {
  jobId: string;
  topic: string;
  reportUrl: string;
  userEmail: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Completed - NeuraForge</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            min-height: 100vh;
            color: #ffffff;
        }
        
        .email-container {
            max-width: 680px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
                        0 16px 32px rgba(0, 0, 0, 0.2);
        }
        
        .header {
            background: linear-gradient(135deg, #A855F7 0%, #6D28D9 100%);
            padding: 80px 60px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .logo-section {
            margin-bottom: 32px;
            position: relative;
            z-index: 2;
        }
        
        .brand-text {
            font-size: 32px;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
            letter-spacing: -0.5px;
            margin-bottom: 8px;
        }
        
        .brand-tagline {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            letter-spacing: 0.5px;
        }
        
        .main-headline {
            font-size: 48px;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
            letter-spacing: -1px;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
        }
        
        .sub-headline {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }
        
        .content-section {
            padding: 80px 60px;
            background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
        }
        
        .completion-message {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .completion-title {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }
        
        .completion-description {
            font-size: 18px;
            color: #9ca3af;
            line-height: 1.7;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .topic-highlight {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%);
            border: 1px solid rgba(168, 85, 247, 0.2);
            border-radius: 20px;
            padding: 32px;
            margin: 40px 0;
            text-align: center;
        }
        
        .topic-label {
            font-size: 14px;
            color: #A855F7;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }
        
        .topic-title {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.4;
        }
        
        .cta-section {
            text-align: center;
            margin: 60px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #A855F7 0%, #6D28D9 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 20px 48px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3),
                        0 8px 16px rgba(168, 85, 247, 0.2);
        }
        
        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s;
        }
        
        .cta-button:hover::before {
            left: 100%;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin: 80px 0;
        }
        
        .feature-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 40px 32px;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 48px rgba(168, 85, 247, 0.15);
            border-color: rgba(168, 85, 247, 0.3);
        }
        
        .feature-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 24px;
            background: linear-gradient(135deg, #A855F7, #6D28D9);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
        }
        
        .feature-title {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 12px;
        }
        
        .feature-description {
            font-size: 16px;
            color: #9ca3af;
            line-height: 1.5;
        }
        
        .footer-section {
            background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
            padding: 80px 60px 60px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-logo {
            margin-bottom: 32px;
            opacity: 0.8;
        }
        
        .footer-text {
            color: #6b7280;
            font-size: 16px;
            margin-bottom: 40px;
            line-height: 1.6;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }
        
        .footer-link {
            color: #9ca3af;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;
        }
        
        .footer-link:hover {
            color: #A855F7;
        }
        
        .copyright {
            color: #6b7280;
            font-size: 14px;
            font-weight: 400;
        }
        
        @media (max-width: 640px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content-section, .footer-section {
                padding: 40px 24px;
            }
            
            .main-headline {
                font-size: 36px;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
                gap: 24px;
                margin: 40px 0;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo-section">
                <svg width="240" height="240" viewBox="0 0 240 240" style="opacity: 0.9;">
                    <defs>
                        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="100%" stop-color="rgba(255, 255, 255, 0.8)"/>
                        </linearGradient>
                    </defs>
                    <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="url(#logo-gradient)" stroke-width="14"/>
                    <path d="M64 168V72l64 64V72" fill="none" stroke="url(#logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <path d="M128 168h48M176 120h-32" fill="none" stroke="url(#logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <circle cx="176" cy="168" r="7" fill="url(#logo-gradient)"/>
                    <circle cx="176" cy="120" r="7" fill="url(#logo-gradient)"/>
                </svg>
                <div class="brand-text">NeuraForge</div>
                <div class="brand-tagline">Advanced AI Research Intelligence</div>
            </div>
            
            <h1 class="main-headline">Research Complete</h1>
            <p class="sub-headline">Your premium research intelligence is ready</p>
        </div>
        
        <div class="content-section">
            <div class="completion-message">
                <h2 class="completion-title">🎉 Your Research is Ready!</h2>
                <p class="completion-description">
                    We've successfully completed your research request and compiled comprehensive insights 
                    using our advanced AI intelligence platform.
                </p>
            </div>
            
            <div class="topic-highlight">
                <div class="topic-label">Research Topic</div>
                <div class="topic-title">${data.topic}</div>
            </div>
            
            <div class="cta-section">
                <a href="${data.reportUrl}" class="cta-button">
                    View Your Research Report
                </a>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <div class="feature-title">AI-Powered Analysis</div>
                    <div class="feature-description">
                        Advanced machine learning algorithms analyzed thousands of data points
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <div class="feature-title">Comprehensive Insights</div>
                    <div class="feature-description">
                        Deep market intelligence with actionable recommendations
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-title">Real-Time Data</div>
                    <div class="feature-description">
                        Latest market trends and real-time intelligence integration
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-section">
            <div class="footer-logo">
                <svg width="180" height="180" viewBox="0 0 240 240">
                    <defs>
                        <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#A855F7"/>
                            <stop offset="100%" stop-color="#6D28D9"/>
                        </linearGradient>
                    </defs>
                    <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="url(#footer-logo-gradient)" stroke-width="14"/>
                    <path d="M64 168V72l64 64V72" fill="none" stroke="url(#footer-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <path d="M128 168h48M176 120h-32" fill="none" stroke="url(#footer-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <circle cx="176" cy="168" r="7" fill="url(#footer-logo-gradient)"/>
                    <circle cx="176" cy="120" r="7" fill="url(#footer-logo-gradient)"/>
                </svg>
            </div>
            
            <div class="footer-text">
                Thank you for choosing NeuraForge. We're committed to delivering the highest quality research intelligence.
            </div>
            
            <div class="footer-links">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Support Center</a>
                <a href="#" class="footer-link">Contact Us</a>
            </div>
            
            <div class="copyright">
                © 2025 NeuraForge. All rights reserved.<br>
                Need help? Contact us at hello@neuraforge.tech
            </div>
        </div>
    </div>
</body>
</html>`;
}

// Error email template function
export function getErrorEmailHTML(data: {
  jobId: string;
  topic: string;
  userEmail: string;
  errorMessage?: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Issue - NeuraForge</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            min-height: 100vh;
            color: #ffffff;
        }
        
        .email-container {
            max-width: 680px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
                        0 16px 32px rgba(0, 0, 0, 0.2);
        }
        
        .header {
            background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
            padding: 80px 60px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .logo-section {
            margin-bottom: 32px;
            position: relative;
            z-index: 2;
        }
        
        .brand-text {
            font-size: 32px;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
            letter-spacing: -0.5px;
            margin-bottom: 8px;
        }
        
        .brand-tagline {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            letter-spacing: 0.5px;
        }
        
        .main-headline {
            font-size: 48px;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
            letter-spacing: -1px;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
        }
        
        .sub-headline {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }
        
        .content-section {
            padding: 80px 60px;
            background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
        }
        
        .error-message {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .error-title {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }
        
        .error-description {
            font-size: 18px;
            color: #9ca3af;
            line-height: 1.7;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .topic-highlight {
            background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(153, 27, 27, 0.1) 100%);
            border: 1px solid rgba(220, 38, 38, 0.2);
            border-radius: 20px;
            padding: 32px;
            margin: 40px 0;
            text-align: center;
        }
        
        .topic-label {
            font-size: 14px;
            color: #DC2626;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }
        
        .topic-title {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.4;
        }
        
        .cta-section {
            text-align: center;
            margin: 60px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #A855F7 0%, #6D28D9 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 20px 48px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3),
                        0 8px 16px rgba(168, 85, 247, 0.2);
        }
        
        .error-details {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 32px;
            margin: 40px 0;
        }
        
        .error-details-title {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 16px;
        }
        
        .error-details-text {
            font-size: 16px;
            color: #9ca3af;
            line-height: 1.5;
        }
        
        .footer-section {
            background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
            padding: 80px 60px 60px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-logo {
            margin-bottom: 32px;
            opacity: 0.8;
        }
        
        .footer-text {
            color: #6b7280;
            font-size: 16px;
            margin-bottom: 40px;
            line-height: 1.6;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }
        
        .footer-link {
            color: #9ca3af;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;
        }
        
        .footer-link:hover {
            color: #A855F7;
        }
        
        .copyright {
            color: #6b7280;
            font-size: 14px;
            font-weight: 400;
        }
        
        @media (max-width: 640px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content-section, .footer-section {
                padding: 40px 24px;
            }
            
            .main-headline {
                font-size: 36px;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo-section">
                <svg width="240" height="240" viewBox="0 0 240 240" style="opacity: 0.9;">
                    <defs>
                        <linearGradient id="error-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="100%" stop-color="rgba(255, 255, 255, 0.8)"/>
                        </linearGradient>
                    </defs>
                    <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="url(#error-logo-gradient)" stroke-width="14"/>
                    <path d="M64 168V72l64 64V72" fill="none" stroke="url(#error-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <path d="M128 168h48M176 120h-32" fill="none" stroke="url(#error-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <circle cx="176" cy="168" r="7" fill="url(#error-logo-gradient)"/>
                    <circle cx="176" cy="120" r="7" fill="url(#error-logo-gradient)"/>
                </svg>
                <div class="brand-text">NeuraForge</div>
                <div class="brand-tagline">Advanced AI Research Intelligence</div>
            </div>
            
            <h1 class="main-headline">Research Issue</h1>
            <p class="sub-headline">We encountered an issue with your research request</p>
        </div>
        
        <div class="content-section">
            <div class="error-message">
                <h2 class="error-title">⚠️ Research Processing Issue</h2>
                <p class="error-description">
                    We encountered an unexpected issue while processing your research request. 
                    Our team has been automatically notified and will investigate promptly.
                </p>
            </div>
            
            <div class="topic-highlight">
                <div class="topic-label">Research Topic</div>
                <div class="topic-title">${data.topic}</div>
            </div>
            
            ${data.errorMessage ? `
            <div class="error-details">
                <div class="error-details-title">Technical Details</div>
                <div class="error-details-text">${data.errorMessage}</div>
            </div>
            ` : ''}
            
            <div class="cta-section">
                <a href="mailto:hello@neuraforge.tech?subject=Research Issue - Job ${data.jobId}" class="cta-button">
                    Contact Support
                </a>
            </div>
        </div>
        
        <div class="footer-section">
            <div class="footer-logo">
                <svg width="180" height="180" viewBox="0 0 240 240">
                    <defs>
                        <linearGradient id="error-footer-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#A855F7"/>
                            <stop offset="100%" stop-color="#6D28D9"/>
                        </linearGradient>
                    </defs>
                    <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="url(#error-footer-logo-gradient)" stroke-width="14"/>
                    <path d="M64 168V72l64 64V72" fill="none" stroke="url(#error-footer-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <path d="M128 168h48M176 120h-32" fill="none" stroke="url(#error-footer-logo-gradient)" stroke-linecap="round" stroke-width="14"/>
                    <circle cx="176" cy="168" r="7" fill="url(#error-footer-logo-gradient)"/>
                    <circle cx="176" cy="120" r="7" fill="url(#error-footer-logo-gradient)"/>
                </svg>
            </div>
            
            <div class="footer-text">
                Thank you for choosing NeuraForge. We're committed to delivering the highest quality research intelligence.
            </div>
            
            <div class="footer-links">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Support Center</a>
                <a href="#" class="footer-link">Contact Us</a>
            </div>
            
            <div class="copyright">
                © 2025 NeuraForge. All rights reserved.<br>
                Need help? Contact us at hello@neuraforge.tech
            </div>
        </div>
    </div>
</body>
</html>`;
}

// Legacy functions for backward compatibility
export function generateCompletionEmailTemplate(data: EmailTemplateData): string {
  return getCompletionEmailHTML({
    jobId: data.jobId,
    topic: data.topic,
    reportUrl: data.reportUrl,
    userEmail: data.userEmail
  });
}

export function generateErrorEmailTemplate(data: EmailTemplateData & { errorMessage?: string }): string {
  return getErrorEmailHTML({
    jobId: data.jobId,
    topic: data.topic,
    userEmail: data.userEmail,
    errorMessage: data.errorMessage
  });
}