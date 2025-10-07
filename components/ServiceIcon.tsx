"use client";
import { motion } from 'framer-motion';

interface ServiceIconProps {
  serviceId: string;
  className?: string;
}

export default function ServiceIcon({ serviceId, className = "w-12 h-12" }: ServiceIconProps) {
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6, // Reduced from 0.8 for mobile
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    },
    hover: { 
      scale: 1.05, // Reduced for mobile-first
      rotate: 3, // Less rotation for mobile-first
      transition: { duration: 0.3 }
    }
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        duration: 1.5, // Reduced from 2 for mobile
        ease: "easeInOut",
        delay: 0.2 // Reduced delay
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.03, 1], // Reduced from 1.05 for mobile
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  switch (serviceId) {
    case 'web-development':
      return (
        <motion.div 
          className={`${className} will-change-transform gpu-accelerated`}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Browser Window */}
            <motion.rect
              x="8" y="12" width="48" height="36" rx="4"
              stroke="url(#webGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            {/* Browser Top Bar */}
            <motion.rect
              x="8" y="12" width="48" height="8" rx="4"
              fill="url(#webGrad)" opacity="0.2"
              variants={pathVariants}
            />
            {/* Dots */}
            <motion.circle cx="14" cy="16" r="1.5" fill="url(#webGrad)" variants={pulseVariants} />
            <motion.circle cx="19" cy="16" r="1.5" fill="url(#webGrad)" variants={pulseVariants} />
            <motion.circle cx="24" cy="16" r="1.5" fill="url(#webGrad)" variants={pulseVariants} />
            
            {/* Code Elements */}
            <motion.path
              d="M16 28 L20 32 L16 36" 
              stroke="url(#webGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              variants={pathVariants}
            />
            <motion.path
              d="M48 28 L44 32 L48 36" 
              stroke="url(#webGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              variants={pathVariants}
            />
            <motion.line
              x1="28" y1="26" x2="36" y2="38"
              stroke="url(#webGrad)" strokeWidth="2" strokeLinecap="round"
              variants={pathVariants}
            />
            
            <defs>
              <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'app-development':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Phone Outline */}
            <motion.rect
              x="20" y="8" width="24" height="48" rx="6"
              stroke="url(#appGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            {/* Screen */}
            <motion.rect
              x="22" y="14" width="20" height="32" rx="2"
              fill="url(#appGrad)" opacity="0.1"
              variants={pathVariants}
            />
            {/* App Icons */}
            <motion.rect x="26" y="18" width="4" height="4" rx="1" fill="url(#appGrad)" variants={pulseVariants} />
            <motion.rect x="34" y="18" width="4" height="4" rx="1" fill="url(#appGrad)" variants={pulseVariants} />
            <motion.rect x="26" y="26" width="4" height="4" rx="1" fill="url(#appGrad)" variants={pulseVariants} />
            <motion.rect x="34" y="26" width="4" height="4" rx="1" fill="url(#appGrad)" variants={pulseVariants} />
            
            {/* Bottom Navigation */}
            <motion.line
              x1="26" y1="40" x2="38" y2="40"
              stroke="url(#appGrad)" strokeWidth="2"
              variants={pathVariants}
            />
            
            <defs>
              <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'ai-solutions':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Brain/Neural Network */}
            <motion.circle
              cx="32" cy="32" r="20"
              stroke="url(#aiGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            {/* Neural Nodes */}
            <motion.circle cx="24" cy="24" r="2" fill="url(#aiGrad)" variants={pulseVariants} />
            <motion.circle cx="40" cy="24" r="2" fill="url(#aiGrad)" variants={pulseVariants} />
            <motion.circle cx="32" cy="32" r="2" fill="url(#aiGrad)" variants={pulseVariants} />
            <motion.circle cx="24" cy="40" r="2" fill="url(#aiGrad)" variants={pulseVariants} />
            <motion.circle cx="40" cy="40" r="2" fill="url(#aiGrad)" variants={pulseVariants} />
            
            {/* Connections */}
            <motion.path
              d="M24 24 L32 32 L40 24 M24 40 L32 32 L40 40"
              stroke="url(#aiGrad)" strokeWidth="1.5" strokeLinecap="round"
              variants={pathVariants}
            />
            
            {/* Sparks */}
            <motion.path
              d="M16 16 L20 18 L16 20 L18 16 Z"
              fill="url(#aiGrad)"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M44 48 L48 50 L44 52 L46 48 Z"
              fill="url(#aiGrad)"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
            
            <defs>
              <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'web-scraping':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Web/Database */}
            <motion.rect
              x="8" y="16" width="48" height="32" rx="4"
              stroke="url(#scrapeGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            {/* Data Rows */}
            <motion.line x1="12" y1="24" x2="52" y2="24" stroke="url(#scrapeGrad)" strokeWidth="1" variants={pathVariants} />
            <motion.line x1="12" y1="32" x2="52" y2="32" stroke="url(#scrapeGrad)" strokeWidth="1" variants={pathVariants} />
            <motion.line x1="12" y1="40" x2="52" y2="40" stroke="url(#scrapeGrad)" strokeWidth="1" variants={pathVariants} />
            
            {/* Data Points */}
            <motion.circle cx="16" cy="20" r="1" fill="url(#scrapeGrad)" variants={pulseVariants} />
            <motion.circle cx="24" cy="20" r="1" fill="url(#scrapeGrad)" variants={pulseVariants} />
            <motion.circle cx="32" cy="20" r="1" fill="url(#scrapeGrad)" variants={pulseVariants} />
            
            {/* Extraction Arrow */}
            <motion.path
              d="M36 12 L44 8 L44 16 Z"
              fill="url(#scrapeGrad)"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <defs>
              <linearGradient id="scrapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'trading-bots':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Chart */}
            <motion.path
              d="M8 48 Q16 32 24 36 T40 24 T56 20"
              stroke="url(#tradingGrad)" strokeWidth="3" fill="none" strokeLinecap="round"
              variants={pathVariants}
            />
            {/* Candlesticks */}
            <motion.rect x="14" y="32" width="4" height="12" fill="url(#tradingGrad)" variants={pulseVariants} />
            <motion.rect x="22" y="28" width="4" height="16" fill="url(#tradingGrad)" variants={pulseVariants} />
            <motion.rect x="30" y="24" width="4" height="20" fill="url(#tradingGrad)" variants={pulseVariants} />
            <motion.rect x="38" y="20" width="4" height="24" fill="url(#tradingGrad)" variants={pulseVariants} />
            
            {/* Bot Icon */}
            <motion.circle
              cx="48" cy="16" r="6"
              stroke="url(#tradingGrad)" strokeWidth="2" fill="rgba(34, 197, 94, 0.1)"
              variants={pathVariants}
            />
            <motion.circle cx="46" cy="14" r="1" fill="url(#tradingGrad)" variants={pulseVariants} />
            <motion.circle cx="50" cy="14" r="1" fill="url(#tradingGrad)" variants={pulseVariants} />
            
            <defs>
              <linearGradient id="tradingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#16A34A" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'ai-agents':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Agent Figure */}
            <motion.circle
              cx="32" cy="20" r="8"
              stroke="url(#agentGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            <motion.path
              d="M20 36 Q32 32 44 36 L44 48 Q32 52 20 48 Z"
              stroke="url(#agentGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            
            {/* AI Brain */}
            <motion.circle cx="30" cy="18" r="1.5" fill="url(#agentGrad)" variants={pulseVariants} />
            <motion.circle cx="34" cy="18" r="1.5" fill="url(#agentGrad)" variants={pulseVariants} />
            <motion.path
              d="M28 22 Q32 24 36 22"
              stroke="url(#agentGrad)" strokeWidth="1.5" strokeLinecap="round"
              variants={pathVariants}
            />
            
            {/* Data Streams */}
            <motion.path
              d="M12 12 Q16 16 12 20"
              stroke="url(#agentGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M52 12 Q48 16 52 20"
              stroke="url(#agentGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            
            <defs>
              <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    case 'business-automation':
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Workflow Boxes */}
            <motion.rect
              x="8" y="24" width="12" height="8" rx="2"
              stroke="url(#businessGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            <motion.rect
              x="26" y="16" width="12" height="8" rx="2"
              stroke="url(#businessGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            <motion.rect
              x="26" y="32" width="12" height="8" rx="2"
              stroke="url(#businessGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            <motion.rect
              x="44" y="24" width="12" height="8" rx="2"
              stroke="url(#businessGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            
            {/* Workflow Arrows */}
            <motion.path
              d="M20 28 L26 20"
              stroke="url(#businessGrad)" strokeWidth="2" strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M20 28 L26 36"
              stroke="url(#businessGrad)" strokeWidth="2" strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M38 20 L44 28"
              stroke="url(#businessGrad)" strokeWidth="2" strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M38 36 L44 28"
              stroke="url(#businessGrad)" strokeWidth="2" strokeLinecap="round"
              variants={pathVariants}
            />
            
            {/* Gear */}
            <motion.circle
              cx="32" cy="50" r="6"
              stroke="url(#businessGrad)" strokeWidth="1.5" fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <defs>
              <linearGradient id="businessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );

    default:
      return (
        <motion.div 
          className={className}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            <motion.circle
              cx="32" cy="32" r="20"
              stroke="url(#defaultGrad)" strokeWidth="2" fill="none"
              variants={pathVariants}
            />
            <defs>
              <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6B7280" />
                <stop offset="100%" stopColor="#4B5563" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      );
  }
}