import { cn } from '@/utils';
import React from 'react';

export const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-200/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
SidebarGroupAction.displayName = 'SidebarGroupAction';
