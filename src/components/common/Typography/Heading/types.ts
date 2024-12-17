import { ReactNode } from 'react';
import { headingVariants } from './headingVariants';
import { VariantProps } from 'class-variance-authority';

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export { type HeadingProps };
