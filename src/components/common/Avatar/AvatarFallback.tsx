import { forwardRef } from 'react';
import { cn } from '@/utils';
import { avatarVariants } from './avatarVariants';
import { AvatarFallbackProps } from './types';

/**
 * A fallback component for the Avatar component.
 *
 * This component is used to display a fallback UI when the main Avatar component
 * cannot display the intended content. It supports various sizes and shapes.
 *
 * @component
 * @param {AvatarFallbackProps} props - The properties for the AvatarFallback component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the fallback avatar.
 * @param {string} [props.className=''] - Additional class names to apply to the fallback avatar.
 * @param {string} props.size - The size of the fallback avatar.
 * @param {string} props.shape - The shape of the fallback avatar.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the fallback avatar's root element.
 *
 * @returns {JSX.Element} The rendered fallback avatar component.
 */
export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ children, className = '', size, shape }, ref) => {
    return (
      <div ref={ref} className={cn(avatarVariants({ size, shape, variant: 'fallback' }), className)}>
        {children}
      </div>
    );
  }
);

AvatarFallback.displayName = 'AvatarFallback';
