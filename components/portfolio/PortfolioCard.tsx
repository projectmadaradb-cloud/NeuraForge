"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface PortfolioCardProps {
  index: number;
  title: string;
  summary: string;
  outcomes: string[];
  tags: string[];
  Visual: ReactNode;
  href: string;
  category: string;
}

export default function PortfolioCard({
  index,
  title,
  summary,
  outcomes,
  tags,
  Visual,
  href,
  category,
}: PortfolioCardProps) {
  const ariaLabel = `${title} - View case study`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="group relative"
    >
      <Link
        href={href}
        className="block relative glass rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
        aria-label={ariaLabel}
        role="link"
      >
        {/* Category Badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0.4 }}
          whileInView={{ scale: [0.7, 1.08, 1], opacity: [0.4, 1, 1] }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1 + 0.3,
            times: [0, 0.6, 1]
          }}
          className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs font-bold text-blue-300 ring-1 ring-blue-400/30"
        >
          {category}
        </motion.div>

        {/* Visual Area */}
        <div className="relative h-48 rounded-xl mb-6 overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          {Visual}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {summary}
          </p>

          {/* Key Outcomes */}
          {outcomes && outcomes.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Key Results
              </h4>
              <ul className="space-y-1">
                {outcomes.slice(0, 3).map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-md ring-1 ring-blue-400/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Case Study CTA */}
          <motion.div
            className="pt-4 mt-4 border-t border-white/10"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center text-blue-300 text-sm font-medium">
              <span>View Case Study</span>
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
            style={{ animation: "shine 2s ease-out" }}
          />
        </div>
      </Link>
    </motion.div>
  );
}