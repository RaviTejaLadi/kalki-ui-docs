import React from 'react';
import { SidebarMenuProps } from '../types';
import { cn } from '@/utils';

export const SidebarMenu = React.forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-1 p-2', className)} {...props}>
      {children}
    </div>
  )
);
SidebarMenu.displayName = 'SidebarMenu';
