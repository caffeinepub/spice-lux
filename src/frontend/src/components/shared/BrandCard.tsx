import { type ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BrandCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function BrandCard({ children, className, hover = true }: BrandCardProps) {
  return (
    <Card
      className={cn(
        'bg-black border-2 border-gold/30 rounded-none overflow-hidden',
        hover && 'transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20',
        className
      )}
    >
      {children}
    </Card>
  );
}
