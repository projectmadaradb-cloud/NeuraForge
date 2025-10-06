import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const cardVariants = cva(
  'rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        glass: 'glass-nf hover:shadow-nf-glow',
        solid: 'bg-white/5 border border-white/10 hover:bg-white/10',
        elevated: 'bg-white/10 shadow-lg hover:shadow-xl',
        gradient: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20'
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10'
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1',
        glow: 'hover:shadow-nf-glow',
        scale: 'hover:scale-105'
      }
    },
    defaultVariants: {
      variant: 'glass',
      padding: 'md',
      hover: 'glow'
    }
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };
export type { CardProps };