"use client";
import { motion } from "framer-motion";

export default function AppAnim() {
  const screens = [
    { bg: "from-blue-500/20 to-purple-500/20", content: "📋 Feed" },
    { bg: "from-purple-500/20 to-pink-500/20", content: "📄 Detail" },
    { bg: "from-green-500/20 to-teal-500/20", content: "✅ Success" }
  ];

  return (
    <motion.div 
      className="w-24 h-32 mx-auto relative"
      whileHover={{ rotateY: 5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Phone frame */}
      <div className="w-full h-full bg-gray-900 rounded-[12px] p-1 border border-white/20">
        {/* Notch */}
        <div className="w-8 h-1 bg-gray-700 rounded-full mx-auto mb-1" />
        
        {/* Screen container */}
        <div className="w-full h-full bg-black rounded-[8px] overflow-hidden relative">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 bg-gradient-to-br ${screen.bg} flex items-center justify-center text-xs text-white`}
              initial={{ x: "100%" }}
              animate={{ 
                x: `${(i - 1) * 100}%`,
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              {screen.content}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full" />
    </motion.div>
  );
}