import { Metadata } from 'next';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { portfolioItems } from '@/components/portfolio/portfolioItems';

export const metadata: Metadata = {
  title: 'NeuraForge — Portfolio',
  description: 'Selected demos that show how we build revenue-driving systems.',
  openGraph: {
    title: 'NeuraForge — Portfolio',
    description: 'Selected demos that show how we build revenue-driving systems.',
    url: '/portfolio',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="py-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Selected demos that show how we build revenue-driving systems.
          </p>
        </div>

        {/* Portfolio Grid */}
        <PortfolioGrid items={portfolioItems} />
      </div>
    </main>
  );
}