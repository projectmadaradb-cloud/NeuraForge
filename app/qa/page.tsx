import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Quality Assurance Checklist - NeuraForge',
  description: 'Comprehensive QA checklist for website performance, accessibility, and SEO validation.',
  robots: 'noindex, nofollow'
}

interface ChecklistItem {
  category: string
  item: string
  status: 'pass' | 'warning' | 'fail'
  description: string
  link?: string
  recommendation?: string
}

export default function QAPage() {
  const checklistItems: ChecklistItem[] = [
    // SEO & Meta Tags
    {
      category: 'SEO & Meta Tags',
      item: 'Page titles present',
      status: 'pass',
      description: 'All pages have unique, descriptive titles under 60 characters',
      link: '/app/layout.tsx'
    },
    {
      category: 'SEO & Meta Tags',
      item: 'Meta descriptions present',
      status: 'pass',
      description: 'All pages have unique meta descriptions under 160 characters',
      link: '/app/layout.tsx'
    },
    {
      category: 'SEO & Meta Tags',
      item: 'Open Graph images configured',
      status: 'pass',
      description: 'OG images exist and properly configured (1200x630px)',
      link: '/public/og.png'
    },
    {
      category: 'SEO & Meta Tags',
      item: 'Structured data implemented',
      status: 'warning',
      description: 'Basic metadata present, consider adding JSON-LD for enhanced SEO',
      recommendation: 'Add organization and service schema markup'
    },

    // Performance & Core Web Vitals
    {
      category: 'Performance',
      item: 'LCP element identified',
      status: 'warning',
      description: 'Hero section is LCP element, needs optimization for <2.5s',
      link: '/components/Hero.tsx',
      recommendation: 'Add font preconnects and optimize hero image loading'
    },
    {
      category: 'Performance',
      item: 'No layout shift on hero',
      status: 'warning',
      description: 'TypewriterCode component may cause CLS during text animation',
      link: '/components/TypewriterCode.tsx',
      recommendation: 'Reserve space for animated text and use transform animations'
    },
    {
      category: 'Performance',
      item: 'Images optimized',
      status: 'pass',
      description: 'Using Next.js Image component with proper optimization',
      link: '/components/Portfolio.tsx'
    },
    {
      category: 'Performance',
      item: 'Font loading optimized',
      status: 'warning',
      description: 'Missing font preconnects for external fonts',
      recommendation: 'Add preconnect links for Google Fonts in layout.tsx'
    },

    // Accessibility
    {
      category: 'Accessibility',
      item: 'Interactive components keyboard accessible',
      status: 'pass',
      description: 'Navigation, buttons, and forms support keyboard interaction',
      link: '/components/Navbar.tsx'
    },
    {
      category: 'Accessibility',
      item: 'Focus indicators visible',
      status: 'pass',
      description: 'Focus states properly implemented with Tailwind CSS',
      link: '/app/globals.css'
    },
    {
      category: 'Accessibility',
      item: 'Alt text for images',
      status: 'pass',
      description: 'All images have descriptive alt text',
      link: '/components/Portfolio.tsx'
    },
    {
      category: 'Accessibility',
      item: 'Color contrast compliance',
      status: 'pass',
      description: 'Dark/light themes meet WCAG AA standards',
      link: '/providers/ThemeProvider.tsx'
    },

    // Forms & Validation
    {
      category: 'Forms',
      item: 'Client-side validation',
      status: 'pass',
      description: 'Contact form implements Zod validation with error messages',
      link: '/lib/validations/contact.ts'
    },
    {
      category: 'Forms',
      item: 'Server error handling',
      status: 'pass',
      description: 'API routes handle errors gracefully with proper status codes',
      link: '/app/api/contact/route.ts'
    },
    {
      category: 'Forms',
      item: 'Form accessibility',
      status: 'pass',
      description: 'Labels, ARIA attributes, and error announcements implemented',
      link: '/components/Contact.tsx'
    },

    // Technical Infrastructure
    {
      category: 'Technical',
      item: 'Sitemap accessible',
      status: 'pass',
      description: 'Dynamic sitemap generated and accessible at /sitemap.xml',
      link: '/app/sitemap.ts'
    },
    {
      category: 'Technical',
      item: 'Robots.txt accessible',
      status: 'pass',
      description: 'Robots.txt properly configured and accessible',
      link: '/app/robots.txt'
    },
    {
      category: 'Technical',
      item: 'Error pages implemented',
      status: 'pass',
      description: 'Custom 404 and error pages provide good user experience',
      link: '/app/not-found.tsx'
    },
    {
      category: 'Technical',
      item: 'Security headers configured',
      status: 'warning',
      description: 'Basic security in place, missing comprehensive CSP headers',
      link: '/vercel.json',
      recommendation: 'Add Content Security Policy and additional security headers'
    }
  ]

  const performanceRecommendations = [
    {
      title: 'Critical CSS Optimization',
      description: 'Inline critical CSS for above-the-fold content',
      impact: '+5-8 points',
      implementation: 'Extract hero and navigation CSS to inline styles'
    },
    {
      title: 'Font Loading Strategy',
      description: 'Add preconnect links and font-display: swap',
      impact: '+3-5 points',
      implementation: 'Update layout.tsx with resource hints'
    },
    {
      title: 'Image Optimization',
      description: 'Implement AVIF/WebP formats with proper sizing',
      impact: '+5-10 points',
      implementation: 'Configure next/image with modern formats'
    },
    {
      title: 'Code Splitting',
      description: 'Lazy load non-critical components',
      impact: '+3-7 points',
      implementation: 'Dynamic imports for portfolio and testimonials'
    },
    {
      title: 'Cumulative Layout Shift',
      description: 'Reserve space for dynamic content',
      impact: '+5-12 points',
      implementation: 'Fix TypewriterCode and Hero dimensions'
    },
    {
      title: 'Caching Headers',
      description: 'Optimize cache policies for static assets',
      impact: '+2-4 points',
      implementation: 'Update vercel.json with cache headers'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <span className="text-green-500">✓</span>
      case 'warning':
        return <span className="text-yellow-500">⚠</span>
      case 'fail':
        return <span className="text-red-500">✗</span>
      default:
        return <span className="text-gray-500">-</span>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
      case 'warning':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950'
      case 'fail':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950'
      default:
        return 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950'
    }
  }

  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, ChecklistItem[]>)

  const totalItems = checklistItems.length
  const passedItems = checklistItems.filter(item => item.status === 'pass').length
  const warningItems = checklistItems.filter(item => item.status === 'warning').length
  const failedItems = checklistItems.filter(item => item.status === 'fail').length

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Quality Assurance Checklist</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive validation for performance, accessibility, and SEO
          </p>
          
          {/* Overall Status */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="text-2xl font-bold">{totalItems}</div>
              <div className="text-sm text-muted-foreground">Total Checks</div>
            </Card>
            <Card className="p-4 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <div className="text-2xl font-bold text-green-600">{passedItems}</div>
              <div className="text-sm text-green-600">Passing</div>
            </Card>
            <Card className="p-4 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <div className="text-2xl font-bold text-yellow-600">{warningItems}</div>
              <div className="text-sm text-yellow-600">Warnings</div>
            </Card>
            <Card className="p-4 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <div className="text-2xl font-bold text-red-600">{failedItems}</div>
              <div className="text-sm text-red-600">Failed</div>
            </Card>
          </div>
        </div>

        {/* Checklist by Category */}
        <div className="space-y-8 mb-12">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <Card key={index} className={`p-4 ${getStatusColor(item.status)}`}>
                    <div className="flex items-start gap-3">
                      <div className="text-xl">{getStatusIcon(item.status)}</div>
                      <div className="flex-1">
                        <div className="font-medium">{item.item}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {item.description}
                        </div>
                        {item.link && (
                          <div className="text-xs">
                            <span className="text-muted-foreground">File: </span>
                            <code className="bg-muted px-1 py-0.5 rounded text-xs">
                              {item.link}
                            </code>
                          </div>
                        )}
                        {item.recommendation && (
                          <div className="mt-2 p-2 bg-muted rounded text-sm">
                            <span className="font-medium">Recommendation: </span>
                            {item.recommendation}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Optimization Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Performance Optimizations for Lighthouse ≥95
          </h2>
          <div className="grid gap-4">
            {performanceRecommendations.map((rec, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{rec.title}</h3>
                  <span className="text-sm text-green-600 font-medium">
                    {rec.impact}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {rec.description}
                </p>
                <div className="text-xs bg-muted p-2 rounded">
                  <span className="font-medium">Implementation: </span>
                  {rec.implementation}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/sitemap.xml" 
              target="_blank"
              className="p-3 border rounded-lg hover:bg-muted transition-colors text-center"
            >
              <div className="font-medium">Sitemap</div>
              <div className="text-xs text-muted-foreground">/sitemap.xml</div>
            </Link>
            <Link 
              href="/robots.txt" 
              target="_blank"
              className="p-3 border rounded-lg hover:bg-muted transition-colors text-center"
            >
              <div className="font-medium">Robots</div>
              <div className="text-xs text-muted-foreground">/robots.txt</div>
            </Link>
            <Link 
              href="https://pagespeed.web.dev/" 
              target="_blank"
              className="p-3 border rounded-lg hover:bg-muted transition-colors text-center"
            >
              <div className="font-medium">PageSpeed</div>
              <div className="text-xs text-muted-foreground">Test Performance</div>
            </Link>
            <Link 
              href="https://validator.w3.org/" 
              target="_blank"
              className="p-3 border rounded-lg hover:bg-muted transition-colors text-center"
            >
              <div className="font-medium">HTML Validator</div>
              <div className="text-xs text-muted-foreground">Validate Markup</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}