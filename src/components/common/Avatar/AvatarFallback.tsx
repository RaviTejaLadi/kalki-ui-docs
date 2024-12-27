import React, { useContext } from 'react';
import { cn } from '@/utils';
import { avatarVariants } from './avatarVariants';
import { AvatarFallbackProps } from './types';
import { AvatarContext } from './context/AvatarContext';

export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ children, className, ...props }, ref) => {
    const { size, shape, hasError } = useContext(AvatarContext);

    if (!hasError) return null;

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size, shape }),
          'bg-background dark:bg-background/40 border dark:border-gray-200/10 text-foreground font-medium',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AvatarFallback.displayName = 'AvatarFallback';
