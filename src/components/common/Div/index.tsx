import { forwardRef } from 'react';
import { cn } from '@/utils';
import { DivProps } from './types';
import { divVariants } from './divVariants';

/**
 * A functional component that renders a `div` element with customizable styles and class names.
 * 
 * @component
 * @param {object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the `div`.
 * @param {string} [props.className] - Additional class names to apply to the `div`.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the `div`.
 * @param {string} [props.borderStyle] - The border style to apply to the `div`.
 * @param {string} [props.backgroundColor] - The background color to apply to the `div`.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 * @param {object} rest - Any additional props to be spread onto the `div` element.
 * 
 * @returns {JSX.Element} The rendered `div` element.
 */
const Div = forwardRef<HTMLDivElement, DivProps>(
  ({ children, className, style, borderStyle, backgroundColor, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          divVariants({
            borderStyle,
            backgroundColor,
          }),
          className
        )}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default Div;
