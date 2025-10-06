"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass border-b border-white/10 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <nav 
          className="max-w-7xl mx-auto px-4 py-3"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg rounded-lg transition-all duration-200"
              onClick={closeMenu}
              aria-label="NeuraForge - Home"
            >
              <div className="text-3xl lg:text-4xl font-bold font-display logo-gradient">
                NeuraForge
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link transition-all duration-200 px-3 py-2 rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg ${
                      isActive 
                        ? 'text-nf-primary bg-nf-primary/10' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="md"
                >
                  Start a Project
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg transition-all duration-200"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
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
          <div className="absolute inset-0 bg-nf-bg/95 backdrop-blur-md" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div 
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="glass h-full border-l border-white/10 backdrop-blur-md">
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="ml-auto p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg ${
                      isActive 
                        ? 'text-nf-primary bg-nf-primary/10 glow-soft' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link href="/contact" onClick={closeMenu}>
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                >
                  Start a Project
                </Button>
              </Link>
              
              {/* Contact Info */}
              <div className="mt-6 text-center text-sm text-white/60">
                <p>Ready to get started?</p>
                <p className="mt-1">
                  <a 
                    href="mailto:hello@neuraforge.tech" 
                    className="text-nf-accent hover:text-nf-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg rounded"
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