"use client";
import { motion } from "framer-motion";

export default function LeadHunter() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm">
      {/* Background Target Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        {[60, 80, 100, 120].map((size, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-400/40 rounded-full"
            style={{ width: size, height: size }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Central Hunter Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          {/* Crosshair */}
          <motion.circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.line x1="40" y1="15" x2="40" y2="25" stroke="#f97316" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
          <motion.line x1="40" y1="55" x2="40" y2="65" stroke="#f97316" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
          <motion.line x1="15" y1="40" x2="25" y2="40" stroke="#f97316" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
          <motion.line x1="55" y1="40" x2="65" y2="40" stroke="#f97316" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
          
          {/* Center Dot */}
          <motion.circle
            cx="40"
            cy="40"
            r="3"
            fill="#f97316"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </svg>
      </motion.div>

      {/* Prospect Markers */}
      {[
        { x: "20%", y: "30%", color: "#22c55e", size: "hot" },
        { x: "75%", y: "25%", color: "#3b82f6", size: "warm" },
        { x: "80%", y: "70%", color: "#22c55e", size: "hot" },
        { x: "25%", y: "75%", color: "#eab308", size: "cold" },
        { x: "65%", y: "45%", color: "#3b82f6", size: "warm" },
      ].map((prospect, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{ 
            left: prospect.x, 
            top: prospect.y,
            backgroundColor: prospect.color,
            boxShadow: `0 0 10px ${prospect.color}50`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: prospect.size === "hot" ? [1, 1.5, 1] : 1,
            opacity: 1
          }}
          transition={{ 
            duration: prospect.size === "hot" ? 2 : 0.5,
            delay: 1.5 + i * 0.2,
            repeat: prospect.size === "hot" ? Infinity : 0
          }}
        />
      ))}

      {/* Scanning Beam */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute w-1 h-full bg-gradient-to-b from-transparent via-orange-400/60 to-transparent origin-bottom"
          style={{ left: "50%", transformOrigin: "bottom center" }}
          animate={{ rotate: [0, 360] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Research Data */}
      <motion.div
        className="absolute top-4 left-4 px-2 py-1 bg-orange-500/20 backdrop-blur-sm rounded text-xs font-mono text-orange-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          10x Faster
        </motion.div>
      </motion.div>

      {/* Response Rate */}
      <motion.div
        className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs text-green-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.5 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          3x Response
        </motion.div>
      </motion.div>

      {/* Outreach Queue */}
      <motion.div
        className="absolute bottom-4 left-4 space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-1 bg-blue-400/60 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 4 + i * 0.2 }}
          />
        ))}
        <div className="text-xs text-blue-300 mt-1">Drafting...</div>
      </motion.div>

      {/* Lead Score */}
      <motion.div
        className="absolute bottom-4 right-4 px-2 py-1 bg-purple-500/20 backdrop-blur-sm rounded text-xs text-purple-300"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 4.5 }}
      >
        Score: 87/100
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}