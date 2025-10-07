const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your business goals, technical requirements, and success metrics.'
  },
  {
    number: '02', 
    title: 'Scope & Success Metrics',
    description: 'Define clear deliverables, timeline, and measurable outcomes for the project.'
  },
  {
    number: '03',
    title: 'Prototype',
    description: 'Build and validate core functionality with rapid prototyping and user feedback.'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop production-ready solution with clean code, testing, and documentation.'
  },
  {
    number: '05',
    title: 'Launch & Measure',
    description: 'Deploy, monitor performance, and iterate based on real-world usage data.'
  }
];

export default function ProcessStrip() {
  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
            Our proven 5-step process ensures we deliver exactly what you need, 
            on time and on budget. No surprises, just results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {/* Desktop Timeline - positioned to connect the numbered circles */}
            <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-nf-primary via-nf-accent to-nf-primary z-0" 
                 style={{ top: '30px' }} />
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Mobile Timeline */}
                <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-nf-primary to-nf-accent" />
                
                {/* Step Card */}
                <div className="glass rounded-2xl p-6 relative z-10 hover:shadow-glow-soft transition-all duration-300">
                  {/* Number - positioned to align with timeline on desktop */}
                  <div className="w-12 h-12 bg-nf-primary rounded-full flex items-center justify-center text-white font-bold font-display mb-4 mx-auto lg:mx-0 relative z-20">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-semibold font-display text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-700 dark:text-white/80 font-medium">
              Average project: 2-4 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}