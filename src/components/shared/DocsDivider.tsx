import { cn } from '@/utils';
import React from 'react';

/** Local page divider — kalki-ui `Separator` was removed in v3.1. */
export const DocsDivider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cn('h-px w-full shrink-0 border-0 bg-border', className)} {...props} />
  )
);

DocsDivider.displayName = 'DocsDivider';
