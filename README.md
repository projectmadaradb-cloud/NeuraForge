# NeuraForge — Next.js 14 + Tailwind + Framer Motion + AI Research Assistant

A modern AI development agency website with an integrated Autonomous Research Assistant (ARA) that generates comprehensive research reports with citations.

## Features

- 🎨 **Modern Design**: Next.js 14 with Tailwind CSS and Framer Motion animations
- 🤖 **AI Research Assistant**: Autonomous research pipeline with source finding, content extraction, and report generation
- � **Premium Email Notifications**: Luxury email templates with research completion notifications
- �📊 **Real-time Progress**: Live job status tracking with progress indicators
- 📄 **PDF Export**: Automated PDF generation and download
- 🔗 **Source Citations**: Inline citations with numbered references
- 🌙 **Dark/Light Mode**: Theme switching with system preference support
- 📱 **Mobile Responsive**: Optimized for all device sizes

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

### Required for Research Assistant

```env
# Database (Required for ARA)
DATABASE_URL="postgresql://username:password@localhost:5432/neuraforge"

# OpenAI (Required for ARA)
OPENAI_API_KEY="sk-..."

# App Security
NEXTAUTH_SECRET="your-long-random-secret-here"
```

### Optional Services

```env
# Search API (optional - fallback search if not provided)
SEARCH_API_KEY="your-serpapi-key"

# Redis Queue (optional - simple queue fallback)
UPSTASH_REDIS_REST_URL="https://..."
UPSTASH_REDIS_REST_TOKEN="..."

# PDF Storage (optional - streams inline if not provided)
BLOB_READ_WRITE_TOKEN="vercel-blob-token"

# Email (optional - contact form logs to console without)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Research Assistant

The Autonomous Research Assistant (ARA) is accessible at `/research` and provides:

### Pipeline Overview
1. **Search**: Finds relevant sources using AI-generated queries
2. **Extract**: Retrieves and cleans content from web sources
3. **Chunk & Embed**: Processes content into vector embeddings
4. **Analyze**: Ranks and selects most relevant information
5. **Generate**: Creates comprehensive reports with citations
6. **Export**: Renders to PDF and provides download

### API Endpoints

- `POST /api/jobs` - Create new research job
- `GET /api/jobs/[id]` - Get job status and progress
- `GET /api/jobs/[id]/report` - Retrieve completed report

### Database Schema

The system uses PostgreSQL with Prisma ORM:

- **Jobs**: Research job metadata and status
- **Sources**: Web sources found and extracted
- **Chunks**: Text chunks with vector embeddings
- **Reports**: Final generated reports with MDX and PDF

## Database Setup

```bash
# Initialize database
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# View database (optional)
npx prisma studio
```

## Build & Deploy

```bash
npm run build
```

### Production Checklist

- [ ] Set all required environment variables
- [ ] Run database migrations
- [ ] Configure PostgreSQL with pgvector extension
- [ ] Set up Redis for job queue (optional)
- [ ] Configure blob storage for PDF hosting (optional)

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL with pgvector
- **AI/ML**: OpenAI embeddings + GPT-4o-mini
- **Search**: SerpAPI (optional) with fallback
- **PDF**: Playwright for server-side PDF generation
- **Storage**: Vercel Blob (optional)
- **Queue**: Upstash Redis (optional)

## Development

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build
```