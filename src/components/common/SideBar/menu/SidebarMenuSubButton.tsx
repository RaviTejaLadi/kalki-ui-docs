import { cn } from '@/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { SidebarMenuSubButtonProps } from '../types';

export const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, icon, children, isOpen, onOpenChange, ...props }, ref) => {
    return (
        <button
          ref={ref}
          className={cn(
            'flex w-full items-center justify-between rounded-md px-2 py-1.5 font-medium  text-muted-foreground hover:bg-gray-100',
            className
          )}
          onClick={() => onOpenChange?.(!isOpen)}
          {...props}
        >
          <div className="flex items-center gap-4">
            {icon}
            <span className="text-xs tracking-wide ">{children}</span>
          </div>
          <ChevronRight className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-90')} />
        </button>
    );
  }
);
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';
