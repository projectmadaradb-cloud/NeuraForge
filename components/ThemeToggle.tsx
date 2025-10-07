"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="h-9 w-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
    );
  }

  const cycleTheme = () => {
    const themeOrder = ["light", "dark", "system"];
    const currentIndex = themeOrder.indexOf(theme || "system");
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    }
    
    if (resolvedTheme === "dark") {
      return <Moon className="h-4 w-4" />;
    }
    
    return <Sun className="h-4 w-4" />;
  };

  const getLabel = () => {
    if (theme === "system") return "System theme";
    return theme === "dark" ? "Dark mode" : "Light mode";
  };

  return (
    <button
      onClick={cycleTheme}
      className="
        relative h-9 w-9 rounded-lg border border-gray-200 bg-white text-gray-700
        hover:bg-gray-50 hover:border-gray-300
        dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 
        dark:hover:bg-gray-700 dark:hover:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-800
        transition-all duration-200 ease-in-out
        flex items-center justify-center
        group
      "
      title={getLabel()}
      aria-label={getLabel()}
    >
      <span className="transform transition-transform duration-200 group-hover:scale-110">
        {getIcon()}
      </span>
      
      {/* Theme indicator dot */}
      <span 
        className={`
          absolute -top-1 -right-1 h-2 w-2 rounded-full transition-colors duration-200
          ${theme === "system" 
            ? "bg-blue-500" 
            : theme === "dark" 
              ? "bg-purple-500" 
              : "bg-yellow-500"
          }
        `} 
      />
    </button>
  );
}