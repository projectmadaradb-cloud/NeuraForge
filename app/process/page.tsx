import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your business goals, technical requirements, and success metrics. We map the user journey and identify key conversion points.',
    duration: '1-2 days',
    deliverables: ['Requirements document', 'Success metrics definition', 'Technical architecture plan']
  },
  {
    number: '02',
    title: 'Scope & Success Metrics',
    description: 'Define clear deliverables, timeline, and measurable outcomes. We create a detailed project roadmap with milestones and checkpoints.',
    duration: '1 day',
    deliverables: ['Project scope document', 'Timeline with milestones', 'Success criteria checklist']
  },
  {
    number: '03',
    title: 'Prototype',
    description: 'Build and validate core functionality with rapid prototyping. We test key assumptions and gather feedback before full development.',
    duration: '3-5 days',
    deliverables: ['Working prototype', 'User feedback report', 'Technical proof of concept']
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop production-ready solution with clean code, comprehensive testing, and proper documentation. Daily progress updates included.',
    duration: '1-3 weeks',
    deliverables: ['Production application', 'Test suite', 'Documentation', 'Deployment setup']
  },
  {
    number: '05',
    title: 'Launch & Measure',
    description: 'Deploy to production, monitor performance, and iterate based on real-world usage data. We track the success metrics defined in step 2.',
    duration: '1 week',
    deliverables: ['Live deployment', 'Monitoring setup', 'Performance report', 'Iteration plan']
  }
];

const engagementModels = [
  {
    type: 'Fixed-Fee Sprint',
    duration: '1-2 weeks',
    bestFor: 'Prototypes, small features, quick automations',
    payment: '50% upfront, 50% on delivery',
    includes: ['Clear scope', 'Fixed timeline', 'Defined deliverables']
  },
  {
    type: 'Milestone-Based',
    duration: '3-8 weeks',
    bestFor: 'Full applications, complex integrations',
    payment: '40% / 40% / 20% at milestones',
    includes: ['Iterative feedback', 'Scope adjustments', 'Weekly check-ins']
  },
  {
    type: 'Monthly Retainer',
    duration: 'Ongoing',
    bestFor: 'Continuous development, long-term partnership',
    payment: 'Monthly billing',
    includes: ['Dedicated capacity', 'Priority support', 'Strategic planning']
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen transform scale-[0.98] origin-top transition-transform duration-300 hover:scale-100">
      {/* Luxurious Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute top-1/5 left-1/5 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display leading-tight tracking-tight text-gray-900 dark:text-white mb-12">
              Our <span className="hero-title-gradient">Process</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/90 leading-[1.4] font-light tracking-wide mb-16 max-w-5xl mx-auto">
              A proven 5-step approach that ensures we deliver exactly what you need, 
              on time and on budget. <span className="nf-gradient-text font-semibold">No surprises, just results.</span>
            </p>
            
            <div className="inline-flex items-center gap-4 px-8 py-6 glass-nf rounded-full border border-purple-200/40 dark:border-purple-400/30 shadow-nf-glow">
              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg" />
              <span className="text-xl md:text-2xl text-gray-800 dark:text-white/90 font-bold tracking-wide">
                Average project: 2-4 weeks from start to launch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Process Steps */}
      <section className="py-32 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="space-y-20 lg:space-y-24">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Luxury Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-32 w-1 h-40 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-nf-glow" />
                )}
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Premium Step Number */}
                  <div className="lg:col-span-2 flex lg:block items-center gap-6">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center text-white font-black text-3xl lg:text-4xl shadow-nf-glow transform-gpu hover:scale-110 transition-transform duration-500">
                      {step.number}
                    </div>
                    <div className="lg:mt-6 text-center lg:text-left">
                      <div className="text-xl md:text-2xl nf-gradient-text font-bold tracking-wide">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Luxury Content */}
                  <div className="lg:col-span-10">
                    <div className="card-luxury p-12 lg:p-16 xl:p-20 group relative overflow-hidden">
                      {/* Premium glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      
                      <div className="relative z-10 space-y-8">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-gray-900 dark:text-white mb-8 leading-tight tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                          {step.title}
                        </h3>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white/90 leading-[1.5] font-light tracking-wide mb-12">
                          {step.description}
                        </p>
                        
                        {/* Luxury Deliverables */}
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold nf-gradient-text mb-8 uppercase tracking-wider">
                            Key Deliverables
                          </h4>
                          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center space-x-4 p-4 lg:p-6 glass-nf rounded-2xl border border-purple-200/40 dark:border-purple-400/30 hover:shadow-nf-glow transition-all duration-500 group/item">
                                <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex-shrink-0 shadow-lg group-hover/item:scale-125 transition-transform duration-500" />
                                <span className="text-lg md:text-xl text-gray-800 dark:text-white/95 font-semibold tracking-wide group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-purple-600 group-hover/item:to-blue-600 group-hover/item:bg-clip-text transition-all duration-500">
                                  {deliverable}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Strip */}
      <section className="section-padding bg-gradient-to-r from-nf-primary/10 via-nf-accent/10 to-nf-primary/10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Typical Timeline
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Most projects follow this timeline, but we adjust based on complexity and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { week: 'Week 1', phase: 'Discovery & Scope', color: 'bg-blue-500' },
              { week: 'Week 1-2', phase: 'Prototype & Validate', color: 'bg-green-500' },
              { week: 'Week 2-3', phase: 'Core Development', color: 'bg-yellow-500' },
              { week: 'Week 3-4', phase: 'Polish & Testing', color: 'bg-orange-500' },
              { week: 'Week 4', phase: 'Launch & Monitor', color: 'bg-purple-500' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-full h-2 ${item.color} rounded-full mb-4`} />
                <div className="text-white font-semibold mb-1">{item.week}</div>
                <div className="text-white/70 text-sm">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Engagement Models
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the model that best fits your project size, timeline, and working style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={model.type} className="p-8 hover:scale-105 transition-all group">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-nf-primary transition-colors">
                    {model.type}
                  </h3>
                  <div className="text-nf-accent font-medium">{model.duration}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-nf-accent mb-1 uppercase tracking-wider">
                      Best For
                    </div>
                    <div className="text-white/80">{model.bestFor}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-nf-accent mb-1 uppercase tracking-wider">
                      Payment
                    </div>
                    <div className="text-white/80">{model.payment}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-nf-accent mb-3 uppercase tracking-wider">
                    Includes
                  </div>
                  <div className="space-y-2">
                    {model.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-nf-primary rounded-full flex-shrink-0" />
                        <span className="text-white/90 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and choose the right engagement model. 
              Most discovery calls happen same week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-4">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  View Services
                </Button>
              </Link>
            </div>
            
            {/* Quick stats */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70">
                <div>
                  <div className="font-semibold text-white mb-1">Discovery Call</div>
                  <div>Usually same week</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Project Kickoff</div>
                  <div>Within 5 business days</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Typical Delivery</div>
                  <div>2-4 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}