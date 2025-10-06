"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AgentOrbits() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const orbits = [
    { radius: 60, speed: 8, label: "Research", delay: 0 },
    { radius: 80, speed: 12, label: "Enrich", delay: 0.5 },
    { radius: 100, speed: 16, label: "Act", delay: 1 }
  ];

  return (
    <motion.div 
      className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
      whileHover={!prefersReducedMotion ? { rotateX: 2, rotateY: 2 } : {}}
      transition={{ duration: 0.3 }}
      style={{ perspective: "1000px" }}
    >
      {/* Center core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg"
          animate={!prefersReducedMotion ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Orbiting nodes */}
        {orbits.map((orbit, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0"
            animate={!prefersReducedMotion ? { rotate: 360 } : {}}
            transition={{ 
              duration: orbit.speed, 
              repeat: Infinity, 
              ease: "linear",
              delay: orbit.delay 
            }}
          >
            <div 
              className="relative"
              style={{ 
                width: orbit.radius * 2, 
                height: orbit.radius * 2,
                marginLeft: -orbit.radius,
                marginTop: -orbit.radius
              }}
            >
              {/* Dashed orbit path */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox={`0 0 ${orbit.radius * 2} ${orbit.radius * 2}`}
              >
                <circle
                  cx={orbit.radius}
                  cy={orbit.radius}
                  r={orbit.radius - 3}
                  fill="none"
                  stroke="rgba(124,58,237,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
              
              {/* Orbiting node */}
              <motion.div
                className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-md"
                style={{ 
                  top: 0, 
                  left: orbit.radius - 6,
                  transform: 'translateY(-50%)'
                }}
                animate={!prefersReducedMotion ? { rotate: -360 } : {}}
                transition={{ 
                  duration: orbit.speed, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: orbit.delay 
                }}
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute text-[10px] px-2 py-1 bg-black/60 text-white rounded whitespace-nowrap"
                style={{ 
                  top: -8, 
                  left: orbit.radius + 10
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0.8, 1, 0.8] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: orbit.delay + 2 
                }}
              >
                {orbit.label}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}