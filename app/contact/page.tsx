import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Start Your AI Project | NeuraForge',
  description: 'Ready to transform your business? Contact NeuraForge for AI solutions, web development, automation, and custom software. Get a free consultation today.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Start Your AI Project | NeuraForge',
    description: 'Ready to transform your business? Contact NeuraForge for AI solutions, web development, automation, and custom software. Get a free consultation today.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <Contact />;
}
