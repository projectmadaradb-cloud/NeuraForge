"use client";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <SectionReveal>
      <div id="about" className="py-20 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-12 bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
            <h2 className="heading-lg mb-6 text-gray-900 dark:text-white">About NeuraForge</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="body-lg">
                NeuraForge is an AI-first engineering studio. I turn complex ideas into shipping software—fast.
                From web & mobile apps to resilient scrapers, trading bots, and autonomous agents, the focus is clear:
                build systems that create measurable business value.
              </p>
              
              <p className="body-base">
                Every project starts with understanding your goals, not just requirements. Whether you need a 
                high-performance web application, an intelligent automation system, or a data pipeline that 
                scales—I architect solutions that work reliably in production.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="relative">
                  {/* Simple border with no background */}
                  <div className="absolute inset-0 border border-gray-200 dark:border-white/10 rounded-xl"></div>
                  
                  <div className="relative z-10 p-6">
                    <h3 className="heading-sm mb-4 text-purple-600 dark:text-gradient">Technical Excellence</h3>
                    <ul className="space-y-2 caption">
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">Modern frameworks & best practices</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">Performance-first architecture</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">Comprehensive testing & monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Simple border with no background */}
                  <div className="absolute inset-0 border border-gray-200 dark:border-white/10 rounded-xl"></div>
                  
                  <div className="relative z-10 p-6">
                    <h3 className="heading-sm mb-4 text-gradient">Business Impact</h3>
                    <ul className="space-y-2 caption">
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="group-hover:text-purple-300 transition-colors duration-300">ROI-focused development</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="group-hover:text-purple-300 transition-colors duration-300">Scalable, maintainable systems</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="group-hover:text-purple-300 transition-colors duration-300">Clear documentation & handoff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}