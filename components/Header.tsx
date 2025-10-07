"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';
import { SITE } from '../lib/config';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the close button when menu opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      // Return focus to menu button when menu closes
      if (menuButtonRef.current) {
        menuButtonRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  // Trap focus within mobile menu
  useEffect(() => {
    const handleTabKey = (event: KeyboardEvent) => {
      if (!isMenuOpen || event.key !== 'Tab') return;

      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'glass-header shadow-nf-soft border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <nav 
          className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with Luxury Styling - Mobile Optimized */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 sm:space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-2 transition-all duration-300 group hover:bg-white/5 touch-target"
              onClick={closeMenu}
              aria-label="NeuraForge - Home"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-sans hero-title-gradient group-hover:scale-105 transition-transform duration-300 tracking-tight">
                NeuraForge
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link-premium px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent backdrop-blur-sm ${
                      isActive 
                        ? 'text-purple-600 dark:text-purple-400 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 shadow-nf-soft border border-purple-200/50 dark:border-purple-400/20' 
                        : 'text-gray-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20 border border-transparent hover:border-purple-200/30 dark:hover:border-purple-400/20'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Enhanced Premium CTA */}
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-6 py-3 rounded-xl text-white text-sm font-semibold shadow-nf-glow hover:shadow-nf-glow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative overflow-hidden group"
                aria-label="Book a discovery call with NeuraForge"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Call
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l4 4 4-4m0 6H8" />
                  </svg>
                </span>
              </a>

              {/* Enhanced Social Icons */}
              <div className="flex items-center space-x-3 pl-4 border-l border-white/20 dark:border-white/10">
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-white/70 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 p-2.5 rounded-xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 dark:hover:from-pink-900/20 dark:hover:to-purple-900/20 hover:shadow-nf-soft transform hover:scale-110"
                  aria-label="Follow NeuraForge on Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.988-5.366 11.988-11.99C24.005 5.367 18.641.001 12.017.001zM7.9 2.887h8.2c2.757 0 4.993 2.236 4.993 4.993v8.24c0 2.757-2.236 4.993-4.993 4.993H7.9c-2.757 0-4.993-2.236-4.993-4.993V7.88c0-2.757 2.236-4.993 4.993-4.993zm8.2 1.4H7.9c-1.984 0-3.593 1.609-3.593 3.593v8.24c0 1.984 1.609 3.593 3.593 3.593h8.2c1.984 0 3.593-1.609 3.593-3.593V7.88c0-1.984-1.609-3.593-3.593-3.593zM12 6.351c-3.138 0-5.649 2.511-5.649 5.649S8.862 17.649 12 17.649s5.649-2.511 5.649-5.649S15.138 6.351 12 6.351zm0 1.4c2.347 0 4.249 1.902 4.249 4.249S14.347 16.249 12 16.249 7.751 14.347 7.751 12 9.653 7.751 12 7.751zm5.581-3.513c0 .55-.446.996-.996.996s-.996-.446-.996-.996.446-.996.996-.996.996.446.996.996z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-blue-600 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Follow NeuraForge on Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Follow NeuraForge on X (Twitter)"
                  title="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-blue-700 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Connect with NeuraForge on LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-orange-600 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Follow NeuraForge on Reddit"
                  title="Reddit"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Follow NeuraForge on GitHub"
                  title="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href={SITE.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-white/60 hover:text-blue-500 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  aria-label="Join NeuraForge on Telegram"
                  title="Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-white/10"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-out top-3 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
          role="presentation"
        >
          <div className="absolute inset-0 bg-nf-bg/90 backdrop-blur-xl" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div 
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm transform transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="nf-panel h-full border-l border-white/10 backdrop-blur-xl">
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="ml-auto p-3 rounded-xl text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-300 border border-gray-200 dark:border-white/10"
                aria-label="Close navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transform hover:scale-105 ${
                      isActive 
                        ? 'nf-gradient-text bg-white/5 border border-nf-g1/20 shadow-lg shadow-nf-g1/10' 
                        : 'text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 border border-transparent'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'float-gentle 2s ease-in-out infinite' : 'none'
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-center rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-3 shadow-lg hover:opacity-90 transition-opacity text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent mb-6"
                aria-label="Book a discovery call with NeuraForge"
              >
                Book a Call
              </a>
              
              {/* Contact Info */}
              <div className="text-center text-sm text-gray-600 dark:text-white/60 space-y-2">
                <p className="font-medium">Ready to get started?</p>
                <p>
                  <a 
                    href="mailto:hello@neuraforge.tech" 
                    className="nf-gradient-text hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded font-medium"
                    aria-label="Email NeuraForge at hello@neuraforge.tech"
                  >
                    hello@neuraforge.tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}