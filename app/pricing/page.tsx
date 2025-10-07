import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { loadPricingTiers } from '@/lib/data-loaders';

export const dynamic = 'force-dynamic';

const additionalFeatures = [
  {
    category: 'AI & Automation',
    features: ['Custom AI model training', 'Workflow automation', 'Data processing pipelines', 'Smart notifications']
  },
  {
    category: 'Integration & APIs',
    features: ['Third-party integrations', 'Custom API development', 'Webhook systems', 'Real-time sync']
  },
  {
    category: 'Analytics & Monitoring',
    features: ['Performance dashboards', 'User behavior tracking', 'System monitoring', 'Custom reports']
  }
];

export async function generateMetadata() {
  return {
    title: 'Pricing | Simple, Transparent Packages',
    description: 'Fixed-fee packages with clear deliverables. Sprint, Growth, and Dedicated options for every project size. No hourly billing, no surprises.',
    openGraph: {
      title: 'Pricing | Simple, Transparent Packages | NeuraForge',
      description: 'Fixed-fee packages with clear deliverables. Sprint, Growth, and Dedicated options for every project size. No hourly billing, no surprises.',
      images: [
        {
          url: 'https://neuraforge.tech/og.png',
          width: 1200,
          height: 630,
          alt: 'NeuraForge Pricing'
        }
      ]
    }
  };
}

export default function PricingPage() {
  const pricingTiers = loadPricingTiers();

  return (
    <main className="min-h-screen transform scale-[0.98] origin-top transition-transform duration-300 hover:scale-100 mobile-safe">
      {/* Luxurious Hero Section - Mobile Optimized */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        {/* Premium Background Elements - Mobile Optimized */}
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute top-1/5 left-1/5 w-48 sm:w-80 lg:w-[32rem] h-48 sm:h-80 lg:h-[32rem] bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-40 sm:w-64 lg:w-[28rem] h-40 sm:h-64 lg:h-[28rem] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-black font-display text-gray-900 dark:text-white leading-[0.9] tracking-tight px-4">
              Simple, <span className="hero-title-gradient">Transparent</span> Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 dark:text-white/90 max-w-5xl mx-auto font-light leading-[1.3] tracking-wide px-4">
              Fixed packages, clear deliverables. No hourly billing surprises.
            </p>
            
            {/* Premium Status Badge - Mobile Optimized */}
            <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 glass-nf rounded-full border border-purple-200/40 dark:border-purple-400/30 shadow-nf-glow mx-4">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">Available for new projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Pricing Tiers - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => {
              const isPopular = tier.name === 'Growth';
              return (
                <div key={tier.name} className="relative group">
                  {isPopular && (
                    <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-white text-sm sm:text-base lg:text-lg font-bold shadow-nf-glow">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`card-luxury p-6 sm:p-8 lg:p-12 xl:p-16 h-full relative overflow-hidden transform-gpu transition-all duration-500 touch-target ${
                    isPopular 
                      ? 'ring-2 sm:ring-4 ring-purple-500/30 shadow-nf-glow scale-[1.02] sm:scale-105' 
                      : 'hover:scale-[1.02] sm:hover:scale-105'
                  }`}>
                    {/* Premium glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    <div className="relative z-10 space-y-6 sm:space-y-8">
                      {/* Luxury Header - Mobile Optimized */}
                      <div className="text-center space-y-4 sm:space-y-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-wide">
                          {tier.name}
                        </h3>
                        <div className="text-xl md:text-2xl nf-gradient-text font-bold tracking-wide">
                          {tier.for}
                        </div>
                        <div className="text-lg md:text-xl text-gray-700 dark:text-white/85 leading-relaxed font-medium">
                          {tier.timeline}
                        </div>
                      </div>

                      {/* Luxury Pricing */}
                      <div className="text-center py-8 border-y border-purple-200/50 dark:border-purple-400/30">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                          {tier.range}
                        </div>
                        <div className="text-lg md:text-xl text-gray-600 dark:text-white/70 mt-3 font-medium">{tier.payment}</div>
                      </div>

                      {/* Premium Features */}
                      <div className="space-y-6">
                        <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-wide">What's Included</h4>
                        <div className="space-y-4">
                          {tier.includes.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start space-x-4">
                              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex-shrink-0 mt-3 shadow-lg" />
                              <span className="text-lg md:text-xl text-gray-800 dark:text-white/90 leading-relaxed font-medium tracking-wide">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Luxury CTA */}
                      <div className="pt-8">
                        <Link href="/contact" className="block">
                          <Button
                            size="xl"
                            className={`w-full px-12 py-8 text-2xl font-bold shadow-2xl transform-gpu hover:scale-105 transition-all duration-500 ${
                              isPopular
                                ? 'btn-premium shadow-nf-glow'
                                : 'glass-nf border border-purple-200/50 dark:border-purple-400/30 hover:shadow-nf-glow'
                            }`}
                          >
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {pricingTiers.length === 0 && (
            <div className="text-center py-32">
              <div className="text-8xl md:text-9xl mb-12">📋</div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
                Pricing Details <span className="hero-title-gradient">Coming Soon</span>
              </h3>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Contact us for custom pricing on your project.
              </p>
              <Link href="/contact">
                <Button size="xl" className="btn-premium px-16 py-8 text-2xl shadow-nf-glow transform-gpu hover:scale-105 transition-all duration-500">
                  <span className="flex items-center gap-4">
                    Get Custom Quote
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Luxury Additional Features */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/25 dark:to-indigo-950/30">
        {/* Premium background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-gray-900 dark:text-white mb-12 leading-tight tracking-tight">
              Add-On <span className="hero-title-gradient">Capabilities</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-800 dark:text-white/90 max-w-5xl mx-auto font-light leading-[1.4] tracking-wide">
              Enhance any package with these additional features based on your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
            {additionalFeatures.map((category) => (
              <div key={category.category} className="card-luxury p-12 lg:p-16 group relative overflow-hidden transform-gpu hover:scale-105 transition-all duration-500">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex-shrink-0 shadow-lg" />
                        <span className="text-lg md:text-xl text-gray-800 dark:text-white/90 font-medium tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="glass-nf rounded-4xl p-16 lg:p-20 xl:p-24 text-center border border-white/20 max-w-6xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-white mb-12 leading-tight tracking-tight">
              Not Sure Which <span className="text-yellow-300">Package</span>?
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-blue-100 mb-16 max-w-5xl mx-auto leading-[1.4] font-light tracking-wide">
              Let's discuss your project requirements and recommend the best approach. 
              <span className="text-yellow-300 font-semibold">Most discovery calls happen within 24 hours.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 justify-center">
              <Link href="/contact">
                <Button size="xl" className="bg-white text-purple-600 hover:bg-gray-100 px-16 py-8 text-2xl font-bold shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
                  <span className="flex items-center gap-4">
                    Schedule Discovery Call
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="secondary" size="xl" className="glass-nf px-16 py-8 text-2xl border border-white/30 hover:bg-white/10 text-white transform-gpu hover:scale-105 transition-all duration-500">
                  <span className="flex items-center gap-4">
                    See Examples
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
    </main>
  );
}