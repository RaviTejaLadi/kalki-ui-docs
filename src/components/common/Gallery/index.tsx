import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { galleryVariants } from './galleryVariants';
import { GalleryProps } from './types';
import GalleryImage from './GalleryImage';

/**
 * `Gallery` is a React component that renders its children in different patterns.
 * It supports two patterns: 'asymmetric' and 'carousel'.
 * 
 * @param {GalleryProps} props - The properties for the Gallery component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the gallery.
 * @param {string} props.pattern - The pattern to use for rendering the gallery. Can be 'asymmetric' or 'carousel'.
 * @param {string} [props.className] - Additional class names to apply to the gallery container.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the gallery container.
 * 
 * @returns {JSX.Element} The rendered gallery component.
 */
const Gallery = forwardRef<HTMLDivElement, GalleryProps>(({ children, pattern, className }, ref) => {
  const renderContent = () => {
    if (pattern === 'asymmetric') {
      return React.Children.map(children, (child, index) => (
        <div
          className={cn(
            'overflow-hidden rounded-lg',
            index % 5 === 0 && 'col-span-2 row-span-2',
            index % 5 === 3 && 'col-span-2',
            index % 5 === 4 && 'row-span-2'
          )}
        >
          {child}
        </div>
      ));
    }

    if (pattern === 'carousel') {
      return React.Children.map(children, (child) => <div className="snap-center flex-shrink-0 w-64">{child}</div>);
    }

    return children;
  };

  return (
    <div ref={ref} className={cn(galleryVariants({ pattern }), className)}>
      {renderContent()}
    </div>
  );
});

Gallery.displayName = 'Gallery';

export default Object.assign(
  Gallery as React.ForwardRefExoticComponent<GalleryProps & React.RefAttributes<HTMLDivElement>>,
  {
    Image: GalleryImage,
  }
);

export { GalleryImage };
