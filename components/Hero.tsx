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
      // Handle video load events only in dark mode
      const handleLoadedData = () => setVideoLoaded(true);
      const handleError = () => setVideoError(true);
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Try to play the video
      video.play().catch(() => setVideoError(true));

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [mounted, resolvedTheme]);

  const isLightMode = mounted && resolvedTheme === 'light';

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
            initial={{ opacity: 0 }}
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
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
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
                initial={{ opacity: 0, scale: 0.5 }}
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
          
          {/* Subheadline - Mobile Optimized */}
          <motion.p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2 ${
              isLightMode ? 'text-gray-700' : 'text-white/90'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              textShadow: isLightMode 
                ? '0 1px 2px rgba(0, 0, 0, 0.05)' 
                : '0 2px 4px rgba(0, 0, 0, 0.5)' 
            }}
          >
            Turning Data into Power. Code into Profits.
          </motion.p>

          {/* Description - Mobile Optimized */}
          <motion.p 
            className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-2 ${
              isLightMode ? 'text-gray-600' : 'text-white/80'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              textShadow: isLightMode 
                ? '0 1px 2px rgba(0, 0, 0, 0.05)' 
                : '0 2px 4px rgba(0, 0, 0, 0.5)' 
            }}
          >
            AI-native boutique studio building web apps, automation, and intelligent systems 
            that move your revenue needle. Fixed scope, measurable outcomes.
          </motion.p>

          {/* Enhanced Premium CTA Buttons - Mobile Optimized */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-12 sm:mb-20 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Button 
                  size="lg"
                  className="btn-premium relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-nf-glow hover:shadow-nf-glow touch-target"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <span className="hidden sm:inline">Start Your AI Journey</span>
                    <span className="sm:hidden">Start Building</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </Link>
            <Link href="/work">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group"
              >
                <Button 
                  variant="secondary" 
                  size="lg"
                  className={`glass-nf w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 border shadow-nf-soft hover:shadow-nf-glow touch-target ${
                    isLightMode 
                      ? 'border-gray-200/60 hover:border-purple-300 text-gray-900' 
                      : 'border-white/20 hover:border-purple-400/50 text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <span className="hidden sm:inline">View Success Stories</span>
                    <span className="sm:hidden">See Portfolio</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Luxury Trust Points with Enhanced Styling - Mobile Optimized */}
          <motion.div 
            className={`card-luxury max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 backdrop-blur-xl border mobile-safe ${
              isLightMode 
                ? 'bg-white/95 border-gray-200/60 shadow-xl' 
                : 'bg-white/3 border-white/10 shadow-2xl'
            }`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {trustPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center sm:justify-center text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + (index * 0.15),
                    ease: [0.175, 0.885, 0.32, 1.275]
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    {/* Premium Checkmark with Gradient */}
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full mr-2 sm:mr-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                      isLightMode 
                        ? 'bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg' 
                        : 'bg-gradient-to-br from-purple-400 to-blue-500 shadow-nf-glow'
                    }`}>
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    {/* Enhanced Text with Luxury Typography */}
                    <span className={`text-sm sm:text-base lg:text-lg font-semibold tracking-wide transition-colors duration-300 ${
                      isLightMode 
                        ? 'text-gray-800 group-hover:text-purple-700' 
                        : 'text-white/90 group-hover:text-purple-300'
                    }`}>
                      {point}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Subtle glow effect for luxury feel */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl blur-xl opacity-50"></div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Luxury Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-20"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className={`flex flex-col items-center group cursor-pointer ${
          isLightMode ? 'text-gray-600' : 'text-white/70'
        }`}>
          <span className="text-xs mb-3 font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
              isLightMode 
                ? 'border-gray-400/60 bg-white/30 shadow-lg' 
                : 'border-white/30 bg-white/5 shadow-nf-soft'
            }`}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-500 rounded-full mt-2 shadow-sm"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating Decorative Elements */}
      {!isLightMode && (
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden" aria-hidden="true">
          {/* Floating Orbs */}
          {Array.from({length: 8}).map((_, i) => (
            <motion.div 
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-nf-g1/20 to-nf-g2/20 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.min(90, 10 + i * 12)}%`,
                top: `${20 + i * 8}%`,
                filter: 'blur(0.5px)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
          
          {/* Grid Lines */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(192,132,252,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>
        </div>
      )}
    </section>
  );
}