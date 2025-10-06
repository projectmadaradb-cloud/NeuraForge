import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';

interface PageProps {
  params: {
    slug: string;
  };
}

// Define valid service slugs
const validSlugs = [
  'web-development',
  'app-development', 
  'ai-solutions',
  'web-scraping',
  'trading-bots',
  'business-automation',
  'ai-agents'
];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;
  
  // Check if slug is valid
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <ServicePage slug={slug} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  
  if (!validSlugs.includes(slug)) {
    return {
      title: 'Service Not Found',
    };
  }

  // Convert slug to title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} - NeuraForge`,
    description: `Professional ${title.toLowerCase()} services by NeuraForge. Custom solutions that drive real business outcomes.`,
  };
}