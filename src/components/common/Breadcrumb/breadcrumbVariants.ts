import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva(
  'inline-flex items-center transition-colors duration-200',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
