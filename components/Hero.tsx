'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const trustPoints = [
  'Fixed-fee delivery',
  'Ships in weeks, not months', 
  'Revenue-focused outcomes'
];

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Handle video load events
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
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {!videoError && (
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
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Static Background */}
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

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-5" aria-hidden="true" />

      {/* Dark Gradient Overlay for Text Readability */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background: `
            linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)
          `
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
          >
            Ship Revenue-Driving{' '}
            <span className="hero-title-gradient">
              Software Fast
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Turning Data into Power. Code into Profits.
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            AI-native boutique studio building web apps, automation, and intelligent systems 
            that move your revenue needle. Fixed scope, measurable outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button 
                size="lg"
                className="w-full sm:w-auto shadow-glow hover:shadow-glow-strong backdrop-blur-sm bg-purple-600/90 hover:bg-purple-600 border-purple-500/50"
              >
                Get Your Proposal
              </Button>
            </Link>
            <Link href="/work">
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/30 text-white"
              >
                See Real Results
              </Button>
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div 
            className="glass rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-md bg-white/5 border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {trustPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" 
                      aria-hidden="true" 
                    />
                    <span 
                      className="text-white/90 font-medium text-sm sm:text-base"
                      style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
                    >
                      {point}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-15" aria-hidden="true">
        {Array.from({length: 6}).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
