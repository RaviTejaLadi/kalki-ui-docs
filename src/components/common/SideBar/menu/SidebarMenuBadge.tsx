import React from 'react';
import { SidebarMenuBadgeProps } from '../interface';
import { cn } from '@/utils';
import { useSidebar } from '../context';

export const SidebarMenuBadge = React.forwardRef<HTMLSpanElement, SidebarMenuBadgeProps>(
  ({ className, children, ...props }, ref) => {
    const { expanded } = useSidebar();

    if (!expanded) return null;

    return (
      <span
        ref={ref}
        className={cn('ml-auto rounded-sm border px-1 py-0.2 text-[.6rem]', 'font-medium', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
SidebarMenuBadge.displayName = 'SidebarMenuBadge';
