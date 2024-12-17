import React from 'react';
import { SidebarMenuSubItemProps } from '../types';
import { cn } from '@/utils';
import Link from '../../Link';

export const SidebarMenuSubItem = React.forwardRef<HTMLAnchorElement, SidebarMenuSubItemProps>(
  ({ className, isOpen, children, to, icon, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <Link
        to={to}
        ref={ref}
        className={cn(
          'flex items-center rounded-md py-1.5 pl-6 pr-2 text-xs text-muted-foreground hover:bg-gray-100 hover:text-foreground',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {icon}
          <span className="text-xs tracking-wide">{children}</span>
        </div>
      </Link>
    );
  }
);
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';
