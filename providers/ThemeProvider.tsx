"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="neuraforge-theme"
      themes={['light', 'dark', 'system']}
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  );
}