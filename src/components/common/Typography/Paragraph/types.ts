import { ReactNode } from 'react';
import { paragraphVariants } from './paragraphVariants';
import { VariantProps } from 'class-variance-authority';

/**
 * Props for the Paragraph component.
 *
 * @extends VariantProps<typeof paragraphVariants>
 *
 * @property {ReactNode} children - The content to be displayed within the paragraph.
 * @property {string} [className] - Optional additional class name(s) to apply to the paragraph.
 * @property {() => void} [onClick] - Optional click handler for the paragraph.
 */
interface ParagraphProps extends VariantProps<typeof paragraphVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export { type ParagraphProps };
