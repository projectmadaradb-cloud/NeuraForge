# NeuraForge Vercel Deployment Guide

## Quick Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/neuraforge)

## 🚀 Production Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Production ready deployment"
git push origin main
```

### 2. Vercel Project Setup
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure deployment settings:
   - **Framework Preset**: Next.js
   - **Node.js Version**: 18.x
   - **Output Directory**: Leave default (auto-detected)

### 3. Environment Variables
Add these to your Vercel Environment Variables:

```bash
# Required for Contact Form
SMTP_HOST=smtppro.zoho.in
SMTP_PORT=587
SMTP_USER=hello@neuraforge.tech
SMTP_PASS=Uwbw2Ss66Jk2
EMAIL_FROM=hello@neuraforge.tech
EMAIL_TO=hello@neuraforge.tech

# Production Environment
NODE_ENV=production
```

### 4. Domain Configuration
1. **Custom Domain**: Add `neuraforge.tech` in Vercel Domains
2. **SSL Certificate**: Auto-managed by Vercel
3. **DNS Records** (set in your domain registrar):
   ```
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 5. Performance Settings
- **Edge Functions**: Enabled (default)
- **Image Optimization**: Enabled (default)
- **Automatic Static Optimization**: Enabled
- **Edge Runtime**: Node.js 18.x

## 📊 Production Checklist

### ✅ Build & Performance
- [x] Production build successful (142KB First Load JS)
- [x] All routes pre-rendered properly (31 pages)
- [x] Video file optimized (4.54MB)
- [x] Font loading optimized with display:swap
- [x] Static assets optimized

### ✅ SEO & Metadata
- [x] Sitemap generated at `/sitemap.xml`
- [x] Robots.txt configured
- [x] Meta tags optimized for all pages
- [x] Open Graph images configured
- [x] Canonical URLs set

### ✅ Security & Forms
- [x] Contact form with spam protection
- [x] Rate limiting (3 requests/15min)
- [x] Honeypot anti-bot protection
- [x] SMTP configuration secure
- [x] Environment variables protected

### ✅ Responsive & Accessibility
- [x] Mobile responsive design
- [x] Dark/light theme toggle
- [x] Keyboard navigation
- [x] WCAG AA compliance
- [x] Screen reader support

## 🔧 Post-Deployment

### Monitoring
- Set up Vercel Analytics (optional)
- Configure error monitoring
- Set up uptime monitoring

### Performance
- Monitor Core Web Vitals
- Optimize images further if needed
- Consider video lazy loading

### SEO
- Submit sitemap to Google Search Console
- Set up Google Analytics (optional)
- Monitor search rankings

## 🌐 Live URLs
- **Production**: https://neuraforge.tech
- **Staging**: https://neuraforge-git-main.vercel.app
- **Development**: http://localhost:3000

## 📧 Contact Form Testing
After deployment, test the contact form:
1. Visit `/contact` page
2. Submit test message
3. Check `hello@neuraforge.tech` inbox
4. Verify email formatting and reply-to functionality

## 🚨 Troubleshooting

### Common Issues
1. **Environment Variables**: Double-check Vercel env vars
2. **Build Errors**: Check build logs in Vercel dashboard
3. **Email Issues**: Verify SMTP credentials in production
4. **Domain Issues**: Check DNS propagation (24-48 hours)

### Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issue in repository