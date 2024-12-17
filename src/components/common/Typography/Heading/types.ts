import { ReactNode } from 'react';
import { headingVariants } from './headingVariants';
import { VariantProps } from 'class-variance-authority';

/**
 * Props for the Heading component.
 *
 * @extends VariantProps<typeof headingVariants>
 *
 * @property {ReactNode} children - The content to be displayed within the heading.
 * @property {string} [className] - Optional additional class name(s) to apply to the heading.
 * @property {() => void} [onClick] - Optional click event handler for the heading.
 */
interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export { type HeadingProps };
