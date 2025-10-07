'use client';

import Link from 'next/link';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';

// Premium Icon Components
const PremiumIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative w-16 h-16 mx-auto mb-6 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-nf-primary/20 to-nf-accent/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg" />
    <div className="absolute inset-[2px] bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
    <div className="relative flex items-center justify-center w-full h-full">
      {children}
    </div>
  </div>
);

const WebAppIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="3" y="4" width="18" height="14" rx="3" stroke="url(#webGradient)" strokeWidth="2" fill="none"/>
      <path d="M3 8h18" stroke="url(#webGradient)" strokeWidth="2"/>
      <circle cx="6.5" cy="6" r="0.5" fill="url(#webGradient)"/>
      <circle cx="8.5" cy="6" r="0.5" fill="url(#webGradient)"/>
      <circle cx="10.5" cy="6" r="0.5" fill="url(#webGradient)"/>
      <path d="M8 12l3 3 5-5" stroke="url(#webGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </PremiumIcon>
);

const MobileAppIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="url(#mobileGradient)" strokeWidth="2" fill="none"/>
      <path d="M6 6h12" stroke="url(#mobileGradient)" strokeWidth="2"/>
      <path d="M6 18h12" stroke="url(#mobileGradient)" strokeWidth="2"/>
      <circle cx="12" cy="20" r="1" fill="url(#mobileGradient)"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill="url(#mobileGradient)" opacity="0.6"/>
    </svg>
  </PremiumIcon>
);

const AISystemIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" stroke="url(#aiGradient)" strokeWidth="2" fill="none"/>
      <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" stroke="url(#aiGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" stroke="url(#aiGradient)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1" fill="url(#aiGradient)"/>
    </svg>
  </PremiumIcon>
);

const DataExtractionIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#dataGradient)" strokeWidth="2" fill="none"/>
      <path d="M3 9h18M9 3v18" stroke="url(#dataGradient)" strokeWidth="2"/>
      <circle cx="6" cy="6" r="1" fill="url(#dataGradient)"/>
      <rect x="12" y="12" width="6" height="2" rx="1" fill="url(#dataGradient)" opacity="0.6"/>
      <rect x="12" y="16" width="4" height="2" rx="1" fill="url(#dataGradient)" opacity="0.4"/>
      <path d="M15 6l3 3-3 3" stroke="url(#dataGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </PremiumIcon>
);

const TradingSystemIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="tradingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M3 17l6-6 4 4 8-8" stroke="url(#tradingGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 7h4v4" stroke="url(#tradingGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="19" width="20" height="2" rx="1" fill="url(#tradingGradient)" opacity="0.3"/>
      <circle cx="9" cy="11" r="1.5" fill="url(#tradingGradient)"/>
      <circle cx="13" cy="15" r="1.5" fill="url(#tradingGradient)"/>
      <circle cx="21" cy="3" r="1.5" fill="url(#tradingGradient)"/>
    </svg>
  </PremiumIcon>
);

const SmartAgentIcon = () => (
  <PremiumIcon>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-nf-primary">
      <defs>
        <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M12 2C8 2 6 6 6 9v3c0 2 1 3 2 3h8c1 0 2-1 2-3V9c0-3-2-7-6-7Z" stroke="url(#agentGradient)" strokeWidth="2" fill="none"/>
      <circle cx="9" cy="9" r="1" fill="url(#agentGradient)"/>
      <circle cx="15" cy="9" r="1" fill="url(#agentGradient)"/>
      <path d="M9 13s1.5 2 3 2 3-2 3-2" stroke="url(#agentGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 15c0 4 2 7 6 7s6-3 6-7" stroke="url(#agentGradient)" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="17" width="4" height="3" rx="1" fill="url(#agentGradient)" opacity="0.6"/>
    </svg>
  </PremiumIcon>
);

const services = [
  {
    title: 'Web Apps',
    outcome: 'Launch conversion-optimized web apps that turn visitors into revenue.',
    stack: 'Next.js • TypeScript • Tailwind',
    icon: 'web-development',
    href: '/services/web-development'
  },
  {
    title: 'Mobile Apps', 
    outcome: 'Ship native-quality apps users engage with daily.',
    stack: 'React Native • Expo • Firebase',
    icon: 'app-development',
    href: '/services/app-development'
  },
  {
    title: 'AI Systems',
    outcome: 'Deploy intelligent automation that scales your expertise.',
    stack: 'OpenAI • LangChain • Python',
    icon: 'ai-solutions',
    href: '/services/ai-solutions'
  },
  {
    title: 'Data Extraction',
    outcome: 'Reliable pipelines delivering clean, structured data on schedule.',
    stack: 'Python • Playwright • Docker',
    icon: 'web-scraping',
    href: '/services/web-scraping'
  },
  {
    title: 'Trading Systems',
    outcome: 'Automated strategies with professional risk controls.',
    stack: 'Python • FastAPI • WebSockets',
    icon: 'trading-bots',
    href: '/services/trading-bots'
  },
  {
    title: 'Smart Agents',
    outcome: 'AI agents that handle complex tasks like your best team members.',
    stack: 'LangChain • OpenAI • PostgreSQL',
    icon: 'ai-agents',
    href: '/services/ai-agents'
  }
];

export default function ServicesPreview() {
  return (
    <section className="section-padding relative overflow-hidden mobile-safe">
      {/* Luxury Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-1/6 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-mobile max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-title-gradient">Premium Solutions</span>
            <br />
            <span className="text-gray-900 dark:text-white">That Drive Results</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Revenue-focused software that drives real business outcomes. 
            <span className="nf-gradient-text font-medium mx-1 sm:mx-2">No fluff, no over-engineering</span> — 
            just premium systems that work and scale.
          </motion.p>
        </div>

        {/* Enhanced Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Link href={service.href}>
                <Card 
                  className="card-luxury h-full cursor-pointer service-card group relative overflow-hidden border-0 touch-target"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Luxury Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-center relative z-10 p-4 sm:p-6 lg:p-8">
                    {/* Enhanced Premium Icon - Mobile Optimized */}
                    <div className="relative mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
                      <div className="relative z-10">
                        <ServiceIcon serviceId={service.icon} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-150" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Enhanced Title - Mobile Optimized */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Enhanced Outcome - Mobile Optimized */}
                    <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg font-medium">
                      {service.outcome}
                    </p>
                  
                    {/* Enhanced Tech Stack - Mobile Optimized */}
                    <div className="pt-4 sm:pt-6 border-t border-gray-200/30 dark:border-white/10">
                      <p className="text-xs sm:text-sm nf-gradient-text font-semibold tracking-wide uppercase">
                        {service.stack}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA - Mobile Optimized */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 glass-nf rounded-xl hover:shadow-nf-glow transition-all duration-300 group border border-purple-200/30 dark:border-purple-400/20 touch-target"
          >
            <span className="nf-gradient-text">View All Services</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}