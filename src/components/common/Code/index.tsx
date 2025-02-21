import { cn } from '@/utils';
import React, { forwardRef, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// #region codeVariants
const codeVariants = cva('font-mono inline-flex items-center rounded-md font-semibold ring-1 ring-inset', {
  variants: {
    variant: {
      primary: 'bg-blue-50 text-blue-700 ring-blue-700/10',
      secondary: 'bg-gray-50 text-gray-600 ring-gray-500/10',
      success: 'bg-green-50 text-green-700 ring-green-600/20',
      danger: 'bg-red-50 text-red-700 ring-red-600/10',
      warning: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
      info: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
      help: 'bg-purple-50 text-purple-700 ring-purple-700/10',
      light: 'text-foreground bg-background',
      dark: 'text-gray-800 bg-gray-300',
    },
    size: {
      sm: 'text-[.7rem] py-[.5px] px-2',
      md: 'text-[.8rem] py-[1px] px-2',
      lg: 'text-[.9rem] py-[1.5px] px-2',
    },
    underline: {
      true: 'underline',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
// #endregion

// #region types
/**
 * Props for the Code component.
 *
 * @extends VariantProps<typeof codeVariants>
 *
 * @property {ReactNode} children - The content to be rendered inside the code block.
 * @property {string} [className] - Optional additional class names to apply to the code block.
 * @property {React.CSSProperties} [style] - Optional inline styles to apply to the code block.
 * @property {boolean} [underline] - Optional flag to underline the code text.
 * @property {string} [padding] - Optional padding to apply to the code block.
 * @property {string} [margin] - Optional margin to apply to the code block.
 */
interface CodeProps extends VariantProps<typeof codeVariants> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  underline?: boolean;
  padding?: string;
  margin?: string;
}
// #endregion

// #region Code
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
// #endregion

// #region exports
export default Code;
export { codeVariants };
export type { CodeProps };
// #endregion
