# 🚀 NeuraForge Vercel Deployment Guide

## Step-by-Step Deployment Instructions

### Step 1: Install Git (if not already installed)
1. Go to https://git-scm.com/download/win
2. Download Git for Windows
3. Install with default settings
4. Restart your terminal/command prompt

### Step 2: Initialize Git Repository
Open PowerShell in your NeuraForge folder and run:
```bash
git init
git add .
git commit -m "Initial commit - NeuraForge website ready for production"
```

### Step 3: Create GitHub Repository
1. Go to https://github.com
2. Click "New Repository"
3. Name it: `neuraforge-website`
4. Set to Public (or Private if you prefer)
5. Don't initialize with README (we already have files)
6. Click "Create Repository"

### Step 4: Connect Local Repository to GitHub
Replace `YOUR-USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/YOUR-USERNAME/neuraforge-website.git
git branch -M main
git push -u origin main
```

### Step 5: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up/Login (can use GitHub account)
3. Click "New Project"
4. Click "Import" next to your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: Leave empty (auto-detected)

### Step 6: Add Environment Variables
In Vercel project dashboard:
1. Go to "Settings" tab
2. Click "Environment Variables"
3. Add these variables:

```
SMTP_HOST = smtppro.zoho.in
SMTP_PORT = 587
SMTP_USER = hello@neuraforge.tech
SMTP_PASS = Uwbw2Ss66Jk2
EMAIL_FROM = hello@neuraforge.tech
EMAIL_TO = hello@neuraforge.tech
NODE_ENV = production
```

### Step 7: Deploy!
1. Click "Deploy" button
2. Wait for build to complete (2-3 minutes)
3. Get your live URL: `https://neuraforge-website.vercel.app`

### Step 8: Custom Domain (Optional)
If you have neuraforge.tech domain:
1. Go to Vercel project "Domains" tab
2. Add "neuraforge.tech"
3. Configure DNS records in your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🔧 Alternative: Direct Upload to Vercel

If you prefer not to use Git/GitHub:

1. **Create ZIP file** of your NeuraForge folder (exclude node_modules and .next)
2. Go to https://vercel.com
3. Drag & drop the ZIP file to Vercel
4. Configure as Next.js project
5. Add environment variables as above

## 📋 Pre-Deployment Checklist

✅ All files in NeuraForge folder
✅ Environment variables ready (.env.production.example)
✅ Production build tested (npm run build)
✅ Video file in public folder (bg-video.mp4)
✅ Contact form SMTP configured

## 🌐 Expected Results

After deployment, you'll have:
- **Live URL**: https://your-project.vercel.app
- **Contact Form**: Working email delivery
- **Video Background**: Playing on hero section
- **Portfolio**: All animations working
- **Mobile Responsive**: Perfect on all devices
- **SEO Optimized**: Sitemap and meta tags

## 🚨 Troubleshooting

**Build Errors**: Check Vercel build logs
**Email Issues**: Verify environment variables
**Video Not Playing**: Check file path and format
**Contact Form**: Test after deployment

## 📞 Support

Need help? 
- Vercel Docs: https://vercel.com/docs
- Contact: Check environment variables first
- Video: Ensure bg-video.mp4 is in public folder

---

**Your NeuraForge website is production-ready and will be live within minutes!** 🎉