import { forwardRef } from 'react';
import Image, { ImageProps } from '../Image';
import { cn } from '@/utils';

/**
 * `GalleryImage` is a React component that renders an image within a div container.
 * It uses the `forwardRef` to pass down the ref to the div element.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.alt='Gallery image'] - The alt text for the image.
 * @param {string} [props.className] - Additional class names for the image.
 * @param {string} [props.variant='rounded'] - The variant style of the image.
 * @param {React.Ref<HTMLImageElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} The rendered `GalleryImage` component.
 */
const GalleryImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt = 'Gallery image', className, variant = 'rounded', ...props }, ref) => {
    return (
      <div ref={ref}>
        <Image
          className={cn('w-full h-full object-cover rounded-lg', className)}
          src={src}
          alt={alt}
          variant={variant}
          {...props}
        />
      </div>
    );
  }
);

GalleryImage.displayName = 'GalleryImage';

export default GalleryImage;
