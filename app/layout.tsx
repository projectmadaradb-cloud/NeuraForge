import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlausibleProvider from "../components/PlausibleProvider";
import ThemeProvider from "../providers/ThemeProvider";

export const dynamic = 'force-dynamic';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://neuraforge.tech'),
  title: {
    default: "NeuraForge — Turning Data into Power. Code into Profits.",
    template: "%s | NeuraForge"
  },
  description: "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
  keywords: ["AI development", "web development", "automation", "trading bots", "AI agents", "custom software", "NeuraForge", "machine learning", "web scraping", "business automation"],
  authors: [{ name: "NeuraForge" }],
  creator: "NeuraForge",
  publisher: "NeuraForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NeuraForge — Turning Data into Power. Code into Profits.",
    description: "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
    url: "https://neuraforge.tech",
    siteName: "NeuraForge",
    images: [
      {
        url: "https://neuraforge.tech/og.png",
        width: 1200,
        height: 630,
        alt: "NeuraForge - AI-native boutique studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuraForge — Turning Data into Power. Code into Profits.",
    description: "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
    images: ["https://neuraforge.tech/og.png"],
    creator: "@neuraforge"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your actual verification code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://plausible.io" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-nf.svg" as="image" type="image/svg+xml" />
        
        {/* Mobile viewport fix for horizontal scroll */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NeuraForge",
              "url": "https://neuraforge.tech",
              "logo": "https://neuraforge.tech/logo.png",
              "description": "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "NeuraForge Founder"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+855763860322",
                "contactType": "Customer Service",
                "email": "hello@neuraforge.tech"
              },
              "sameAs": [
                "https://github.com/neuraforge",
                "https://linkedin.com/company/neuraforge"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "NeuraForge Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Modern web applications and websites"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Solutions",
                      "description": "Custom AI agents and machine learning solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Automation",
                      "description": "Workflow automation and process optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trading Bots",
                      "description": "Automated trading systems and financial tools"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <PlausibleProvider />
      </head>
      <body className="bg-white dark:bg-nf-bg text-gray-900 dark:text-white font-sans antialiased min-h-screen overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen overflow-x-hidden bg-white dark:bg-nf-bg">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}