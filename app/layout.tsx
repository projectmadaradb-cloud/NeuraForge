import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlausibleProvider from "../components/PlausibleProvider";

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
  keywords: ["AI development", "web development", "automation", "trading bots", "AI agents", "custom software", "NeuraForge"],
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
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://plausible.io" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-nf.svg" as="image" type="image/svg+xml" />
        
        <PlausibleProvider />
      </head>
      <body className="bg-nf-bg text-white font-sans antialiased min-h-screen">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}