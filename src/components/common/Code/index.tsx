import { cn } from '@/utils';
import { forwardRef } from 'react';
import { codeVariants } from './codeVariants';
import { CodeProps } from './types';

/**
 * `Code` is a React functional component that renders a `<code>` element with customizable styles and class names.
 * It supports forwarding refs and accepts various props to control its appearance.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the `<code>` element.
 * @param {string} variant - The variant of the code element, used for styling purposes.
 * @param {string} size - The size of the code element, used for styling purposes.
 * @param {boolean} [underline=false] - Whether the code element should be underlined.
 * @param {string} className - Additional class names to apply to the code element.
 * @param {React.CSSProperties} style - Inline styles to apply to the code element.
 * @param {string | number} padding - Padding to apply to the code element.
 * @param {string | number} margin - Margin to apply to the code element.
 * @param {React.Ref<HTMLElement>} ref - A ref to be forwarded to the code element.
 * @param {object} rest - Additional props to be spread onto the code element.
 *
 * @returns {JSX.Element} The rendered `<code>` element with the applied styles and class names.
 */
const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, variant, size, underline = false, className, style, padding, margin, ...rest }, ref) => {
    const combinedStyles = {
      margin,
      padding,
      ...style,
    };

    return (
      <code
        style={combinedStyles}
        ref={ref}
        className={cn(codeVariants({ variant, size, underline }), className)}
        {...rest}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = 'Code';

export default Code;
