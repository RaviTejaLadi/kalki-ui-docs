import React, { useContext } from 'react';
import { AvatarImageProps } from './types';
import { avatarVariants } from './avatarVariants';
import { cn } from '@/utils';
import { AvatarContext } from './context/AvatarContext';

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt = 'avatar', ...props }, ref) => {
    const { size, shape, hasError, onError } = useContext(AvatarContext);

    if (hasError) return null;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(avatarVariants({ size, shape }), 'object-cover', className)}
        onError={onError}
        {...props}
      />
    );
  }
);

AvatarImage.displayName = 'Avatar.Image';
