'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const trustPoints = [
  'Fixed-fee delivery',
  'Ships in weeks, not months', 
  'Revenue-focused outcomes'
];

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && mounted && resolvedTheme === 'dark') {
      const handleLoadedData = () => setVideoLoaded(true);
      const handleError = () => setVideoError(true);
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      video.play().catch(() => setVideoError(true));

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [mounted, resolvedTheme]);

  // Safe theme detection with fallback
  const isLightMode = !mounted ? true : resolvedTheme !== 'dark';

  return (
    <section className="relative w-full min-h-screen mobile-safe overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:from-purple-950/20 dark:via-gray-900 dark:to-blue-950/20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20"></div>
      
      {/* Premium Floating Orbs - Optimized for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Dark Mode Background Video */}
      {!isLightMode && !videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Light Mode Background - Clean White/Gray Gradient */}
      {isLightMode && (
        <div 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 50% 0%, rgba(139, 92, 246, 0.08), transparent),
              radial-gradient(ellipse 80% 60% at 80% 20%, rgba(147, 51, 234, 0.05), transparent),
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(139, 92, 246, 0.05), transparent),
              linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #e2e8f0 100%)
            `
          }}
        />
      )}

      {/* Dark Mode Fallback Static Background */}
      {!isLightMode && (
        <div 
          className={`absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 ${
            videoError || !videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
              radial-gradient(ellipse 80% 50% at 80% 50%, rgba(175, 56, 245, 0.15), transparent),
              radial-gradient(ellipse 80% 50% at 20% 50%, rgba(120, 119, 198, 0.15), transparent),
              radial-gradient(ellipse 80% 50% at 50% 120%, rgba(56, 189, 248, 0.1), transparent),
              linear-gradient(135deg, #0a0118 0%, #16051f 25%, #1a0b2e 50%, #0f051a 100%)
            `
          }}
        />
      )}

      {/* Grid Pattern Overlay - Theme Aware */}
      <div className={`absolute inset-0 grid-pattern z-5 overflow-hidden ${
        isLightMode ? 'opacity-5' : 'opacity-20'
      }`} aria-hidden="true" />

      {/* Theme-Aware Gradient Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
        style={{
          background: isLightMode ? `
            linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%)
          ` : `
            linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)
          `
        }}
        aria-hidden="true"
      />

      {/* Content Container - Mobile Optimized */}
      <div className={`relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 py-20 mobile-safe ${
        isLightMode ? 'text-gray-900' : 'text-white'
      }`}>
        <div className="max-w-4xl mx-auto w-full">
          
          {/* Main Headline with Staggered Animation - Mobile Responsive */}
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans leading-tight break-words ${
              isLightMode ? 'text-gray-900' : 'text-white'
            }`}>
              {['Ship', 'Revenue-Driving'].map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-2 sm:mr-4"
                  initial={{ opacity: 1, y: 0, rotateX: 0 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: wordIndex * 0.2,
                    ease: [0.175, 0.885, 0.32, 1.275]
                  }}
                  style={{ 
                    textShadow: isLightMode 
                      ? '0 2px 4px rgba(0, 0, 0, 0.1)' 
                      : '0 4px 8px rgba(0, 0, 0, 0.3)' 
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className={`inline-block nf-gradient-text relative hero-lines`}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ scale: 1.02 }}
              >
                Software Fast
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Subheadline with Beautiful Animation */}
          <motion.p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2 font-medium ${
              isLightMode ? 'text-gray-700' : 'text-white/90'
            }`}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Turning Data into Power. <span className="nf-gradient-text font-semibold">Code into Profits</span>.
          </motion.p>
          
          {/* Description with Beautiful Animation */}
          <motion.p 
            className={`text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-2 ${
              isLightMode ? 'text-gray-600' : 'text-white/80'
            }`}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            AI-native boutique studio building web apps, automation, and intelligent systems that move your revenue needle with <span className="nf-gradient-text font-semibold">measurable outcomes</span>.
          </motion.p>

          {/* CTA Buttons with Stunning Animation */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto py-4 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </Link>

            {/* Research Assistant CTA - Prominent Feature */}
            <Link href="/research">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className={`w-full sm:w-auto py-4 px-8 text-lg font-semibold border-2 transition-all duration-300 relative overflow-hidden group ${
                    isLightMode 
                      ? 'border-emerald-400 text-emerald-700 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 hover:border-emerald-500' 
                      : 'border-emerald-400/60 text-emerald-300 bg-gradient-to-r from-emerald-950/30 to-green-950/30 hover:from-emerald-900/40 hover:to-green-900/40 hover:border-emerald-300'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🤖 Try AI Research
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={`w-full sm:w-auto py-4 px-8 text-lg font-semibold border-2 transition-all duration-300 ${
                    isLightMode 
                      ? 'border-purple-300 text-purple-700 bg-white/80 hover:bg-purple-50 hover:border-purple-400' 
                      : 'border-purple-400/50 text-purple-300 bg-white/5 hover:bg-white/10 hover:border-purple-300'
                  }`}
                >
                  View Our Work
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Beautiful Trust Points with Staggered Animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {trustPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.8 + (index * 0.1),
                  ease: [0.175, 0.885, 0.32, 1.275]
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex-shrink-0 shadow-sm"></div>
                <span className={`font-medium ${
                  isLightMode ? 'text-gray-600' : 'text-white/70'
                }`}>{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Beautiful Scroll Indicator with Animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div 
          className={`flex flex-col items-center gap-2 ${
            isLightMode ? 'text-gray-400' : 'text-white/50'
          }`}
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
          <div className={`w-px h-8 bg-gradient-to-b animate-pulse ${
            isLightMode 
              ? 'from-gray-400 to-transparent' 
              : 'from-white/50 to-transparent'
          }`}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
