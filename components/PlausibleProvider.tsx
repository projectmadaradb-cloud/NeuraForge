"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export default function PlausibleProvider() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const handleLoad = () => {
    setIsLoaded(true);
    // Set up custom event tracking if needed
    if (typeof window !== 'undefined' && window.plausible) {
      // Analytics is ready
      console.log('Plausible Analytics loaded successfully');
    }
  };

  const handleError = () => {
    console.warn('Failed to load Plausible Analytics');
  };

  return (
    <>
      <Script
        defer
        data-domain="neuraforge.tech"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Preconnect to Plausible for performance */}
      <link rel="preconnect" href="https://plausible.io" />
      <link rel="dns-prefetch" href="https://plausible.io" />
    </>
  );
}