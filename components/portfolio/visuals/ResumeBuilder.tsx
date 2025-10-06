"use client";
import { motion } from "framer-motion";

export default function ResumeBuilder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          <defs>
            <pattern id="docPattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="20" height="2" fill="#8b5cf6" opacity="0.5"/>
              <rect x="5" y="10" width="15" height="2" fill="#8b5cf6" opacity="0.3"/>
              <rect x="5" y="15" width="18" height="2" fill="#8b5cf6" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#docPattern)" />
        </svg>
      </div>

      {/* Document Stack */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        {/* Background Documents */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-40 bg-gray-700/30 border border-purple-400/30 rounded-lg backdrop-blur-sm"
            style={{ 
              transform: `translate(${i * 4}px, ${i * 4}px) rotate(${i * 2}deg)`,
              zIndex: -i
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6 - i * 0.2, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Main Document */}
        <motion.div
          className="w-32 h-40 bg-white/10 border border-purple-400/50 rounded-lg backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Document Header */}
          <motion.div
            className="h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-b border-purple-400/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          />

          {/* Document Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-1 mx-2 mt-2 bg-purple-300/60 rounded"
              style={{ width: `${60 + Math.random() * 30}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Skills Section Highlight */}
          <motion.div
            className="absolute bottom-4 left-2 right-2 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-blue-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded"
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 1, delay: 2.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* AI Brain */}
      <motion.div
        className="absolute top-4 left-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          {/* Brain Shape */}
          <motion.path
            d="M20 8 Q28 8 32 16 Q32 24 28 32 Q20 32 20 32 Q12 32 8 24 Q8 16 12 8 Q20 8 20 8"
            fill="url(#brainGradient)"
            stroke="#8b5cf6"
            strokeWidth="1"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />
          
          {/* Neural Connections */}
          <motion.circle cx="15" cy="15" r="1" fill="#a855f7" 
            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 2, delay: 2.5, repeat: Infinity }} />
          <motion.circle cx="25" cy="18" r="1" fill="#a855f7" 
            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 2, delay: 2.7, repeat: Infinity }} />
          <motion.circle cx="20" cy="25" r="1" fill="#a855f7" 
            initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 2, delay: 2.9, repeat: Infinity }} />

          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Match Score */}
      <motion.div
        className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs font-mono text-green-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Match: 94%
        </motion.div>
      </motion.div>

      {/* ATS Compatible Badge */}
      <motion.div
        className="absolute bottom-4 right-4 px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded text-xs text-blue-300"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 3.5 }}
      >
        ATS Ready
      </motion.div>

      {/* Floating Keywords */}
      {["React", "AI", "Python"].map((keyword, i) => (
        <motion.div
          key={keyword}
          className="absolute px-2 py-1 bg-purple-500/20 backdrop-blur-sm rounded text-xs text-purple-300"
          style={{
            left: `${30 + i * 25}%`,
            bottom: `${20 + i * 15}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            y: [20, 0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            delay: 2 + i * 0.3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {keyword}
        </motion.div>
      ))}

      {/* Building Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-400/5 to-transparent"
        animate={{ y: ["100%", "-100%"] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />
    </div>
  );
}