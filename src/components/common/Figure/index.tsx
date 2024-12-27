import React, { forwardRef } from 'react';
import type { FigureProps, FigureImageProps, FigureCaptionProps } from './types';
import { cn } from '@/utils';
import { FigureImage } from './FigureImage';
import { FigureCaption } from './FigureCaption';

/**
 * A React functional component that renders a `<figure>` element with customizable styles and properties.
 *
 * @component
 * @param {React.ReactNode} children - The content to be displayed inside the `<figure>` element.
 * @param {string | number} width - The width of the `<figure>` element.
 * @param {string | number} height - The height of the `<figure>` element.
 * @param {string} [margin='5px'] - The margin around the `<figure>` element. Defaults to '5px'.
 * @param {string} [className] - Additional class names to apply to the `<figure>` element.
 * @param {React.CSSProperties} [style] - Additional inline styles to apply to the `<figure>` element.
 * @param {React.Ref<HTMLElement>} ref - A ref to be forwarded to the `<figure>` element.
 * @param {object} rest - Any other props to be passed to the `<figure>` element.
 *
 * @returns {JSX.Element} The rendered `<figure>` element.
 */
const Figure = forwardRef<HTMLElement, FigureProps>(
  ({ children, width, height, margin = '5px', className, style, ...rest }, ref) => {
    return (
      <figure
        ref={ref}
        className={cn('flex flex-col items-center m-1', className)}
        style={{ width, height, margin, ...style }}
        {...rest}
      >
        {children}
      </figure>
    );
  }
);

Figure.displayName = 'Figure';

export default Object.assign(
  Figure as React.ForwardRefExoticComponent<FigureProps & React.RefAttributes<HTMLElement>>,
  {
    Image: FigureImage,
    Caption: FigureCaption,
  }
);

export { FigureImage, FigureCaption, FigureProps, FigureImageProps, FigureCaptionProps };
