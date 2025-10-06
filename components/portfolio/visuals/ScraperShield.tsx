"use client";
import { motion } from "framer-motion";

export default function ScraperShield() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
      {/* Background Network */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          {/* Network Nodes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + (i % 4) * 100}
              cy={40 + Math.floor(i / 4) * 60}
              r="3"
              fill="#3b82f6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
          
          {/* Network Lines */}
          <motion.path
            d="M50 40 L150 40 M150 40 L250 40 M250 40 L350 40 M50 100 L150 100 M150 100 L250 100 M250 100 L350 100 M50 160 L150 160 M150 160 L250 160 M250 160 L350 160 M50 40 L50 100 M150 40 L150 100 M250 40 L250 100 M350 40 L350 100 M50 100 L50 160 M150 100 L150 160 M250 100 L250 160 M350 100 L350 160"
            stroke="#3b82f6"
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Central Shield */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
      >
        <svg width="120" height="140" viewBox="0 0 120 140">
          {/* Shield Shape */}
          <motion.path
            d="M60 10 L100 30 L100 80 Q100 120 60 130 Q20 120 20 80 L20 30 Z"
            fill="url(#shieldGradient)"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Shield Icon */}
          <motion.path
            d="M45 50 L55 60 L75 40"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Data Streams */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-8 bg-gradient-to-t from-transparent to-blue-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ 
            scaleY: [0, 1, 0, 1],
            opacity: [0, 1, 0.5, 1]
          }}
          transition={{ 
            duration: 2, 
            delay: 2 + i * 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Success Rate Indicator */}
      <motion.div
        className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs font-mono text-green-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          94% Success
        </motion.div>
      </motion.div>

      {/* Sites Counter */}
      <motion.div
        className="absolute bottom-4 left-4 px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded text-xs text-blue-300"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          50+ Sites
        </motion.div>
      </motion.div>

      {/* Scanning Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

      {/* Protective Pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-blue-400/30"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}