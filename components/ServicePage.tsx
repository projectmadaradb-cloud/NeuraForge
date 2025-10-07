'use client';

import { services } from '@/lib/services';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceIcon from '@/components/ServiceIcon';
import Link from 'next/link';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">Service not found</h1>
          <Link href="/services">
            <Button className="btn-premium px-12 py-6 text-xl">View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen transform scale-[0.98] origin-top transition-transform duration-300 hover:scale-100">
      {/* Luxurious Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute top-1/5 left-1/5 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            {/* Service Icon */}
            <div className="mb-8 filter drop-shadow-2xl">
              <ServiceIcon serviceId={service.icon} className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto" />
            </div>
            
            {/* Massive Hero Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display leading-tight tracking-tight text-gray-900 dark:text-white mb-12">
              <span className="hero-title-gradient">
                {service.hero?.headline || service.title}
              </span>
            </h1>
            
            {/* Premium Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/90 max-w-6xl mx-auto leading-[1.4] font-light tracking-wide mb-16">
              {service.hero?.subheadline || service.description}
            </p>
            
            {/* Luxury Outcomes Grid */}
            {service.hero?.outcomes && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
                {service.hero.outcomes.map((outcome, index) => (
                  <div key={index} className="glass-nf p-6 lg:p-8 rounded-3xl border border-purple-200/40 dark:border-purple-400/30 group hover:shadow-nf-glow transition-all duration-500 transform-gpu hover:scale-105">
                    <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 tracking-wide">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 justify-center pt-8">
              <Link href="/contact">
                <Button size="xl" className="btn-premium px-16 py-8 text-2xl shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                  <span className="flex items-center gap-4">
                    Get Started
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="secondary" size="xl" className="glass-nf px-16 py-8 text-2xl border border-purple-200/50 dark:border-purple-400/30 hover:shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                  <span className="flex items-center gap-4">
                    View Our Work
                    <svg className="w-8 h-8 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Key Outcomes */}
      {service.outcomes && (
        <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/25 dark:to-indigo-950/30">
          {/* Premium background elements */}
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
          
          <div className="max-w-8xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight text-gray-900 dark:text-white">
              What You <span className="hero-title-gradient">Get</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
              {service.outcomes.map((outcome, index) => (
                <div key={index} className="card-luxury p-12 lg:p-16 text-center group relative overflow-hidden transform-gpu hover:scale-105 transition-all duration-500">
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10 space-y-8">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-6 leading-tight tracking-wide">
                      {outcome.metric}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/90 leading-[1.6] font-medium tracking-wide">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Luxury Process Section */}
      {service.process && (
        <section className="py-32 px-6">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight text-gray-900 dark:text-white">
              Our <span className="hero-title-gradient">Process</span>
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="space-y-12 lg:space-y-16">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-8 lg:gap-12 group">
                    {/* Premium step number */}
                    <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl lg:text-3xl shadow-nf-glow group-hover:scale-110 transition-transform duration-500 transform-gpu">
                      {index + 1}
                    </div>
                    
                    {/* Luxury content */}
                    <div className="flex-grow pt-4 space-y-4">
                      <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/95 leading-[1.5] font-light tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Luxury Deliverables */}
      {service.deliverables && (
        <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50/80 via-slate-50/60 to-gray-100/80 dark:from-gray-950/80 dark:via-slate-950/60 dark:to-gray-900/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.06),transparent_50%)]"></div>
          
          <div className="max-w-8xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight text-gray-900 dark:text-white">
              What's <span className="hero-title-gradient">Included</span>
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-6 p-8 lg:p-10 glass-nf rounded-3xl border border-purple-200/40 dark:border-purple-400/30 group hover:shadow-nf-glow transition-all duration-500">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/95 tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Luxury Tech Stack */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/25 dark:to-indigo-950/30">
        {/* Premium background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight text-gray-900 dark:text-white">
            Technology <span className="hero-title-gradient">Stack</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {service.stack.map((tech, index) => (
                <div key={index} className="glass-nf px-8 py-6 rounded-3xl text-center font-bold text-lg md:text-xl text-gray-800 dark:text-white/95 hover:shadow-nf-glow transition-all duration-500 hover:scale-105 transform-gpu border border-purple-200/40 dark:border-purple-400/30 group relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 tracking-wide">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Case Studies */}
      {service.cases && (
        <section className="py-32 px-6">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight text-gray-900 dark:text-white">
              Success <span className="hero-title-gradient">Stories</span>
            </h2>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {service.cases.map((caseStudy, index) => (
                  <div key={index} className="card-luxury p-12 lg:p-16 group relative overflow-hidden transform-gpu hover:scale-105 transition-all duration-500">
                    {/* Premium glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-wide">
                        {caseStudy.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-700 dark:text-white/90 leading-[1.6] font-medium tracking-wide mb-8">
                        {caseStudy.description}
                      </p>
                      <div className="text-xl md:text-2xl font-bold nf-gradient-text">
                        {caseStudy.metrics}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Luxury FAQs */}
      {service.faqs && (
        <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50/80 via-slate-50/60 to-gray-100/80 dark:from-gray-950/80 dark:via-slate-950/60 dark:to-gray-900/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.06),transparent_50%)]"></div>
          
          <div className="max-w-8xl mx-auto relative z-10">
            <div className="max-w-5xl mx-auto">
              <FAQAccordion serviceFAQs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Luxury Pricing & CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-white mb-12 leading-tight tracking-tight">
            Ready to Get <span className="text-yellow-300">Started</span>?
          </h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-blue-100 mb-16 max-w-5xl mx-auto leading-[1.4] font-light tracking-wide">
            {service.outcome}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 justify-center mb-16">
            <div className="glass-nf p-8 lg:p-10 rounded-3xl border border-white/20">
              <p className="text-xl md:text-2xl text-white font-bold tracking-wide">Timeline: {service.pricing.timeline}</p>
            </div>
            <div className="glass-nf p-8 lg:p-10 rounded-3xl border border-white/20">
              <p className="text-xl md:text-2xl text-white font-bold tracking-wide">Investment: {service.pricing.range}</p>
            </div>
          </div>
          
          <Link href="/contact">
            <Button size="xl" className="bg-white text-purple-600 hover:bg-gray-100 px-16 py-8 text-2xl font-bold shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
              <span className="flex items-center gap-4">
                Start Your Project
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
          </Link>
        </div>
      </section>
        </main>
  );
}
