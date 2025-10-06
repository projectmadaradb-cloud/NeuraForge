"use client";
import { motion } from "framer-motion";

export default function OpsCopilot() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 backdrop-blur-sm">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          <defs>
            <pattern id="opsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06b6d4" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#opsGrid)" />
        </svg>
      </div>

      {/* Central Command Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Hub Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="35"
            fill="url(#hubGradient)"
            stroke="#06b6d4"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Central Processor */}
          <motion.rect
            x="40"
            y="40"
            width="20"
            height="20"
            rx="3"
            fill="#06b6d4"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          {/* Connection Points */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={i}>
              <motion.circle
                cx={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                r="3"
                fill="#22c55e"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              />
              <motion.line
                x1="50"
                y1="50"
                x2={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                stroke="#06b6d4"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Checklist Items */}
      <motion.div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.5 + i * 0.2 }}
          >
            <motion.div
              className="w-3 h-3 border border-cyan-400 rounded"
              initial={{ backgroundColor: "transparent" }}
              animate={{ backgroundColor: "#22c55e" }}
              transition={{ duration: 0.3, delay: 3 + i * 0.3 }}
            />
            <motion.div
              className="w-8 h-1 bg-gray-400 rounded"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 3 + i * 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Process Flow */}
      <motion.div
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80">
          {/* Flow Steps */}
          {[15, 35, 55].map((y, i) => (
            <g key={i}>
              <motion.rect
                x="20"
                y={y - 5}
                width="20"
                height="10"
                rx="2"
                fill="#06b6d4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 2.5 + i * 0.4 }}
              />
              {i < 2 && (
                <motion.path
                  d={`M30 ${y + 5} L30 ${y + 15}`}
                  stroke="#06b6d4"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 3 + i * 0.4 }}
                />
              )}
            </g>
          ))}

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
            </marker>
          </defs>
        </svg>
      </motion.div>

      {/* Compliance Score */}
      <motion.div
        className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs font-mono text-green-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          90% SOP
        </motion.div>
      </motion.div>

      {/* Speed Indicator */}
      <motion.div
        className="absolute top-4 left-4 px-2 py-1 bg-cyan-500/20 backdrop-blur-sm rounded text-xs text-cyan-300"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 4.5 }}
      >
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          5x Faster
        </motion.div>
      </motion.div>

      {/* Time Saved */}
      <motion.div
        className="absolute bottom-4 left-4 px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded text-xs text-blue-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 5 }}
      >
        60% Time Saved
      </motion.div>

      {/* Active Status */}
      <motion.div
        className="absolute bottom-4 right-4 flex items-center space-x-1 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs text-green-300"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 5.5 }}
      >
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span>Active</span>
      </motion.div>

      {/* Data Flow Animation */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${30 + (i % 4) * 20}%`,
            top: `${40 + Math.floor(i / 4) * 20}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            delay: 3 + (i * 0.2),
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}

      {/* System Pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1]
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