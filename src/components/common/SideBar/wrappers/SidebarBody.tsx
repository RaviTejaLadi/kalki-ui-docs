import { cn } from '@/utils';
import React from 'react';
import { SidebarContentProps } from '../interface';

export const SidebarBody = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('overflow-y-auto mb-16', className)} {...props}>
      {children}
    </div>
  )
);
SidebarBody.displayName = 'SidebarBody';
