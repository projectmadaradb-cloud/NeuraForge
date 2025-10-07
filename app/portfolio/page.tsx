import { Metadata } from 'next';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { portfolioItems } from '@/components/portfolio/portfolioItems';

export const metadata: Metadata = {
  title: 'NeuraForge — Portfolio | AI-Native Development Projects',
  description: 'Explore our portfolio of AI-powered web applications, trading bots, automation systems, and custom software solutions. Revenue-driving projects for modern businesses.',
  keywords: ['portfolio', 'AI development', 'web applications', 'trading bots', 'automation', 'custom software', 'React', 'Next.js', 'machine learning'],
  openGraph: {
    title: 'NeuraForge — Portfolio | AI-Native Development Projects',
    description: 'Explore our portfolio of AI-powered web applications, trading bots, automation systems, and custom software solutions.',
    url: '/portfolio',
    type: 'website',
    images: [
      {
        url: 'https://neuraforge.tech/og.png',
        width: 1200,
        height: 630,
        alt: 'NeuraForge Portfolio - AI-Native Development Projects'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraForge — Portfolio | AI-Native Development Projects',
    description: 'Explore our portfolio of AI-powered web applications, trading bots, automation systems, and custom software solutions.',
    images: ['https://neuraforge.tech/og.png']
  }
};

export const dynamic = 'force-dynamic';

export default function PortfolioPage() {
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "NeuraForge Portfolio - AI-Native Development Projects",
    "description": "Portfolio showcasing AI-powered web applications, trading bots, automation systems, and custom software solutions",
    "url": "https://neuraforge.tech/portfolio",
    "creator": {
      "@type": "Organization",
      "name": "NeuraForge",
      "url": "https://neuraforge.tech",
      "description": "AI-native boutique development studio"
    },
    "workExample": portfolioItems.map(item => ({
      "@type": "CreativeWork",
      "name": item.title,
      "description": item.tagline,
      "url": `https://neuraforge.tech/portfolio/${item.slug}`,
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "tags",
        "value": item.tags.join(', ')
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData)
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="py-20">
          {/* Header */}
          <div className="max-w-6xl mx-auto px-4 text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Selected demos that show how we build revenue-driving systems for modern businesses.
            </p>
          </div>

          {/* Portfolio Grid */}
          <PortfolioGrid items={portfolioItems} />
        </div>
      </main>
    </>
  );
}