"use client";
import { motion } from "framer-motion";

export default function TrainAnim() {
  return (
    <div className="w-full h-32 relative">
      <svg width="100%" height="100%" viewBox="0 0 300 128" className="absolute inset-0">
        {/* Chart background */}
        <rect width="300" height="128" fill="rgba(17, 24, 39, 0.5)" rx="8" />
        
        {/* Grid lines */}
        {[32, 64, 96].map((y) => (
          <line key={y} x1="40" y1={y} x2="280" y2={y} stroke="#374151" strokeWidth="0.5" opacity="0.5" />
        ))}
        
        {/* Loss curve */}
        <motion.path
          d="M40 100 Q80 90 120 70 Q160 55 200 45 Q240 40 280 35"
          fill="none"
          stroke="url(#lossGradient)"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Data points flowing to model core */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="#8b5cf6"
            initial={{ 
              cx: 40 + Math.random() * 200, 
              cy: 40 + Math.random() * 60,
              opacity: 0 
            }}
            animate={{ 
              cx: 160, 
              cy: 64,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              delay: i * 0.3,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        
        {/* Model core */}
        <motion.circle
          cx="160"
          cy="64"
          r="12"
          fill="url(#coreGradient)"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <defs>
          <linearGradient id="lossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
        </defs>
        
        {/* Labels */}
        <text x="40" y="115" fill="#9ca3af" fontSize="8">Epoch 0</text>
        <text x="240" y="115" fill="#9ca3af" fontSize="8">Epoch 100</text>
        <text x="20" y="100" fill="#9ca3af" fontSize="8">High</text>
        <text x="20" y="40" fill="#9ca3af" fontSize="8">Low</text>
      </svg>
      
      {/* Status indicator */}
      <motion.div
        className="absolute top-2 right-2 px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Training...
      </motion.div>
    </div>
  );
}