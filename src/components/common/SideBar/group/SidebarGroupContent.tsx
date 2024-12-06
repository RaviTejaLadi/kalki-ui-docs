import React from 'react';
import { SidebarProps } from '../interface';
import { cn } from '@/utils';

export const SidebarGroupContent = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  )
);
SidebarGroupContent.displayName = 'SidebarGroupContent';
