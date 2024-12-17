import { cn } from '@/utils';
import React from 'react';
import { SidebarFooterProps } from '../types';

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('border-t p-4', className)} {...props}>
      {children}
    </div>
  )
);
SidebarFooter.displayName = 'SidebarFooter';
