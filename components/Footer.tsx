import Link from 'next/link';
import { siteConfig, SITE } from '../lib/config';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' }
];

const services = [
  { name: 'Web Development', href: '/services#web-development' },
  { name: 'AI Solutions', href: '/services#ai-solutions' },
  { name: 'Business Automation', href: '/services#automation' },
  { name: 'Web Scraping', href: '/services#scraping' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="glass border-t border-gray-200 dark:border-white/10 mt-32 bg-gray-50 dark:bg-transparent"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-8xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg transition-all duration-200"
              aria-label="NeuraForge - Home"
            >
              <div className="text-3xl md:text-4xl font-black font-display text-purple-600 dark:logo-gradient mb-8">
                NeuraForge
              </div>
            </Link>
            <p className="text-gray-600 dark:text-white/70 text-xl md:text-2xl leading-relaxed max-w-lg mb-8 font-light tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-500 dark:text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-medium tracking-wide">
              AI-native boutique studio shipping revenue-driving products quickly. 
              We turn complex ideas into profitable software for SMB founders, 
              growth teams, and technical product managers.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4" role="group" aria-labelledby="contact-heading">
              <h4 id="contact-heading" className="sr-only">Contact Information</h4>
              <p className="text-gray-500 dark:text-white/60 text-lg">
                <span className="text-gray-700 dark:text-white/80 font-bold tracking-wide">Email:</span>{' '}
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="text-purple-600 dark:text-nf-accent hover:text-purple-700 dark:hover:text-nf-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded font-semibold"
                  aria-label={`Send email to ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-gray-500 dark:text-white/60 text-lg">
                <span className="text-gray-700 dark:text-white/80 font-bold tracking-wide">WhatsApp:</span>{' '}
                <a 
                  href={`https://wa.me/${siteConfig.phone.whatsapp1.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-nf-accent hover:text-purple-700 dark:hover:text-nf-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded font-semibold"
                  aria-label={`Contact us on WhatsApp at ${siteConfig.phone.whatsapp1}`}
                >
                  {siteConfig.phone.whatsapp1}
                </a>
                {' / '}
                <a 
                  href={`https://wa.me/${siteConfig.phone.whatsapp2.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-nf-accent hover:text-purple-700 dark:hover:text-nf-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded font-semibold"
                  aria-label={`Contact us on WhatsApp at ${siteConfig.phone.whatsapp2}`}
                >
                  {siteConfig.phone.whatsapp2}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quicklinks">
            <h3 id="footer-quicklinks" className="text-gray-900 dark:text-white font-black font-display mb-8 text-2xl md:text-3xl tracking-wide">Quick Links</h3>
            <ul className="space-y-4" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded text-lg md:text-xl font-medium tracking-wide hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="text-gray-900 dark:text-white font-black font-display mb-8 text-2xl md:text-3xl tracking-wide">Services</h3>
            <ul className="space-y-4" role="list">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded text-lg md:text-xl font-medium tracking-wide hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Follow Us Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-white/10">
          <div className="text-center">
            <h3 className="text-gray-900 dark:text-white font-black font-display mb-12 text-3xl md:text-4xl tracking-wide">Follow Us</h3>
            <div className="flex justify-center items-center space-x-8 lg:space-x-10" role="group" aria-labelledby="footer-social-links">
              <span id="footer-social-links" className="sr-only">Social Media Links</span>
              
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-pink-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Follow NeuraForge on Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.988-5.366 11.988-11.99C24.005 5.367 18.641.001 12.017.001zM7.9 2.887h8.2c2.757 0 4.993 2.236 4.993 4.993v8.24c0 2.757-2.236 4.993-4.993 4.993H7.9c-2.757 0-4.993-2.236-4.993-4.993V7.88c0-2.757 2.236-4.993 4.993-4.993zm8.2 1.4H7.9c-1.984 0-3.593 1.609-3.593 3.593v8.24c0 1.984 1.609 3.593 3.593 3.593h8.2c1.984 0 3.593-1.609 3.593-3.593V7.88c0-1.984-1.609-3.593-3.593-3.593zM12 6.351c-3.138 0-5.649 2.511-5.649 5.649S8.862 17.649 12 17.649s5.649-2.511 5.649-5.649S15.138 6.351 12 6.351zm0 1.4c2.347 0 4.249 1.902 4.249 4.249S14.347 16.249 12 16.249 7.751 14.347 7.751 12 9.653 7.751 12 7.751zm5.581-3.513c0 .55-.446.996-.996.996s-.996-.446-.996-.996.446-.996.996-.996.996.446.996.996z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Follow NeuraForge on Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-gray-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Follow NeuraForge on X (Twitter)"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Connect with NeuraForge on LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Follow NeuraForge on Reddit"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-gray-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Follow NeuraForge on GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href={SITE.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-500 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-nf-bg rounded-lg p-3 transform-gpu"
                aria-label="Join NeuraForge on Telegram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 lg:gap-8">
            <div className="text-gray-600 dark:text-white/60 text-lg lg:text-xl font-medium tracking-wide">
              © {currentYear} NeuraForge. All rights reserved.
            </div>
            <div className="flex items-center gap-6 lg:gap-8">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-300 text-lg lg:text-xl font-medium tracking-wide hover:scale-105 transform-gpu"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-300 text-lg lg:text-xl font-medium tracking-wide hover:scale-105 transform-gpu"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Enhanced Privacy Notice */}
          <div className="mt-8 lg:mt-12 text-center">
            <p className="text-gray-400 dark:text-white/50 text-base lg:text-lg font-light tracking-wide leading-relaxed">
              Your privacy is important to us. We don't track or store personal data without consent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}