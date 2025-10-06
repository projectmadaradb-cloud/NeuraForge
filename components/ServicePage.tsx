'use client';

import { services } from '@/lib/services';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {service.hero?.headline || service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {service.hero?.subheadline || service.description}
            </p>
            
            {/* Outcomes Grid */}
            {service.hero?.outcomes && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                {service.hero.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{outcome}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      {service.outcomes && (
        <section className="py-16 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.outcomes.map((outcome, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{outcome.metric}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{outcome.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow pt-2">
                      <p className="text-lg text-gray-700 dark:text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      {service.deliverables && (
        <section className="py-16 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.stack.map((tech, index) => (
                <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <span className="font-medium text-gray-900 dark:text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {service.cases && (
        <section className="py-16 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.cases.map((caseStudy, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {caseStudy.metrics}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FAQAccordion serviceFAQs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Pricing & CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {service.outcome}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white font-medium">Timeline: {service.pricing.timeline}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white font-medium">Investment: {service.pricing.range}</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
