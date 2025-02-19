import { forwardRef } from 'react';
import { NavMenuItemContentProps } from './interface';
import { cn } from '@/utils';

export const NavMenuItemContent = forwardRef<HTMLDivElement, NavMenuItemContentProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn('bg-background dark:bg-background', className)}>
      {children}
    </div>
  )
);
NavMenuItemContent.displayName="NavMenuItemContent"