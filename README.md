# NeuraForge — Next.js 14 + Tailwind + Framer Motion

## Setup
```bash
pnpm i
pnpm dev
```

## Environment Variables (Optional)

The contact form will work without SMTP configuration (submissions will be logged to console). To enable email sending, add these to your `.env.local`:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Build
```bash
pnpm build
```