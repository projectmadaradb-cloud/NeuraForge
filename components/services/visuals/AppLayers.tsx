"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AppLayers() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const layers = [
    { label: "Database", color: "from-blue-500/20 to-blue-600/20", icons: ["🗄️"] },
    { label: "API Layer", color: "from-purple-500/20 to-purple-600/20", icons: ["🔗", "🔐"] },
    { label: "Business Logic", color: "from-indigo-500/20 to-indigo-600/20", icons: ["⚙️", "🧠"] },
    { label: "UI Layer", color: "from-pink-500/20 to-pink-600/20", icons: ["📱", "🎨"] }
  ];

  return (
    <motion.div 
      className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-indigo-900/20 p-4"
      whileHover={!prefersReducedMotion ? { 
        rotateX: 5, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      } : {}}
      transition={{ duration: 0.3 }}
      style={{ perspective: "1000px" }}
    >
      {/* Layer stack */}
      <div className="relative h-full flex flex-col justify-center gap-1">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            className={`relative h-8 rounded-lg bg-gradient-to-r ${layer.color} ring-1 ring-white/10 backdrop-blur-sm`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.15,
              type: "spring",
              bounce: 0.3
            }}
          >
            {/* Loading bar simulation */}
            <motion.div
              className="absolute top-1 left-2 right-12 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15 + 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-white/40 to-white/60 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.15 + 0.5,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            
            {/* Icons */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              {layer.icons.map((icon, iconI) => (
                <motion.span
                  key={iconI}
                  className="text-xs opacity-60"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  transition={{ 
                    delay: i * 0.15 + 0.8 + iconI * 0.1,
                    type: "spring",
                    bounce: 0.5
                  }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
            
            {/* Layer label */}
            <motion.span
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[10px] text-white/70 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: i * 0.15 + 0.6 }}
            >
              {layer.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
      
      {/* Screen header */}
      <motion.div
        className="absolute top-2 left-2 right-2 h-4 bg-gradient-to-r from-white/10 to-white/5 rounded-t-lg ring-1 ring-white/10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={!prefersReducedMotion ? { x: ["-100%", "100%"] } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5 
          }}
        />
      </motion.div>
    </motion.div>
  );
}