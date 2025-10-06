"use client";
import { motion } from "framer-motion";

export default function AgentAnim() {
  return (
    <div className="w-full h-32 bg-gray-900/50 rounded-lg p-3 relative overflow-hidden">
      {/* Chat bubbles */}
      <div className="space-y-2">
        <motion.div
          className="max-w-20 bg-blue-500/20 text-blue-300 p-2 rounded-lg text-xs"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Analyze docs
        </motion.div>
        
        <motion.div
          className="max-w-24 bg-purple-500/20 text-purple-300 p-2 rounded-lg text-xs ml-auto"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ✓ 150 pages processed
        </motion.div>
        
        <motion.div
          className="max-w-20 bg-green-500/20 text-green-300 p-2 rounded-lg text-xs"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Summary ready
        </motion.div>
      </div>
      
      {/* Tool icons */}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        {['🔗', '🗄️', '🌐'].map((icon, i) => (
          <motion.div
            key={i}
            className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-xs"
            animate={{ 
              scale: [1, 1.2, 1],
              backgroundColor: ["rgba(255,255,255,0.1)", "rgba(99,102,241,0.3)", "rgba(255,255,255,0.1)"]
            }}
            transition={{ 
              delay: i * 0.5, 
              duration: 1, 
              repeat: Infinity, 
              repeatDelay: 2 
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}