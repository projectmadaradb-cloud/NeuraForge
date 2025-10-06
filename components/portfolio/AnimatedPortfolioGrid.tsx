"use client";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import TradingPulse from "./visuals/TradingPulse";
import ScraperShield from "./visuals/ScraperShield";
import ResumeBuilder from "./visuals/ResumeBuilder";
import LeadHunter from "./visuals/LeadHunter";
import OpsCopilot from "./visuals/OpsCopilot";
import VectorSearch from "./visuals/VectorSearch";

interface WorkProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumb?: string;
  description?: string;
  outcomes?: string[];
}

interface AnimatedPortfolioGridProps {
  projects: WorkProject[];
}

const visualComponents = {
  "ai-trading-bot-dashboard": <TradingPulse />,
  "ecommerce-scraper-api": <ScraperShield />,
  "ai-resume-generator": <ResumeBuilder />,
  "lead-finder-agent": <LeadHunter />,
  "ops-copilot": <OpsCopilot />,
  "vector-search-docs": <VectorSearch />,
};

const categoryMap = {
  "ai-trading-bot-dashboard": "Trading Bot",
  "ecommerce-scraper-api": "Web Scraping",
  "ai-resume-generator": "Document AI",
  "lead-finder-agent": "Sales Agent",
  "ops-copilot": "AI Training",
  "vector-search-docs": "Search Engine",
};

export default function AnimatedPortfolioGrid({ projects }: AnimatedPortfolioGridProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real client projects with measurable outcomes and technical innovation
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.slug}
              index={index}
              title={project.title}
              summary={project.summary}
              outcomes={project.outcomes || []}
              tags={project.tags}
              Visual={visualComponents[project.slug as keyof typeof visualComponents]}
              href={`/work/${project.slug}`}
              category={categoryMap[project.slug as keyof typeof categoryMap]}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl p-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Have a similar challenge?
              </h3>
              <p className="text-gray-400">
                Let's discuss how we can build a custom solution for you
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 whitespace-nowrap"
            >
              Start Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}