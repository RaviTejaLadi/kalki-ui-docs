import React from 'react';
import { cn } from '@/utils';
import { useSidebar } from '../context';
import { SidebarHeaderProps } from '../types';
import { SidebarTrigger } from '../SidebarTrigger';


export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, showTrigger = false, ...props }, ref) => {
    const { expanded } = useSidebar();
    return (
      <div ref={ref} className={cn('flex h-16 items-center sticky px-4', className)} {...props}>
        {showTrigger && <SidebarTrigger />}
        {expanded && children}
      </div>
    );
  }
);
SidebarHeader.displayName = 'SidebarHeader';
