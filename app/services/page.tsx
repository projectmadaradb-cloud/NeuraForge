import ServiceCard from "@/components/services/ServiceCard";
import TradingPulse from "@/components/services/visuals/TradingPulse";
import AgentOrbits from "@/components/services/visuals/AgentOrbits";
import ScraperShield from "@/components/services/visuals/ScraperShield";
import AppLayers from "@/components/services/visuals/AppLayers";
import ModelTrainingWave from "@/components/services/visuals/ModelTrainingWave";
import WebGridShine from "@/components/services/visuals/WebGridShine";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    title: 'Services | Revenue-Focused Development',
    description: 'Web apps, AI systems, automation, and mobile solutions that drive measurable business outcomes. Fixed-fee delivery in 2-6 weeks.',
    openGraph: {
      title: 'Services | Revenue-Focused Development | NeuraForge',
      description: 'Web apps, AI systems, automation, and mobile solutions that drive measurable business outcomes. Fixed-fee delivery in 2-6 weeks.',
      images: [
        {
          url: 'https://neuraforge.tech/og.png',
          width: 1200,
          height: 630,
          alt: 'NeuraForge Services'
        }
      ]
    }
  };
}

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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Our <span className="hero-title-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Six specialized services to accelerate your business. From AI-powered automation 
            to premium app development—we build software that drives real results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                summary={service.summary}
                bullets={service.bullets}
                tags={service.tags}
                Visual={service.Visual}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 mb-6 text-lg">
              Let's discuss your project and create a custom solution that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gradient px-8 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform"
              >
                Start Your Project
              </a>
              <a
                href="/work"
                className="px-8 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors ring-1 ring-white/20"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}