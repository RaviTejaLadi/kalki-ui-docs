import { cn } from '@/utils';
import React from 'react';

export const SidebarSeparator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cn('my-2 h-[0.5px] border-gray-200', className)} {...props} />
  )
);

SidebarSeparator.displayName = 'SidebarSeparator';
