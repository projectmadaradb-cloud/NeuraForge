"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Link href="/" className="flex items-center gap-3 font-display font-semibold text-lg">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        <span className="font-bold whitespace-nowrap">NeuraForge</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-3 font-display font-semibold text-lg">
      {/* Light Mode Logo - Solid Black */}
      <span className="block dark:hidden">
        <svg width="32" height="32" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" className="h-8 w-8">
          <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="#111" strokeWidth="14"/>
          <path d="M64 168V72l64 64V72" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="14"/>
          <path d="M128 168h48M176 120h-32" fill="none" stroke="#111" strokeLinecap="round" strokeWidth="14"/>
          <circle cx="176" cy="168" r="7" fill="#111"/>
          <circle cx="176" cy="120" r="7" fill="#111"/>
        </svg>
      </span>

      {/* Dark Mode Logo - Gradient Stroke */}
      <span className="hidden dark:block">
        <svg width="32" height="32" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" className="h-8 w-8">
          <defs>
            <linearGradient id="nf2-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A855F7"/>
              <stop offset="100%" stopColor="#6D28D9"/>
            </linearGradient>
          </defs>
          <rect x="16" y="16" width="208" height="208" rx="28" fill="none" stroke="url(#nf2-g)" strokeWidth="14"/>
          <path d="M64 168V72l64 64V72" fill="none" stroke="url(#nf2-g)" strokeLinecap="round" strokeWidth="14"/>
          <path d="M128 168h48M176 120h-32" fill="none" stroke="url(#nf2-g)" strokeLinecap="round" strokeWidth="14"/>
          <circle cx="176" cy="168" r="7" fill="url(#nf2-g)"/>
          <circle cx="176" cy="120" r="7" fill="url(#nf2-g)"/>
        </svg>
      </span>

      <span className="font-bold whitespace-nowrap text-gray-900 dark:text-white">
        <span className="text-purple-600 dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-400 dark:bg-clip-text dark:text-transparent">
          Neura
        </span>
        Forge
      </span>
    </Link>
  );
}