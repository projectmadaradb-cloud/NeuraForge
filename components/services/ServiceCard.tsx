"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ServiceCardProps {
  index: number;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  Visual: ReactNode;
  href: string;
}

export default function ServiceCard({
  index,
  title,
  summary,
  bullets,
  tags,
  Visual,
  href,
}: ServiceCardProps) {
  const ariaLabel = `${title} - Learn more`;

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
        {/* Index Badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0.4 }}
          whileInView={{ scale: [0.7, 1.08, 1], opacity: [0.4, 1, 1] }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1 + 0.3,
            times: [0, 0.6, 1]
          }}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-purple-300 ring-1 ring-purple-400/30"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Visual Area */}
        <div className="relative h-44 rounded-xl mb-6 overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          {Visual}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {summary}
          </p>

          {/* Key Results */}
          <ul className="space-y-2">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-md ring-1 ring-purple-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
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