"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot
    const res = await fetch("/api/contact", { method: "POST", body: data });
    setStatus(res.ok ? "Message sent!" : "Something went wrong.");
    if (res.ok) form.reset();
  }

  return (
    <div id="contact" className="py-20 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-white to-blue-50/30 dark:from-purple-950/15 dark:via-gray-900 dark:to-blue-950/15"></div>
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-luxury p-12 relative overflow-hidden">
            {/* Premium background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/5 to-purple-500/8 opacity-60"></div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Let's Build Something <span className="hero-title-gradient">Great</span>
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-gray-800 dark:text-white/90 font-light leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Ready to turn your ideas into reality? Let's discuss your project and create 
                <span className="nf-gradient-text font-semibold mx-2">something extraordinary</span> together.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="hero-title-gradient">Get In Touch</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-nf-glow group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Email</div>
                  <a href="mailto:hello@neuraforge.tech" className="text-xl font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                    hello@neuraforge.tech
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-nf-glow group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">WhatsApp</div>
                  <div className="space-y-2">
                    <a href="https://wa.me/855763860322" target="_blank" className="block text-xl font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                      +855 763 860 322
                    </a>
                    <a href="https://wa.me/917305427957" target="_blank" className="block text-xl font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                      +91 730 542 7957
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-luxury p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="nf-gradient-text">Quick Response Time</span>
                </h4>
                <p className="text-lg text-gray-800 dark:text-white/90 leading-relaxed font-medium">
                  Most inquiries receive a response within 
                  <span className="nf-gradient-text font-semibold mx-1">24 hours</span>. 
                  For urgent projects, WhatsApp is the fastest way to reach me.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="card-luxury p-10 space-y-6 relative overflow-hidden">
              {/* Premium form background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/3 to-purple-500/5 opacity-70"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Start Your <span className="nf-gradient-text">Project</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Fill out the form below and I'll get back to you soon</p>
                </div>
                
                <input 
                  name="name" 
                  required 
                  placeholder="Your Full Name" 
                  className="input-nf w-full text-lg font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                />
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="Email Address" 
                  className="input-nf w-full text-lg font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                />
                <input 
                  name="service" 
                  placeholder="Service Interest (AI, Web Development, etc.)" 
                  className="input-nf w-full text-lg font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400" 
                />
                <textarea 
                  name="message" 
                  required 
                  rows={5} 
                  placeholder="Tell me about your project, timeline, and budget range. The more details you provide, the better I can help you..." 
                  className="input-nf w-full text-lg font-medium resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                ></textarea>
                
                <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                
                <button type="submit" className="btn-premium w-full py-5 text-xl font-semibold shadow-nf-glow hover:shadow-nf-glow relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
                
                {status && (
                  <motion.p 
                    className="text-center text-lg font-semibold nf-gradient-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}