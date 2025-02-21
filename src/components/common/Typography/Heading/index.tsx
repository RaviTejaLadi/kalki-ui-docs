import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { createElement, forwardRef, ReactNode } from 'react';

// #region headingVariants
const headingVariants = cva('font-heading text-foreground scroll-m-20', {
  variants: {
    size: {
      h1: 'text-4xl lg:text-5xl font-bold',
      h2: 'text-3xl lg:text-4xl font-semibold',
      h3: 'text-2xl lg:text-3xl font-semibold',
      h4: 'text-xl lg:text-2xl font-semibold',
      h5: 'text-lg lg:text-xl font-semibold',
      h6: 'text-base lg:text-lg font-semibold',
    },
    underline: { true: 'underline' },
    overline: { true: 'overline' },
    dashed: { true: 'line-through' },
    italic: { true: 'italic' },
    strong: { true: 'font-bold' },
    strikethrough: { true: 'line-through' },
    marked: { true: 'bg-yellow-200' },
    smaller: { true: 'text-sm' },
    deleted: { true: 'line-through' },
    inserted: { true: 'underline' },
  },
  defaultVariants: {
    size: 'h1',
  },
});
// #endregion

// #region type
interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
// #endregion

// #region Heading
const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(({ children, size, className, onClick, ...props }) => {
  const element = size || 'h1';
  return createElement(
    element,
    {
      className: cn(headingVariants({ size, ...props }), className),
      onClick: onClick,
    },
    children
  );
});

Heading.displayName = 'Heading';
// #endregion

// #region export
export default Heading;
export { headingVariants };
export type { HeadingProps };
