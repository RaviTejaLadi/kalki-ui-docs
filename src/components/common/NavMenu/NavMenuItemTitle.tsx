import { forwardRef } from 'react';
import { NavMenuItemTitleProps } from './interface';
import { cn } from '@/utils';

export const NavMenuItemTitle = forwardRef<HTMLSpanElement, NavMenuItemTitleProps>(({ children, className }, ref) => (
  <span ref={ref} className={cn(className)}>
    {children}
  </span>
));
NavMenuItemTitle.displayName="NavMenuItemTitle"