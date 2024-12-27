import { forwardRef } from 'react';
import { cn } from '@/utils';
import { FigureImageProps } from './types';
import Image from '../Image';

/**
 * A functional component that renders an image with customizable properties.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.className] - Additional CSS classes to apply to the image.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the image.
 * @param {React.Ref<HTMLImageElement>} ref - The ref to be attached to the image element.
 * @param {Object} rest - Any additional properties to be passed to the image element.
 *
 * @returns {JSX.Element} The rendered image element.
 */
export const FigureImage = forwardRef<HTMLImageElement, FigureImageProps>(
  ({ src, alt, className, style, ...rest }, ref) => {
    return (
      <div ref={ref}>
        <Image
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover rounded-md', className)}
          style={style}
          {...rest}
        />
      </div>
    );
  }
);

FigureImage.displayName = 'FigureImage';
