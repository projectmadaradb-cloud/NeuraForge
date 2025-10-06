"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function TradingPulse() {
  const ctrls = useAnimationControls();
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      ctrls.start({ 
        opacity: [0.9, 1, 0.9], 
        transition: { duration: 6, repeat: Infinity } 
      });
    }
  }, [ctrls]);

  return (
    <motion.div 
      animate={ctrls} 
      className="absolute inset-0 rounded-xl overflow-hidden"
      style={{ 
        backgroundImage: "radial-gradient(700px 350px at 15% 30%, rgba(124,58,237,.20), transparent 60%), radial-gradient(600px 300px at 85% 70%, rgba(96,165,250,.18), transparent 60%)" 
      }}
    >
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-25" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", 
          backgroundSize: "22px 22px"
        }}
      />
      
      {/* Animated PnL curve */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 240">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M0,170 C60,150 120,190 180,120 C240,60 300,110 360,140 C420,160 480,120 540,150"
          fill="none" 
          stroke="url(#g1)" 
          strokeWidth="3" 
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }} 
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Ticker chips */}
      <div className="absolute bottom-2 left-2 flex gap-2 text-[11px]">
        {["+0.8%", "-0.2%", "+1.1%"].map((ticker, i) => (
          <motion.span 
            key={i}
            initial={{ y: 10, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className={`px-2 py-1 rounded bg-black/50 ring-1 ring-white/10 font-mono ${
              ticker.includes('+') ? 'text-emerald-300' : 'text-rose-300'
            }`}
          >
            {ticker}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}