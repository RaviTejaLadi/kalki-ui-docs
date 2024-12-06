import { cn } from '@/utils';
import React from 'react';
import { SidebarGroupProps } from '../interface';

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-2 p-2', className)} {...props}>
      {children}
    </div>
  )
);
SidebarGroup.displayName = 'SidebarGroup';
