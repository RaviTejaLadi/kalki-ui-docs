import { forwardRef, useState } from 'react';
import { AvatarImageProps } from './types';
import { avatarVariants } from './avatarVariants';
import { cn } from '@/utils';

/**
 * AvatarImage component renders an image for an avatar with error handling.
 * 
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.alt='avatar'] - The alt text for the image.
 * @param {string} [props.className=''] - Additional class names for styling.
 * @param {string} props.size - The size of the avatar.
 * @param {string} props.shape - The shape of the avatar.
 * @param {Object} props.style - Inline styles for the image.
 * @param {Object} rest - Additional properties passed to the image element.
 * @param {React.Ref<HTMLImageElement>} ref - The ref to the image element.
 * 
 * @returns {JSX.Element|null} The rendered image element or null if there is an error.
 */
export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ src, alt = 'avatar', className = '', size, shape, style, ...rest }, ref) => {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      setHasError(true);
    };

    return !hasError ? (
      <img
        src={src}
        ref={ref}
        alt={alt}
        className={cn(avatarVariants({ size, shape, variant: 'image' }), className)}
        style={style}
        onError={handleError}
        {...rest}
      />
    ) : null;
  }
);
AvatarImage.displayName = 'AvatarImage';