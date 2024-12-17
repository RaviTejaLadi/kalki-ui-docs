import React from 'react';
import { SelectSeparatorProps } from './interfaces';
import { cn } from '@/utils';

export const SelectSeparator = React.forwardRef<HTMLHRElement, SelectSeparatorProps>(({ className, ...props }, ref) => {
  return <hr ref={ref} className={cn('-mx-1 my-1 h-[0.5px] bg-muted', className)} {...props} />;
});
SelectSeparator.displayName = 'SelectSeparator';
