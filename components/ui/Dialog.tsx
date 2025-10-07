"use client";

import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Dialog({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = '',
  size = 'md'
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Size variants
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the dialog
      setTimeout(() => {
        dialogRef.current?.focus();
      }, 100);
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      
      // Return focus to previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    const handleTabKey = (event: KeyboardEvent) => {
      if (!isOpen || event.key !== 'Tab') return;

      const focusableElements = dialogRef.current?.querySelectorAll(
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

    if (isOpen) {
      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-nf-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className={`
          relative w-full ${sizeClasses[size]} glass rounded-2xl border border-white/10
          transform transition-all duration-300 ease-out
          ${className}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 
            id="dialog-title" 
            className="text-xl font-semibold font-display text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Close dialog"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-700 dark:text-white/80">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Dialog;