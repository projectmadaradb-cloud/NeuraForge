"use client";
import SectionReveal from "./SectionReveal";
import ServiceIcon from "./ServiceIcon";

const services = [
  {
    title: "Web Apps",
    description: "Launch conversion-optimized web apps that turn visitors into revenue.",
    icon: "web-development"
  },
  {
    title: "Mobile Apps", 
    description: "Ship native-quality apps users engage with daily.",
    icon: "app-development"
  },
  {
    title: "AI Systems",
    description: "Deploy intelligent automation that scales your expertise.",
    icon: "ai-solutions"
  },
  {
    title: "Data Extraction",
    description: "Reliable pipelines delivering clean, structured data on schedule.",
    icon: "web-scraping"
  },
  {
    title: "Trading Systems",
    description: "Automated strategies with professional risk controls.",
    icon: "trading-bots"
  },
  {
    title: "Smart Agents",
    description: "AI agents that handle complex tasks like your best team members.",
    icon: "ai-agents"
  }
];

export default function Services() {
  return (
    <SectionReveal>
      <div id="services" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We Ship</h2>
            <p className="body-lg text-gray-400 max-w-2xl mx-auto">
              Revenue-focused software that drives real business outcomes. 
              No fluff, no over-engineering — just systems that work and scale.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className={`glass rounded-2xl p-6 hover:shadow-glow transition group card-hover service-card`} style={{animationDelay: `${index * 0.5}s`}}>
                <div className="mb-4 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <ServiceIcon serviceId={service.icon} className="w-12 h-12" />
                </div>
                <h3 className="heading-sm mb-3 group-hover:text-gradient transition">{service.title}</h3>
                <p className="body-base text-white/70 mb-4">
                  {service.description}
                </p>
                <ul className="caption text-white/60 space-y-1">
                  <li className="flex items-center gap-2 animate-breathing" style={{animationDelay: `${index * 0.3}s`}}>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    Fixed-fee delivery
                  </li>
                  <li className="flex items-center gap-2 animate-breathing" style={{animationDelay: `${index * 0.3 + 0.5}s`}}>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    Measurable outcomes
                  </li>
                  <li className="flex items-center gap-2 animate-breathing" style={{animationDelay: `${index * 0.3 + 1}s`}}>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    Ships in weeks
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}