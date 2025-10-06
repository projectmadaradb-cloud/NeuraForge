import Link from 'next/link';
import { Card } from './ui/Card';

const services = [
  {
    title: 'Web Apps',
    outcome: 'Launch conversion-optimized web apps that turn visitors into revenue.',
    stack: 'Next.js • TypeScript • Tailwind',
    icon: '🌐',
    href: '/services/web-development'
  },
  {
    title: 'Mobile Apps', 
    outcome: 'Ship native-quality apps users engage with daily.',
    stack: 'React Native • Expo • Firebase',
    icon: '📱',
    href: '/services/app-development'
  },
  {
    title: 'AI Systems',
    outcome: 'Deploy intelligent automation that scales your expertise.',
    stack: 'OpenAI • LangChain • Python',
    icon: '🤖',
    href: '/services/ai-solutions'
  },
  {
    title: 'Data Extraction',
    outcome: 'Reliable pipelines delivering clean, structured data on schedule.',
    stack: 'Python • Playwright • Docker',
    icon: '🕷️',
    href: '/services/web-scraping'
  },
  {
    title: 'Trading Systems',
    outcome: 'Automated strategies with professional risk controls.',
    stack: 'Python • FastAPI • WebSockets',
    icon: '📈',
    href: '/services/trading-bots'
  },
  {
    title: 'Smart Agents',
    outcome: 'AI agents that handle complex tasks like your best team members.',
    stack: 'LangChain • OpenAI • PostgreSQL',
    icon: '🕴️',
    href: '/services/ai-agents'
  }
];

export default function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            What We Ship
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Revenue-focused software that drives real business outcomes. 
            No fluff, no over-engineering — just systems that work and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href}>
              <Card 
                className="h-full hover:scale-105 transition-all duration-300 cursor-pointer service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold font-display text-white mb-3 group-hover:text-nf-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Outcome */}
                  <p className="text-white/70 leading-relaxed mb-4">
                    {service.outcome}
                  </p>
                  
                  {/* Stack */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-nf-accent font-medium">
                      {service.stack}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-nf-accent hover:text-nf-accent/80 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg rounded-lg px-3 py-2"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}