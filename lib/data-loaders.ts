import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Type definitions
export interface WorkProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumb?: string;
  description?: string;
  outcomes?: string[];
}

export interface TestimonialData {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  range: string;
  timeline: string;
  for: string;
  includes: string[];
  excludes: string[];
  payment: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  industry?: string;
  timeline?: string;
  stack?: string;
  role?: string;
  problem: string;
  approach: string;
  results: string[];
  screens?: string[];
  summary?: string;
}

// Content directory paths
const CONTENT_DIR = path.join(process.cwd(), 'content');
const CASE_STUDIES_DIR = path.join(CONTENT_DIR, 'case-studies');

// JSON Data Loaders
export function loadWorkProjects(): WorkProject[] {
  try {
    const filePath = path.join(CONTENT_DIR, 'work.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as WorkProject[];
  } catch (error) {
    console.warn('Failed to load work projects:', error);
    return [];
  }
}

export function loadTestimonials(): TestimonialData[] {
  try {
    const filePath = path.join(CONTENT_DIR, 'testimonials.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as TestimonialData[];
  } catch (error) {
    console.warn('Failed to load testimonials:', error);
    return [];
  }
}

export function loadPricingTiers(): PricingTier[] {
  try {
    const filePath = path.join(CONTENT_DIR, 'pricing.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as PricingTier[];
  } catch (error) {
    console.warn('Failed to load pricing tiers:', error);
    return [];
  }
}

export function loadFAQs(): FAQ[] {
  try {
    const filePath = path.join(CONTENT_DIR, 'faqs.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as FAQ[];
  } catch (error) {
    console.warn('Failed to load FAQs:', error);
    return [];
  }
}

// Markdown Case Study Loader
export function loadCaseStudy(slug: string): CaseStudyData | null {
  try {
    const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      // Generate placeholder content for demo
      const project = loadWorkProjects().find(p => p.slug === slug);
      if (!project) return null;
      
      return {
        slug,
        title: project.title,
        industry: 'Technology',
        timeline: '2-4 weeks',
        stack: 'Next.js, TypeScript, AI',
        role: 'Full-stack Development + AI Integration',
        problem: `Client needed a modern solution to ${project.summary.toLowerCase()}. The existing system was inefficient and couldn't scale with business growth.`,
        approach: 'Built a custom system with AI integration, focusing on user experience and measurable outcomes. Implemented modern architecture patterns and comprehensive testing.',
        results: [
          '40%+ efficiency improvement',
          '90%+ user satisfaction',
          '2-week delivery timeline'
        ],
        screens: [
          'Dashboard overview with key metrics',
          'User interface for primary workflow',
          'Admin panel with analytics',
          'Mobile-responsive design',
          'Integration with existing tools'
        ],
        summary: project.summary
      };
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Parse content sections
    const sections = content.split('\n## ');
    const snapshot = sections.find(s => s.toLowerCase().includes('snapshot'))?.split('\n').filter(line => line.trim()) || [];
    const problem = sections.find(s => s.toLowerCase().includes('problem'))?.replace('Problem', '').trim() || data.problem || '';
    const approach = sections.find(s => s.toLowerCase().includes('approach'))?.replace('Approach', '').trim() || data.approach || '';
    const result = sections.find(s => s.toLowerCase().includes('result'))?.replace('Result', '').trim() || '';
    const screensSection = sections.find(s => s.toLowerCase().includes('screens'));
    
    // Extract results metrics
    const results = result.split('\n').filter(line => line.trim().startsWith('-')).map(line => line.replace('-', '').trim());
    
    // Extract screens captions
    const screens = screensSection?.split('\n').filter(line => line.match(/^\d+\./)).map(line => line.replace(/^\d+\./, '').trim()) || [];
    
    // Extract snapshot data
    const industry = snapshot.find(line => line.includes('Industry:'))?.split(':')[1]?.trim();
    const timeline = snapshot.find(line => line.includes('Timeline:'))?.split(':')[1]?.trim();
    const stack = snapshot.find(line => line.includes('Stack:'))?.split(':')[1]?.trim();
    const role = snapshot.find(line => line.includes('Role:'))?.split(':')[1]?.trim();
    
    return {
      slug,
      title: data.title || loadWorkProjects().find(p => p.slug === slug)?.title || slug,
      industry: data.industry || industry || 'Technology',
      timeline: data.timeline || timeline || '2-4 weeks',
      stack: data.stack || stack || 'Next.js, TypeScript',
      role: data.role || role || 'Full-stack Development',
      problem: data.problem || problem,
      approach: data.approach || approach,
      results: data.results || results,
      screens: data.screens || screens,
      summary: data.summary || loadWorkProjects().find(p => p.slug === slug)?.summary
    };
  } catch (error) {
    console.warn(`Failed to load case study ${slug}:`, error);
    return null;
  }
}

// Utility functions
export function getCaseStudySlugs(): string[] {
  return loadWorkProjects().map(project => project.slug);
}

export function getWorkProjectBySlug(slug: string): WorkProject | null {
  return loadWorkProjects().find(project => project.slug === slug) || null;
}

// Cache for performance (optional)
let workProjectsCache: WorkProject[] | null = null;
let testimonialsCache: TestimonialData[] | null = null;
let pricingCache: PricingTier[] | null = null;
let faqsCache: FAQ[] | null = null;

export function getWorkProjectsCached(): WorkProject[] {
  if (!workProjectsCache) {
    workProjectsCache = loadWorkProjects();
  }
  return workProjectsCache;
}

export function getTestimonialsCached(): TestimonialData[] {
  if (!testimonialsCache) {
    testimonialsCache = loadTestimonials();
  }
  return testimonialsCache;
}

export function getPricingTiersCached(): PricingTier[] {
  if (!pricingCache) {
    pricingCache = loadPricingTiers();
  }
  return pricingCache;
}

export function getFAQsCached(): FAQ[] {
  if (!faqsCache) {
    faqsCache = loadFAQs();
  }
  return faqsCache;
}