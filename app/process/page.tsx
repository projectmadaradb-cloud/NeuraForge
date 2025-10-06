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
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-nf-bg to-nf-bg/80">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Our <span className="text-nf-primary">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              A proven 5-step approach that ensures we deliver exactly what you need, 
              on time and on budget. No surprises, just results.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 font-medium">
                Average project: 2-4 weeks from start to launch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-width">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-nf-primary to-nf-accent" />
                )}
                
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number */}
                  <div className="lg:col-span-2 flex lg:block items-center gap-4">
                    <div className="w-12 h-12 bg-nf-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="lg:mt-4 text-center lg:text-left">
                      <div className="text-sm text-nf-accent font-medium">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-10">
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold font-display text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed mb-6 text-lg">
                        {step.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold text-nf-accent mb-3 uppercase tracking-wider">
                          Key Deliverables
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-nf-primary rounded-full flex-shrink-0" />
                              <span className="text-white/90 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
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