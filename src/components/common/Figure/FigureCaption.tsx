import { forwardRef } from 'react';
import { cn } from '@/utils';
import { FigureCaptionProps } from './types';

/**
 * A React forwardRef component that renders a `<figcaption>` element with
 * additional styling and class names.
 *
 * @component
 * @param {React.ReactNode} children - The content to be displayed inside the `<figcaption>`.
 * @param {string} [className] - Additional class names to apply to the `<figcaption>`.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the `<figcaption>`.
 * @param {React.Ref<HTMLElement>} ref - A ref to be forwarded to the `<figcaption>` element.
 * @param {object} rest - Any other props to be passed to the `<figcaption>` element.
 * @returns {JSX.Element} The rendered `<figcaption>` element.
 */
export const FigureCaption = forwardRef<HTMLElement, FigureCaptionProps>(
  ({ children, className, style, ...rest }, ref) => {
    return (
      <figcaption
        ref={ref}
        className={cn('w-full italic text-sm text-muted-foreground mt-2 ml-4', className)}
        style={style}
        {...rest}
      >
        {children}
      </figcaption>
    );
  }
);
