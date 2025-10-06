"use client";
import { motion } from "framer-motion";

export default function ScraperAnim() {
  return (
    <div className="w-full h-32 flex space-x-4 p-2">
      {/* Left side - Web pages */}
      <div className="flex-1 space-y-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-white/10 relative overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
            />
            <div className="p-1 text-xs text-gray-300">site-{i + 1}.com</div>
          </motion.div>
        ))}
      </div>
      
      {/* Arrows */}
      <div className="flex flex-col justify-center">
        <motion.svg width="20" height="60" viewBox="0 0 20 60">
          {[20, 30, 40].map((y, i) => (
            <motion.path
              key={i}
              d={`M2 ${y} L18 ${y} M14 ${y-3} L18 ${y} L14 ${y+3}`}
              stroke="#22c55e"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + i * 0.3, duration: 0.5 }}
            />
          ))}
        </motion.svg>
      </div>
      
      {/* Right side - Table */}
      <div className="flex-1 space-y-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-green-500/20 rounded flex items-center px-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <div className="text-xs text-green-300">Row {i + 1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}