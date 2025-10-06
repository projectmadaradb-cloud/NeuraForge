"use client";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  return (
    <SectionReveal>
      <div id="portfolio" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Work</h2>
            <p className="body-lg text-gray-400 max-w-2xl mx-auto">
              Selected projects showcasing AI-driven solutions and modern engineering practices.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, index) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group">
                <div className="glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 card-hover relative">
                  
                  {/* Floating Particles for each card */}
                  <div className="particles absolute inset-0 pointer-events-none">
                    <div className="particle" style={{animationDelay: `${index * 0.5}s`}}></div>
                    <div className="particle" style={{animationDelay: `${index * 0.5 + 1}s`}}></div>
                    <div className="particle" style={{animationDelay: `${index * 0.5 + 2}s`}}></div>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-rotate-slow opacity-60" style={{animationDelay: `${index * 0.7}s`}}></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative overflow-hidden h-48 bg-black/30">
                    
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
                  
                  <div className="p-6 relative">
                    {/* Floating background shapes */}
                    <div className="absolute top-2 left-2 w-8 h-8 bg-white/10 rounded-full animate-wave opacity-50" style={{animationDelay: `${index * 1}s`}}></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-white/10 rounded-full animate-breathing opacity-40" style={{animationDelay: `${index * 1.2}s`}}></div>
                    
                    <h3 className="heading-sm mb-2 group-hover:text-gradient transition relative z-10 animate-float" style={{animationDelay: `${index * 0.3}s`}}>{p.title}</h3>
                    <p className="body-base text-white/70 mb-4 relative z-10 animate-breathing" style={{animationDelay: `${index * 0.4}s`}}>{p.excerpt}</p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {p.tags.map((tag, tagIndex) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 caption rounded-full bg-purple-600/20 text-purple-300 border border-purple-600/30 font-medium animate-pulse" 
                          style={{
                            animationDelay: `${index * 0.2 + tagIndex * 0.1}s`,
                            animationDuration: '3s'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Animated progress indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-full bg-white/30 animate-shimmer rounded-full" style={{width: `${70 + index * 10}%`, animationDelay: `${index * 0.5}s`}}></div>
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