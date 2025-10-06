"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScraperShield() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/40 to-emerald-900/20">
      {/* Scanning bar */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-lg"
        animate={!prefersReducedMotion ? { y: [0, 176, 0] } : { y: 88 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" 
        }}
      />
      
      {/* Data grid */}
      <div className="absolute inset-4 grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-white/5 rounded-sm ring-1 ring-white/10"
            initial={{ opacity: 0.3 }}
            animate={!prefersReducedMotion ? { 
              opacity: [0.3, 0.8, 0.3],
              backgroundColor: ["rgba(255,255,255,0.05)", "rgba(52,211,153,0.2)", "rgba(255,255,255,0.05)"]
            } : {}}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      {/* Rotating shield */}
      <div className="absolute bottom-4 right-4">
        <motion.svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32"
          animate={!prefersReducedMotion ? { rotate: 360 } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="rgba(52, 211, 153, 0.6)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <circle
            cx="16"
            cy="16"
            r="8"
            fill="rgba(52, 211, 153, 0.1)"
            stroke="rgba(52, 211, 153, 0.4)"
            strokeWidth="1"
          />
        </motion.svg>
      </div>
      
      {/* Status chip */}
      <motion.div
        className="absolute bottom-2 left-2 px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] rounded ring-1 ring-emerald-400/30 font-mono"
        animate={!prefersReducedMotion ? { 
          opacity: [0.7, 1, 0.7] 
        } : {}}
        transition={{ 
          duration: 2, 
          repeat: Infinity 
        }}
      >
        Proxy OK • Captcha Bypassed
      </motion.div>
    </div>
  );
}