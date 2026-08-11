import { PanelLeft } from 'lucide-react';
import React from 'react';
import { cn } from '@/utils';
import { useSidebar } from './context';

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { setExpanded, expanded } = useSidebar();

    return (
      <button
        ref={ref}
        className={cn('rounded-sm p-1 hover:bg-gray-100', className)}
        onClick={() => setExpanded(!expanded)}
        {...props}
      >
        <PanelLeft className="size-4 text-muted-foreground" />
      </button>
    );
  }
);
SidebarTrigger.displayName = 'SidebarTrigger';
