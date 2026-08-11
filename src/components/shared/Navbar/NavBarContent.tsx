import { forwardRef } from 'react';
import { NavBarContentProps } from './interface';
import { cn } from '@/utils';

export const NavBarContent = forwardRef<HTMLDivElement, NavBarContentProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn('flex space-x-4', className)}>
      {children}
    </div>
  );
});
