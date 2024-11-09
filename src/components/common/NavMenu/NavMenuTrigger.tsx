import { forwardRef } from 'react';
import { NavMenuTriggerProps } from './interface';
import { cn } from '@/utils';

export const NavMenuTrigger = forwardRef<HTMLButtonElement, NavMenuTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <button ref={ref} className={cn(className)} {...props}>
      {children}
    </button>
  )
);
