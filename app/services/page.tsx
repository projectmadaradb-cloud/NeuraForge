"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/services/ServiceCard";
import TradingPulse from "@/components/services/visuals/TradingPulse";
import AgentOrbits from "@/components/services/visuals/AgentOrbits";
import ScraperShield from "@/components/services/visuals/ScraperShield";
import AppLayers from "@/components/services/visuals/AppLayers";
import ModelTrainingWave from "@/components/services/visuals/ModelTrainingWave";
import WebGridShine from "@/components/services/visuals/WebGridShine";

const services = [
  {
    title: "AI Trading Bot & Financial Dashboards",
    summary: "Real-time PnL, risk guardrails, sub-second dashboards.",
    bullets: ["45% fewer manual errors", "<250ms latency", "99.9% stream uptime"],
    tags: ["Realtime", "Risk", "WebSockets"],
    Visual: <TradingPulse />,
    href: "/services/trading-bots"
  },
  {
    title: "Autonomous AI Agents",
    summary: "Agents that research, decide, and act across tools & APIs.",
    bullets: ["Hours→minutes task cycles", "Traceable actions", "API-native"],
    tags: ["Agents", "Automation", "Ops"],
    Visual: <AgentOrbits />,
    href: "/services/ai-agents"
  },
  {
    title: "Smart Web Scraper+",
    summary: "Enterprise scraping with proxies, CAPTCHA bypass, dedup.",
    bullets: ["94%+ success rates", "Resilient failover", "Clean JSON exports"],
    tags: ["Scraping", "Proxies", "Pipelines"],
    Visual: <ScraperShield />,
    href: "/services/web-scraping"
  },
  {
    title: "App Development (Web & Mobile)",
    summary: "From MVPs to platforms with premium UI and scalable backends.",
    bullets: ["Design→Build→Ship", "Auth + APIs + DB", "App Store ready"],
    tags: ["Next.js", "React Native", "API"],
    Visual: <AppLayers />,
    href: "/services/app-development"
  },
  {
    title: "AI Services & Model Training",
    summary: "Fine-tune, evaluate, and deploy models for real outcomes.",
    bullets: ["Custom LLM/RAG", "Eval dashboards", "Efficient inference"],
    tags: ["LLM", "RAG", "Eval"],
    Visual: <ModelTrainingWave />,
    href: "/services/ai-solutions"
  },
  {
    title: "Web Development & Digital Experiences",
    summary: "Elegant, fast, SEO-strong sites that convert.",
    bullets: ["CLS/LCP optimized", "CMS/MDX ready", "A/B test friendly"],
    tags: ["SEO", "Design", "Perf"],
    Visual: <WebGridShine />,
    href: "/services/web-development"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:from-purple-950/20 dark:via-gray-900 dark:to-blue-950/20"></div>
      <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-15"></div>
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
      
      {/* Luxury Hero Section with Premium Typography */}
      <section className="pt-36 pb-28 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-12 font-display leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
          >
            Our <span className="hero-title-gradient">Premium</span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            >
              Services
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/95 max-w-5xl mx-auto leading-[1.4] font-light tracking-wide mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <span className="nf-gradient-text font-semibold">Six specialized services</span> engineered to accelerate your business growth. 
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          >
            From AI-powered automation to premium app development—we build software that drives 
            <span className="nf-gradient-text font-bold mx-2">measurable results</span>.
          </motion.p>
        </div>
      </section>

      {/* Spectacular Services Grid with Luxury Animations */}
      <section className="pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.8,
                  rotateX: 45,
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6 + (index * 0.2), 
                  ease: [0.165, 0.84, 0.44, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  transition: { 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="h-full perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <ServiceCard
                  index={index}
                  title={service.title}
                  summary={service.summary}
                  bullets={service.bullets}
                  tags={service.tags}
                  Visual={service.Visual}
                  href={service.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="card-luxury p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/5 to-purple-500/8 opacity-60"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to <span className="hero-title-gradient">Get Started</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-white/90 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                Let's discuss your project and create a 
                <span className="nf-gradient-text font-semibold mx-2">custom solution</span> 
                that fits your needs perfectly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="btn-premium px-10 py-5 rounded-xl text-white font-semibold text-lg shadow-nf-glow hover:shadow-nf-glow transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="/work"
                  className="glass-nf px-10 py-5 rounded-xl text-gray-900 dark:text-white font-semibold text-lg transition-all duration-300 border border-purple-200/50 dark:border-purple-400/30 hover:shadow-nf-glow group"
                >
                  <span className="flex items-center gap-3">
                    View Our Work
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}