import { forwardRef, CSSProperties } from 'react';
import { cn } from '@/utils';
import type { ContentScrollableProps } from './types';
import { contentScrollableVariants } from './contentScrollableVariants';

/**
 * A scrollable content container component.
 *
 * @component
 * @param {ContentScrollableProps} props - The properties for the ContentScrollable component.
 * @param {string | number} props.height - The height of the scrollable container.
 * @param {string | number} props.width - The width of the scrollable container.
 * @param {React.ReactNode} props.children - The content to be rendered inside the scrollable container.
 * @param {string} [props.variant] - The variant of the scrollable container.
 * @param {string} [props.className] - Additional class names to apply to the container.
 * @param {React.CSSProperties} [props.style] - Additional styles to apply to the container.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the container element.
 * @param {object} rest - Additional properties to be spread onto the container element.
 *
 * @returns {JSX.Element} The rendered scrollable content container.
 */
const ContentScrollable = forwardRef<HTMLDivElement, ContentScrollableProps>(
  ({ height, width, children, variant, className, style, ...rest }, ref) => {
    const containerStyles: CSSProperties = {
      height: height,
      width: width,
      ...style,
    };

    const contentScrollableClasses = cn(contentScrollableVariants({ variant }), className);

    return (
      <div ref={ref} className={contentScrollableClasses} style={containerStyles} {...rest}>
        {children}
      </div>
    );
  }
);

ContentScrollable.displayName = 'ContentScrollable';

export default ContentScrollable;
export { ContentScrollableProps };
