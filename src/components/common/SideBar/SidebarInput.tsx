import { cn } from '@/utils';
import React from 'react';

export const SidebarInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn('w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2', className)}
      {...props}
    />
  )
);
SidebarInput.displayName = 'SidebarInput';
