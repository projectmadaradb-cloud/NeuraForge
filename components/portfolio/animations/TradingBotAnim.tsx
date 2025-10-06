"use client";
import { motion } from "framer-motion";

export default function TradingBotAnim() {
  return (
    <div className="w-full h-32 relative">
      <svg width="100%" height="100%" viewBox="0 0 300 128" className="absolute inset-0">
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated price line */}
        <motion.path
          d="M20 80 Q60 40 100 60 T180 30 Q220 50 280 25"
          fill="none"
          stroke="url(#priceGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        
        {/* Candlesticks */}
        {[50, 80, 110, 140, 170, 200, 230].map((x, i) => (
          <motion.g key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <rect x={x-2} y={60 + Math.sin(i) * 20} width="4" height={20 + Math.cos(i) * 10} 
                  fill={i % 2 ? "#22c55e" : "#ef4444"} />
          </motion.g>
        ))}
        
        <defs>
          <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating indicators */}
      <motion.div
        className="absolute top-2 right-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        +$1,247
      </motion.div>
    </div>
  );
}