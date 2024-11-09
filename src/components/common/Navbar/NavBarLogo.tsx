import { forwardRef } from 'react';
import { NavBarLogoProps } from './interface';
import { cn } from '@/utils';

export const NavBarLogo = forwardRef<HTMLDivElement, NavBarLogoProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn('text-xl font-bold', className)}>
      {children}
    </div>
  );
});
