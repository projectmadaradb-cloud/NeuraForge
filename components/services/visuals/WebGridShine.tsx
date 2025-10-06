"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WebGridShine() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const cards = [
    { title: "Hero", width: "60%", height: "40%" },
    { title: "Features", width: "35%", height: "25%" },
    { title: "CTA", width: "45%", height: "20%" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/40 to-blue-900/20 p-4"
      whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* UI Cards */}
      <div className="relative h-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-lg ring-1 ring-white/20 backdrop-blur-sm"
            style={{
              width: card.width,
              height: card.height,
              top: `${10 + i * 25}%`,
              left: `${5 + (i % 2) * 30}%`
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.2,
              type: "spring",
              bounce: 0.2
            }}
          >
            {/* Card shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"
              animate={!prefersReducedMotion ? {
                x: ["-100%", "100%"]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 + 1,
                ease: "easeInOut"
              }}
            />
            
            {/* Card title */}
            <motion.div
              className="absolute top-2 left-2 text-[10px] text-white/60 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: i * 0.2 + 0.5 }}
            >
              {card.title}
            </motion.div>
            
            {/* Mock content lines */}
            <div className="absolute inset-2 top-6 space-y-1">
              {Array.from({ length: 2 }).map((_, lineI) => (
                <motion.div
                  key={lineI}
                  className="h-1 bg-white/20 rounded-full"
                  style={{ width: `${70 - lineI * 20}%` }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.3, scaleX: 1 }}
                  transition={{ 
                    delay: i * 0.2 + 0.7 + lineI * 0.1,
                    duration: 0.4
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Diagonal shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none opacity-0"
        whileHover={{ opacity: 1 }}
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          animation: "shine 1.5s ease-out"
        }}
      />
      
      {/* Core Web Vitals badge */}
      <motion.div
        className="absolute bottom-2 left-2 px-2 py-1 bg-green-500/20 text-green-300 text-[10px] rounded ring-1 ring-green-400/30 font-medium"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 1.5,
          type: "spring",
          bounce: 0.4
        }}
      >
        Core Web Vitals ✓
      </motion.div>
      
      {/* Performance metrics */}
      <motion.div
        className="absolute bottom-2 right-2 text-[9px] text-blue-300 font-mono opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      >
        LCP: 1.2s • CLS: 0.05
      </motion.div>
    </motion.div>
  );
}