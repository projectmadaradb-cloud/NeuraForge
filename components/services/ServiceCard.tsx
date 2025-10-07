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
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      <Link
        href={href}
        className="block relative card-luxury p-10 h-full transition-all duration-700 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none hover:shadow-nf-glow transform-gpu"
        aria-label={ariaLabel}
        role="link"
      >
        {/* Luxury Index Badge */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2,
            delay: index * 0.1 + 0.4,
            ease: [0.165, 0.84, 0.44, 1],
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            transition: { duration: 0.4 }
          }}
          className="absolute top-8 right-8 z-20 w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 backdrop-blur-sm rounded-2xl flex items-center justify-center text-base font-black text-white shadow-nf-glow border border-purple-300/30"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Premium Visual Container */}
        <motion.div 
          className="relative h-56 rounded-3xl mb-10 overflow-hidden ring-2 ring-purple-200/40 dark:ring-purple-400/30 bg-gradient-to-br from-purple-50/80 to-blue-50/60 dark:from-purple-900/30 dark:to-blue-900/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-blue-500/8"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
          <div className="relative z-10 h-full">
            {Visual}
          </div>
          
          {/* Luxury shine effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{ translateX: ["100%", "100%"] }}
            transition={{ 
              duration: 2,
              delay: index * 0.3 + 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced Content with Perfect Typography */}
        <div className="space-y-8">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-white/85 leading-relaxed font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
          >
            {summary}
          </motion.p>

          {/* Premium Bullets */}
          <motion.ul 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
          >
            {bullets.map((bullet, bulletIndex) => (
              <motion.li
                key={bulletIndex}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + bulletIndex * 0.1 + 0.9,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start text-base md:text-lg text-gray-800 dark:text-white/90 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500 leading-relaxed"
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mr-4 mt-1 shadow-lg ring-2 ring-purple-200/50 dark:ring-purple-400/30"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <span className="tracking-wide">{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Luxury Tags */}
          <motion.div 
            className="flex flex-wrap gap-3 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 1.2 }}
          >
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-5 py-3 text-sm md:text-base font-bold glass-nf rounded-2xl text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-400/40 hover:shadow-nf-soft transition-all duration-400 tracking-wide"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1 + tagIndex * 0.1 + 1.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-purple-500/15" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-400/80 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-400/80 to-transparent" />
          
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-transparent rounded-br-full" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-tr-full" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400/30 to-transparent rounded-tl-full" />
        </div>
      </Link>
    </motion.div>
  );
}
