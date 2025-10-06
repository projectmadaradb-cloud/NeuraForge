"use client";
import { motion } from "framer-motion";

export default function VectorSearch() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/30 to-emerald-900/30 backdrop-blur-sm">
      {/* Background Vector Field */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          {/* Vector Grid */}
          {Array.from({ length: 48 }).map((_, i) => {
            const x = (i % 8) * 50 + 25;
            const y = Math.floor(i / 8) * 33 + 16;
            const angle = (i * 23) % 360;
            return (
              <motion.g key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}>
                <line
                  x1={x}
                  y1={y}
                  x2={x + 15 * Math.cos((angle * Math.PI) / 180)}
                  y2={y + 15 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
                <circle cx={x} cy={y} r="1" fill="#8b5cf6" />
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Central Search Core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          {/* Outer Ring */}
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#searchGradient)"
            strokeWidth="3"
            strokeDasharray="8,4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Core */}
          <motion.circle
            cx="60"
            cy="60"
            r="25"
            fill="url(#coreGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          {/* Search Beam */}
          <motion.path
            d="M60 35 L60 10 M60 85 L60 110 M35 60 L10 60 M85 60 L110 60"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />

          {/* Vector Connections */}
          {[30, 90, 150, 210, 270, 330].map((angle, i) => (
            <motion.line
              key={i}
              x1="60"
              y1="60"
              x2={60 + 35 * Math.cos((angle * Math.PI) / 180)}
              y2={60 + 35 * Math.sin((angle * Math.PI) / 180)}
              stroke="#8b5cf6"
              strokeWidth="1"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 2 + i * 0.1 }}
            />
          ))}

          <defs>
            <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Document Fragments */}
      {[
        { x: "15%", y: "20%", text: "Doc A" },
        { x: "85%", y: "25%", text: "Doc B" },
        { x: "80%", y: "80%", text: "Doc C" },
        { x: "20%", y: "75%", text: "Doc D" },
      ].map((doc, i) => (
        <motion.div
          key={i}
          className="absolute px-2 py-1 bg-violet-500/30 backdrop-blur-sm rounded text-xs text-violet-300 border border-violet-400/30"
          style={{ left: doc.x, top: doc.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.5 + i * 0.2 }}
        >
          {doc.text}
        </motion.div>
      ))}

      {/* Semantic Connections */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.path
          d="M 15% 20% Q 50% 10% 85% 25%"
          fill="none"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        />
        <motion.path
          d="M 85% 80% Q 50% 90% 20% 75%"
          fill="none"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
        />
      </motion.svg>

      {/* Query Accuracy */}
      <motion.div
        className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-xs font-mono text-green-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4.5 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          95% Accuracy
        </motion.div>
      </motion.div>

      {/* Speed Indicator */}
      <motion.div
        className="absolute top-4 left-4 px-2 py-1 bg-violet-500/20 backdrop-blur-sm rounded text-xs text-violet-300"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 5 }}
      >
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          10x Faster
        </motion.div>
      </motion.div>

      {/* Citation Count */}
      <motion.div
        className="absolute bottom-4 left-4 px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded text-xs text-blue-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 5.5 }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          1.2M Docs
        </motion.div>
      </motion.div>

      {/* Enterprise Ready */}
      <motion.div
        className="absolute bottom-4 right-4 px-2 py-1 bg-emerald-500/20 backdrop-blur-sm rounded text-xs text-emerald-300"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 6 }}
      >
        Enterprise
      </motion.div>

      {/* Floating Vectors */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-400 rounded-full"
          style={{
            left: `${25 + (i % 6) * 12}%`,
            top: `${35 + Math.floor(i / 6) * 30}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            delay: 4 + (i * 0.1),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Search Wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />

      {/* Semantic Pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-emerald-500/10"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}