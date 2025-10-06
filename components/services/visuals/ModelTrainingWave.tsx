"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ModelTrainingWave() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [epoch, setEpoch] = useState(1);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    if (!prefersReducedMotion) {
      const interval = setInterval(() => {
        setEpoch(prev => prev >= 5 ? 1 : prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/30 to-cyan-900/20">
      {/* Animated sine wave */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
          </linearGradient>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M0,100 Q50,60 100,100 T200,100 T300,100 T400,100"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="3"
          filter="url(#waveGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Moving epoch dots */}
        {!prefersReducedMotion && Array.from({ length: 3 }).map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#06b6d4"
            filter="url(#waveGlow)"
            animate={{
              cx: [50 + i * 100, 350 + i * 100],
              cy: [100 + Math.sin(i) * 20, 100 + Math.sin(i + Math.PI) * 20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
      
      {/* Epoch counter */}
      <motion.div
        className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-md ring-1 ring-indigo-400/30 font-mono"
        key={epoch}
        initial={{ scale: 0.9, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Epoch: {epoch}/5
      </motion.div>
      
      {/* Accuracy metric */}
      <motion.div
        className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-md ring-1 ring-cyan-400/30 font-mono"
        animate={!prefersReducedMotion ? {
          opacity: [0.7, 1, 0.7]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Acc: {(85 + epoch * 2.5).toFixed(1)}%
      </motion.div>
      
      {/* Particle effects */}
      {!prefersReducedMotion && Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: "60%"
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3 + (epoch - 1) * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Training status */}
      <motion.div
        className="absolute bottom-2 left-2 text-[10px] text-indigo-300 font-mono opacity-60"
        animate={!prefersReducedMotion ? {
          opacity: [0.4, 0.8, 0.4]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {epoch < 5 ? "Training..." : "Training Complete"}
      </motion.div>
    </div>
  );
}