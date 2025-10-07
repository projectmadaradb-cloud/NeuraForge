import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

const techStack = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL',
  'OpenAI', 'LangChain', 'Playwright', 'Docker', 'Vercel', 'Supabase'
];

const clientNotices = [
  {
    title: 'Speed',
    description: 'We ship working prototypes in days, not weeks. Production-ready in 2-4 weeks typical.'
  },
  {
    title: 'Outcomes',
    description: 'Every feature maps to a business metric. We think in revenue, efficiency, and user satisfaction.'
  },
  {
    title: 'Quality',
    description: 'Clean code, proper testing, and documentation. Built to scale with your business.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen transform scale-[0.98] origin-top transition-transform duration-300 hover:scale-100">
      {/* Luxurious Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute top-1/5 left-1/5 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black font-display text-gray-900 dark:text-white mb-12 leading-[0.85] tracking-tight">
              About <span className="hero-title-gradient block md:inline">NeuraForge</span>
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white/95 leading-[1.3] font-light max-w-5xl mx-auto tracking-wide mb-8">
              We forge <span className="nf-gradient-text font-semibold">AI-native software</span> that drives 
              <span className="block md:inline mt-2 md:mt-0">measurable revenue growth</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/85 leading-relaxed font-medium max-w-4xl mx-auto tracking-wide">
              Transforming business outcomes through intelligent automation and competitive advantage
            </p>
          </div>
        </div>
      </section>

      {/* Sophisticated POV Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-8xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display mb-8 leading-tight tracking-tight">
                <span className="text-gray-900 dark:text-white">Our</span>
                <span className="hero-title-gradient"> Philosophy</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-white/90 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                <span className="nf-gradient-text font-semibold">Strategic thinking</span> meets technical excellence
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-12">
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl text-gray-800 dark:text-white/95 leading-[1.4] font-medium tracking-wide">
                    Most software projects fail because they focus on 
                    <span className="italic font-light">features</span> instead of 
                    <span className="nf-gradient-text font-bold mx-2">outcomes</span>. 
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 leading-relaxed font-normal tracking-wide">
                    We start with the business goal and architect backwards to the optimal technical solution.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl text-gray-800 dark:text-white/95 leading-[1.4] font-medium tracking-wide">
                    In the AI era, competitive advantage comes from 
                    <span className="nf-gradient-text font-bold mx-2">automation and intelligence</span> 
                    woven into every workflow.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 leading-relaxed font-normal tracking-wide">
                    We build systems that learn, adapt, and compound your capabilities over time.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl text-gray-800 dark:text-white/95 leading-[1.4] font-medium tracking-wide">
                    <span className="nf-gradient-text font-bold">Velocity matters</span>. 
                    While others spend months planning, we ship working solutions in weeks.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 leading-relaxed font-normal tracking-wide">
                    Real usage data trumps theoretical requirements every time.
                  </p>
                </div>
              </div>
              
              <div className="lg:sticky lg:top-8">
                <div className="card-luxury p-12 relative overflow-hidden">
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/12 via-blue-500/8 to-purple-500/12 opacity-60"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center tracking-tight">
                      Our <span className="nf-gradient-text">Core Values</span>
                    </h3>
                    <ul className="space-y-8">
                      <li className="flex items-start group">
                        <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-6 mt-2 shadow-nf-glow group-hover:scale-110 transition-transform duration-400">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/95 leading-[1.3] tracking-wide">
                          Revenue-first thinking in every technical decision
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-6 mt-2 shadow-nf-glow group-hover:scale-110 transition-transform duration-400">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/95 leading-[1.3] tracking-wide">
                          AI-native solutions that amplify human capabilities
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-6 mt-2 shadow-nf-glow group-hover:scale-110 transition-transform duration-400">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/95 leading-[1.3] tracking-wide">
                          Ship fast, measure everything, iterate relentlessly
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-6 mt-2 shadow-nf-glow group-hover:scale-110 transition-transform duration-400">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/95 leading-[1.3] tracking-wide">
                          Enterprise-grade architecture from day one
                        </span>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-6 mt-2 shadow-nf-glow group-hover:scale-110 transition-transform duration-400">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/95 leading-[1.3] tracking-wide">
                          Transparent communication, realistic timelines
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestigious Tech Stack */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/25 dark:to-indigo-950/30">
        {/* Premium background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-gray-900 dark:text-white mb-12 leading-tight tracking-tight">
              Our <span className="hero-title-gradient">Tech Stack</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-800 dark:text-white/90 max-w-5xl mx-auto font-light leading-[1.4] tracking-wide mb-8">
              <span className="nf-gradient-text font-semibold">Battle-tested tools and frameworks</span> 
            </p>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/85 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
              Carefully chosen for velocity, reliability, and enterprise-grade maintainability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {techStack.map((tech, index) => (
              <div 
                key={tech}
                className="glass-nf px-8 py-6 rounded-3xl text-center font-bold text-lg md:text-xl text-gray-800 dark:text-white/95 hover:shadow-nf-glow transition-all duration-500 hover:scale-105 transform-gpu border border-purple-200/40 dark:border-purple-400/30 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 tracking-wide">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Founder Note */}
      <section className="py-32 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <div className="card-luxury p-16 lg:p-20 xl:p-24 relative overflow-hidden">
              {/* Luxury background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/8 to-purple-500/10 opacity-80 rounded-3xl"></div>
              <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                {/* Founder Photo */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-12 relative">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                    <img 
                      src="/founder-photo.jpg" 
                      alt="NeuraForge Founder" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Elegant glow effect around photo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-600/20 blur-lg scale-110 -z-10"></div>
                </div>
                
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-gray-900 dark:text-white mb-16 leading-tight tracking-tight">
                  A Note from the <span className="hero-title-gradient">Founder</span>
                </h3>
                
                <div className="space-y-12">
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/95 leading-[1.5] font-light tracking-wide">
                    "I started NeuraForge after seeing too many projects fail because teams built 
                    <span className="nf-gradient-text font-semibold mx-2">the wrong thing beautifully</span>. 
                    We focus on building the right thing quickly."
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/95 leading-[1.5] font-light tracking-wide">
                    "Every client engagement starts with understanding the 
                    <span className="nf-gradient-text font-semibold mx-2">business problem</span>, 
                    not the technical requirements. That's how we consistently deliver software 
                    that actually moves the needle."
                  </p>
                </div>
                
                <div className="mt-16">
                  <div className="text-xl md:text-2xl nf-gradient-text font-bold tracking-wider">
                    — NeuraForge Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Client Experience Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/25 dark:to-indigo-950/30">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-center mb-20 leading-tight tracking-tight">
            <span className="text-gray-900 dark:text-white">What Clients</span>
            <span className="hero-title-gradient"> Notice</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
            {clientNotices.map((notice, index) => (
              <div key={notice.title} className="card-luxury text-center p-12 lg:p-16 group relative overflow-hidden transform-gpu hover:scale-105 transition-all duration-500">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 space-y-8">
                  {/* Premium number badge */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-nf-glow group-hover:scale-110 transition-transform duration-500 mb-8">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                    {notice.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/90 leading-[1.6] font-medium tracking-wide">
                    {notice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="card-luxury p-16 lg:p-20 xl:p-24 text-center relative overflow-hidden max-w-6xl mx-auto">
            {/* Premium background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/12 via-blue-500/8 to-purple-500/12 opacity-80 rounded-3xl"></div>
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-gray-900 dark:text-white mb-12 leading-tight tracking-tight">
                Ready to <span className="hero-title-gradient">Work Together</span>?
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/90 mb-16 max-w-5xl mx-auto leading-[1.5] font-light tracking-wide">
                Let's discuss your project and see how we can help you achieve your 
                <span className="nf-gradient-text font-semibold mx-2">business goals</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 justify-center pt-8">
                <Link href="/contact">
                  <Button size="xl" className="btn-premium px-16 py-8 text-2xl shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                    <span className="flex items-center gap-4">
                      Start a Conversation
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="secondary" size="xl" className="glass-nf px-16 py-8 text-2xl border border-purple-200/50 dark:border-purple-400/30 hover:shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                    <span className="flex items-center gap-4">
                      See Our Work
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
        </div>
      </section>
    </main>
  );
}