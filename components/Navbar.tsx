"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-gray-200/20 bg-white/30 dark:border-white/10 dark:bg-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden md:flex gap-6 caption items-center font-medium">
          <Link href="/services" className="text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors animate-nav-item">Services</Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors animate-nav-item">Portfolio</Link>
          <Link href="/research" className="text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors animate-nav-item">Research Assistant</Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors animate-nav-item">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors animate-nav-item">Contact</Link>
          <Link href="/contact" className="btn-gradient">Work With Me</Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 border border-gray-200 dark:border-white/20 rounded-lg text-gray-700 dark:text-white" 
            aria-expanded={open} 
            aria-controls="mnav"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div id="mnav" className="md:hidden px-4 py-3 space-y-2 bg-white/60 dark:bg-black/60 border-t border-gray-200/20 dark:border-white/10">
          <Link href="/services" onClick={() => setOpen(false)} className="block caption font-medium text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors">Services</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)} className="block caption font-medium text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors">Portfolio</Link>
          <Link href="/research" onClick={() => setOpen(false)} className="block caption font-medium text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors">Research Assistant</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block caption font-medium text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block caption font-medium text-gray-700 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/contact" className="btn-gradient inline-block" onClick={() => setOpen(false)}>Work With Me</Link>
        </div>
      )}
    </header>
  );
}