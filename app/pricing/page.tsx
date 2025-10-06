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
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-nf-bg to-nf-bg/80">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Simple <span className="text-nf-primary">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Fixed-fee packages with clear deliverables. No hourly billing, 
              no scope creep, no surprises.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 font-medium">
                All packages include source code, documentation, and handover
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => {
              const isPopular = tier.name === 'Growth';
              return (
                <div key={tier.name} className="relative">
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-nf-primary px-4 py-1 rounded-full text-white text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Card className={`p-8 h-full ${isPopular ? 'ring-2 ring-nf-primary shadow-glow' : ''}`}>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold font-display text-white mb-2">
                        {tier.name}
                      </h3>
                      <div className="text-nf-accent font-medium mb-4">
                        {tier.timeline}
                      </div>
                      <div className="text-white/80 text-sm leading-relaxed">
                        {tier.for}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8 pb-8 border-b border-white/10">
                      <div className="text-white text-lg">
                        {tier.range}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-nf-accent mb-4 uppercase tracking-wider">
                        What's Included
                      </h4>
                      <div className="space-y-3">
                        {tier.includes.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/90 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Not Included */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-nf-accent mb-4 uppercase tracking-wider">
                        Not Included
                      </h4>
                      <div className="space-y-3">
                        {tier.excludes.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Terms */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-nf-accent mb-2 uppercase tracking-wider">
                        Payment Terms
                      </h4>
                      <div className="text-white/80 text-sm">
                        {tier.payment}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="text-white/60 text-sm mb-4">
                        <strong>Payment:</strong> {tier.payment}
                      </div>
                      <Link href="/contact">
                        <Button 
                          variant={isPopular ? "primary" : "outline"}
                          fullWidth
                          className="text-lg py-3"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {pricingTiers.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Pricing Details Coming Soon
              </h3>
              <p className="text-white/60">
                Contact us for custom pricing on your project.
              </p>
              <Link href="/contact" className="mt-4 inline-block">
                <Button size="lg">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding bg-gradient-to-r from-nf-primary/10 via-nf-accent/10 to-nf-primary/10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Add-On Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Enhance any package with these additional features based on your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-nf-accent rounded-full flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Pricing FAQ
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do you determine the final price?",
                answer: "After our discovery call, we'll provide a fixed quote based on your specific requirements. The packages give you a general range, but we customize based on complexity."
              },
              {
                question: "What if my project doesn't fit these packages?",
                answer: "We can create a custom proposal for larger or more complex projects. We also offer monthly retainers for ongoing development needs."
              },
              {
                question: "Do you offer refunds if I'm not satisfied?",
                answer: "We guarantee the delivered solution matches the agreed scope. If there are issues, we'll fix them at no charge. We haven't had a refund request yet."
              },
              {
                question: "Can I upgrade my package during development?",
                answer: "Yes, we can add features or upgrade your package. Any changes are documented and priced transparently before implementation."
              },
              {
                question: "What ongoing support do you provide?",
                answer: "All packages include a bug-fix window. For ongoing features and support, we offer monthly retainer packages starting at $4000/month."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Not Sure Which Package?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and recommend the best approach. 
              Most discovery calls happen within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-4">
                  Schedule Discovery Call
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}