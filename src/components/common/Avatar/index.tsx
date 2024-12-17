import React from 'react';
import { cn } from '@/utils';
import { AvatarProps } from './types';
import { AvatarImage } from './AvatarImage';
import { AvatarFallback } from './AvatarFallback';

/**
 * `Avatar` is a React component that renders a div with a ref and custom class names.
 * It uses `React.forwardRef` to pass down the ref to the div element.
 *
 * @param {AvatarProps} props - The properties passed to the Avatar component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Avatar component.
 * @param {string} [props.className=''] - Additional class names to apply to the Avatar component.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ children, className = '' }, ref) => {
  return (
    <div ref={ref} className={cn('relative inline-flex', className)}>
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Object.assign(Avatar as React.FC<AvatarProps>, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarFallback, AvatarImage };
