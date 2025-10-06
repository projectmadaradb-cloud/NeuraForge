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
    <div id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Simple border with no background */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
          
          <div className="relative z-10 py-8">
            <motion.h2 
              className="heading-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's Build Something Great
            </motion.h2>
            <motion.p 
              className="body-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ready to turn your ideas into reality? Let's discuss your project.
            </motion.p>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="heading-sm mb-6 text-gradient">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400">📧</span>
                </div>
                <div>
                  <div className="caption text-gray-400">Email</div>
                  <a href="mailto:hello@neuraforge.tech" className="text-white hover:text-white/80 transition font-medium">
                    hello@neuraforge.tech
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400">💬</span>
                </div>
                <div>
                  <div className="caption text-gray-400">WhatsApp</div>
                  <div className="space-y-1">
                    <a href="https://wa.me/855763860322" target="_blank" className="block text-white hover:text-purple-400 transition font-medium">
                      +855763860322
                    </a>
                    <a href="https://wa.me/917305427957" target="_blank" className="block text-white hover:text-purple-400 transition font-medium">
                      +917305427957
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 border border-white/10 rounded-xl">
              <h4 className="heading-sm mb-2">Quick Response Time</h4>
              <p className="body-base text-gray-400">
                Most inquiries receive a response within 24 hours. For urgent projects, 
                WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
              <input 
                name="name" 
                required 
                placeholder="Your Name" 
                className="w-full p-4 rounded-lg bg-white/5 border border-white/15 focus:border-purple-400/60 focus:outline-none transition body-base" 
              />
              <input 
                name="email" 
                type="email" 
                required 
                placeholder="Email Address" 
                className="w-full p-4 rounded-lg bg-white/5 border border-white/15 focus:border-purple-400/60 focus:outline-none transition body-base" 
              />
              <input 
                name="service" 
                placeholder="Service Interest (optional)" 
                className="w-full p-4 rounded-lg bg-white/5 border border-white/15 focus:border-purple-400/60 focus:outline-none transition body-base" 
              />
              <textarea 
                name="message" 
                required 
                rows={4} 
                placeholder="Tell me about your project, timeline, and budget range..." 
                className="w-full p-4 rounded-lg bg-white/5 border border-white/15 focus:border-purple-400/60 focus:outline-none transition resize-none body-base"
              ></textarea>
              <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <button type="submit" className="btn-gradient w-full">
                Send Message
              </button>
              {status && <p className="caption mt-2 text-purple-400 font-medium">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}