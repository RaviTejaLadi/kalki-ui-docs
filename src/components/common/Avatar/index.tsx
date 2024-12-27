import React, { useState } from 'react';
import { cn } from '@/utils';
import { AvatarImage } from './AvatarImage';
import { AvatarFallback } from './AvatarFallback';
import { AvatarContext } from './context/AvatarContext';
import type { AvatarContextType, AvatarProps, AvatarImageProps, AvatarFallbackProps } from './types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ children, className, size, shape, ...props }, ref) => {
  const [hasError, setHasError] = useState(false);

  return (
    <AvatarContext.Provider
      value={{
        size,
        shape,
        hasError,
        onError: () => setHasError(true),
      }}
    >
      <div ref={ref} className={cn('relative inline-flex', className)} {...props}>
        {children}
      </div>
    </AvatarContext.Provider>
  );
});

Avatar.displayName = 'Avatar';

export default Object.assign(Avatar as React.FC<AvatarProps>, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarFallback, AvatarImage, AvatarContextType, AvatarProps, AvatarImageProps, AvatarFallbackProps };
