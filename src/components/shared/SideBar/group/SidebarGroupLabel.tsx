import React from 'react';
import { SidebarGroupProps } from '../types';
import { cn } from '@/utils';
import { useSidebar } from '../context';

export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, children, ...props }, ref) => {
    const { expanded } = useSidebar();

    if (!expanded) return null;

    return (
      <div
        ref={ref}
        className={cn('px-2 py-1.5 text-[.6rem] font-medium text-muted-foreground tracking-wide', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SidebarGroupLabel.displayName = 'SidebarGroupLabel';
