import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva('inline-flex items-center font-semibold  transition-colors duration-200', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
