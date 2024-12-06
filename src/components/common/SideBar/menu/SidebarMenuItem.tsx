import React from 'react';
import { SidebarMenuItemProps } from '../interface';
import { cn } from '@/utils';
import { useSidebar } from '../context';
import Link from '../../Link';

export const SidebarMenuItem = React.forwardRef<HTMLAnchorElement, SidebarMenuItemProps>(
  ({ className, icon, active, children, to, ...props }, ref) => {
    const { expanded } = useSidebar();

    return (
      <Link
        to={to}
        ref={ref}
        className={cn(
          'flex items-center gap-4 rounded-md text-xs px-2 py-1.5 mb-2',
          'text-muted-foreground font-medium hover:bg-gray-100 hover:text-muted-foreground',
          active && 'bg-gray-100 text-foreground',
          !expanded && 'justify-center',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {icon}
          <span className="text-xs tracking-wide">{expanded && children}</span>
        </div>
      </Link>
    );
  }
);
SidebarMenuItem.displayName = 'SidebarMenuItem';
