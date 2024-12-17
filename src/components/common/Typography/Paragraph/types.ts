import { ReactNode } from 'react';
import { paragraphVariants } from './paragraphVariants';
import { VariantProps } from 'class-variance-authority';

interface ParagraphProps extends VariantProps<typeof paragraphVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export { type ParagraphProps };
