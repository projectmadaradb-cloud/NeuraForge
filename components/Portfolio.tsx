"use client";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  return (
    <SectionReveal>
      <div id="portfolio" className="py-16 sm:py-24 lg:py-32 border-t border-white/10 relative overflow-hidden mobile-safe">
        {/* Subtle luxury background elements - Mobile Optimized */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20"></div>
        <div className="absolute top-1/4 left-1/6 w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-br from-purple-400/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-gradient-to-br from-indigo-400/8 to-purple-500/8 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Featured <span className="hero-title-gradient">Work</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto font-light leading-[1.4] tracking-wide px-4">
              Selected projects showcasing AI-driven solutions and modern engineering excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
            {projects.map((p, index) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group transform-gpu transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 touch-target">
                <div className="card-luxury overflow-hidden hover:shadow-nf-glow transition-all duration-500 card-hover relative mobile-safe">
                  
                  {/* Enhanced floating particles - Optimized for mobile */}
                  <div className="particles absolute inset-0 pointer-events-none opacity-60 sm:opacity-80">
                    <div className="particle" style={{animationDelay: `${index * 0.5}s`}}></div>
                    <div className="particle" style={{animationDelay: `${index * 0.5 + 1}s`}}></div>
                    <div className="particle" style={{animationDelay: `${index * 0.5 + 2}s`}}></div>
                  </div>

                  {/* Premium corner accent - Mobile optimized */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-400/60 to-blue-500/60 rounded-full animate-rotate-slow shadow-lg" style={{animationDelay: `${index * 0.7}s`}}></div>
                  
                  {/* Luxury border glow */}
                  <div className="absolute inset-0 border border-purple-200/20 dark:border-purple-400/20 rounded-3xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-nf-glow"></div>

                  <div className="relative overflow-hidden h-40 sm:h-48 bg-black/30">
                    
                    {/* Animated Content Based on Project Type */}
                    {p.slug === 'ai-trading-bot' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Trading Chart Animation */}
                        <div className="w-full h-full relative">
                          <div className="absolute inset-4 border border-green-400/30 rounded">
                            {/* Animated Chart Lines */}
                            <svg className="w-full h-full" viewBox="0 0 200 100">
                              <path
                                d="M20,80 Q40,60 60,70 T100,50 T140,60 T180,40"
                                stroke="#10b981"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse"
                              />
                              <path
                                d="M20,90 Q40,70 60,75 T100,55 T140,65 T180,45"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse"
                                style={{animationDelay: '0.5s'}}
                              />
                            </svg>
                            {/* Price indicators */}
                            <div className="absolute top-2 left-2 text-green-400 text-xs font-mono animate-breathing">
                              BTC: $42,150 ↗
                            </div>
                            <div className="absolute top-6 left-2 text-blue-400 text-xs font-mono animate-breathing" style={{animationDelay: '1s'}}>
                              ETH: $3,200 ↗
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {p.slug === 'ecom-scraper' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Web Scraping Animation */}
                        <div className="w-full h-full relative">
                          <div className="absolute inset-4">
                            {/* Browser Window */}
                            <div className="border border-purple-400/30 rounded-lg h-full bg-gray-900/50">
                              <div className="flex items-center gap-2 p-2 border-b border-purple-400/20">
                                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                              </div>
                              {/* Content being scraped */}
                              <div className="p-2 space-y-1">
                                <div className="h-2 bg-purple-400/40 rounded animate-shimmer"></div>
                                <div className="h-2 bg-blue-400/40 rounded w-3/4 animate-shimmer" style={{animationDelay: '0.5s'}}></div>
                                <div className="h-2 bg-green-400/40 rounded w-1/2 animate-shimmer" style={{animationDelay: '1s'}}></div>
                              </div>
                              {/* Data extraction indicators */}
                              <div className="absolute bottom-2 right-2 text-xs text-purple-400 font-mono animate-breathing">
                                Extracting...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {p.slug === 'ai-resume' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* AI Brain + Resume Generation Animation */}
                        <div className="w-full h-full relative">
                          <div className="absolute inset-4">
                            
                            {/* Central AI Brain */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-12 h-12 relative">
                                {/* Brain core */}
                                <div className="w-8 h-8 bg-white/40 rounded-full animate-pulse absolute top-2 left-2 opacity-80"></div>
                                
                                {/* Neural connections */}
                                <div className="absolute inset-0">
                                  {Array.from({length: 8}).map((_, i) => (
                                    <div
                                      key={i}
                                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-breathing"
                                      style={{
                                        top: `${20 + Math.sin(i * Math.PI / 4) * 15}px`,
                                        left: `${20 + Math.cos(i * Math.PI / 4) * 15}px`,
                                        animationDelay: `${i * 0.2}s`,
                                        animationDuration: '2s'
                                      }}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Generated Resume Pages Floating Around */}
                            <div className="absolute top-2 left-2 w-16 h-20 bg-white/10 border border-cyan-400/30 rounded animate-float opacity-60" style={{animationDelay: '0s'}}>
                              <div className="p-1">
                                <div className="h-1 bg-cyan-400/60 rounded mb-1"></div>
                                <div className="h-0.5 bg-blue-400/40 rounded mb-1"></div>
                                <div className="h-0.5 bg-blue-400/40 rounded w-3/4"></div>
                              </div>
                            </div>

                            <div className="absolute top-4 right-2 w-16 h-20 bg-white/10 border border-purple-400/30 rounded animate-float opacity-70" style={{animationDelay: '1s'}}>
                              <div className="p-1">
                                <div className="h-1 bg-purple-400/60 rounded mb-1"></div>
                                <div className="h-0.5 bg-pink-400/40 rounded mb-1"></div>
                                <div className="h-0.5 bg-pink-400/40 rounded w-2/3"></div>
                              </div>
                            </div>

                            <div className="absolute bottom-2 left-4 w-16 h-20 bg-white/10 border border-green-400/30 rounded animate-float opacity-50" style={{animationDelay: '2s'}}>
                              <div className="p-1">
                                <div className="h-1 bg-green-400/60 rounded mb-1"></div>
                                <div className="h-0.5 bg-emerald-400/40 rounded mb-1"></div>
                                <div className="h-0.5 bg-emerald-400/40 rounded w-4/5"></div>
                              </div>
                            </div>

                            {/* Connecting lines from AI to resumes */}
                            <svg className="absolute inset-0 w-full h-full opacity-30">
                              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#06b6d4" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} strokeDasharray="2,2" />
                              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#a855f7" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s'}} strokeDasharray="2,2" />
                              <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#10b981" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2.5s'}} strokeDasharray="2,2" />
                            </svg>

                            {/* AI Status Indicator */}
                            <div className="absolute bottom-1 right-1 flex items-center gap-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-cyan-400 font-mono">AI ✨</span>
                            </div>

                            {/* Floating text particles */}
                            <div className="absolute top-6 left-1/2 text-xs text-cyan-400/60 font-mono animate-wave">Skills</div>
                            <div className="absolute bottom-8 right-6 text-xs text-purple-400/60 font-mono animate-wave" style={{animationDelay: '1s'}}>Experience</div>
                            <div className="absolute bottom-6 left-6 text-xs text-green-400/60 font-mono animate-wave" style={{animationDelay: '2s'}}>Education</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay gradient for hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Animated overlay patterns */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                        {Array.from({length: 48}).map((_, i) => (
                          <div 
                            key={i}
                            className="border border-purple-400/20 animate-breathing opacity-0 group-hover:opacity-100"
                            style={{
                              animationDelay: `${i * 0.02 + index * 0.1}s`,
                              animationDuration: '3s',
                              transitionDelay: `${i * 0.01}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-10 relative bg-gradient-to-br from-white/95 via-white/98 to-purple-50/90 dark:from-gray-900/95 dark:via-gray-900/98 dark:to-purple-950/30 backdrop-blur-sm">
                    {/* Luxury background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                    
                    {/* Enhanced floating background shapes - Mobile optimized */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full animate-wave shadow-lg" style={{animationDelay: `${index * 1}s`}}></div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full animate-breathing shadow-lg" style={{animationDelay: `${index * 1.2}s`}}></div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500 relative z-10 animate-float leading-tight tracking-wide" style={{animationDelay: `${index * 0.3}s`}}>
                      {p.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-white/80 mb-4 sm:mb-6 relative z-10 animate-breathing font-medium leading-relaxed" style={{animationDelay: `${index * 0.4}s`}}>
                      {p.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                      {p.tags.map((tag, tagIndex) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 text-xs sm:text-sm md:text-base rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 dark:text-purple-300 border border-purple-200/30 dark:border-purple-400/30 font-semibold animate-pulse hover:scale-105 transition-transform duration-300 tracking-wide" 
                          style={{
                            animationDelay: `${index * 0.2 + tagIndex * 0.1}s`,
                            animationDuration: '3s'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Premium progress indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-200/20 to-blue-200/20 dark:from-purple-600/20 dark:to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl">
                      <div className="h-full bg-gradient-to-r from-purple-500/60 to-blue-500/60 animate-shimmer rounded-b-3xl shadow-lg" style={{width: `${70 + index * 10}%`, animationDelay: `${index * 0.5}s`}}></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}