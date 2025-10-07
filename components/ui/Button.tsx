import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary: 'btn-premium text-white shadow-nf-glow hover:shadow-nf-glow',
        secondary: 'glass-nf text-gray-900 dark:text-white border border-gray-200/60 dark:border-white/20 hover:border-purple-300 dark:hover:border-purple-400/50 shadow-nf-soft hover:shadow-nf-glow',
        outline: 'border-2 border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-nf-glow transition-all duration-300',
        ghost: 'text-gray-700 dark:text-white/80 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20',
        luxury: 'bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white shadow-nf-glow hover:shadow-nf-glow border border-white/20 hover:scale-105 transform-gpu'
      },
      size: {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-9 py-4.5 text-lg',
        xl: 'px-12 py-6 text-xl'
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false
    }
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, loading, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {/* Luxury shimmer effect for primary variants */}
        {(variant === 'primary' || variant === 'luxury') && (
          <div className="absolute inset-0 -top-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        )}
        
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        <span className="relative z-10">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };