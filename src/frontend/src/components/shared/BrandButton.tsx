import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type ComponentPropsWithoutRef } from 'react';

interface BrandButtonProps extends Omit<ComponentPropsWithoutRef<typeof Button>, 'variant'> {
  variant?: 'primary' | 'gold' | 'outline';
}

export function BrandButton({ variant = 'primary', className, children, ...props }: BrandButtonProps) {
  const variantStyles = {
    primary: 'bg-red hover:bg-red/90 text-cream',
    gold: 'bg-gold hover:bg-gold/90 text-black font-semibold',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
  };

  return (
    <Button
      className={cn(
        'px-6 py-3 rounded-none text-base font-medium transition-all duration-300',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
