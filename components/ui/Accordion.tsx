"use client";

import { useState, useRef, ReactNode } from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export function AccordionItem({ 
  id, 
  title, 
  children, 
  isOpen, 
  onToggle, 
  className = '' 
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`border border-white/10 rounded-lg overflow-hidden ${className}`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-transparent hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-trigger-${id}`}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white font-display">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-gray-600 dark:text-white/60 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        ref={contentRef}
        id={`accordion-content-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        aria-labelledby={`accordion-trigger-${id}`}
        role="region"
      >
        <div className="p-4 pt-0 text-gray-700 dark:text-white/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ 
  items, 
  allowMultiple = false, 
  className = '' 
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      
      return newSet;
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const triggers = document.querySelectorAll('[id^="accordion-trigger-"]');
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % triggers.length;
        (triggers[nextIndex] as HTMLElement)?.focus();
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (index - 1 + triggers.length) % triggers.length;
        (triggers[prevIndex] as HTMLElement)?.focus();
        break;
        
      case 'Home':
        event.preventDefault();
        (triggers[0] as HTMLElement)?.focus();
        break;
        
      case 'End':
        event.preventDefault();
        (triggers[triggers.length - 1] as HTMLElement)?.focus();
        break;
    }
  };

  return (
    <div 
      className={`space-y-4 ${className}`}
      role="group"
      aria-label="Accordion"
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          <AccordionItem
            id={item.id}
            title={item.title}
            isOpen={openItems.has(item.id)}
            onToggle={() => handleToggle(item.id)}
          >
            {item.content}
          </AccordionItem>
        </div>
      ))}
    </div>
  );
}

export default Accordion;