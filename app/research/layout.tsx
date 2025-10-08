import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Research Assistant | NeuraForge',
  description: 'AI-powered research assistant that finds sources, analyzes content, and generates comprehensive reports with citations in minutes.',
  keywords: 'AI research, autonomous research, report generation, content analysis, research assistant',
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}