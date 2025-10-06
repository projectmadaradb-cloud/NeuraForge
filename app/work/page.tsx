import { Metadata } from 'next';
import { loadWorkProjects } from '@/lib/data-loaders';
import AnimatedPortfolioGrid from '@/components/portfolio/AnimatedPortfolioGrid';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Our Work - Real Results & Case Studies | NeuraForge',
  description: 'See real results from our AI projects, web development, and automation solutions. Case studies showing measurable business impact and technical excellence.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work - Real Results & Case Studies | NeuraForge',
    description: 'See real results from our AI projects, web development, and automation solutions. Case studies showing measurable business impact and technical excellence.',
    url: '/work',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

export default function WorkPage() {
  const workProjects = loadWorkProjects();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Real client projects with measurable outcomes. From AI trading systems to document automation—see how we solve complex problems with elegant technical solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <AnimatedPortfolioGrid projects={workProjects} />

        {/* CTA Section */}
        <div className="mt-32">
          <CtaBand />
        </div>
      </div>
    </main>
  );
}
