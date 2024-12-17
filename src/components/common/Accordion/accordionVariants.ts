import { cva } from 'class-variance-authority';

export const accordionVariants = cva('w-full border-[.5px] rounded-md overflow-hidden', {
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
    size: 'sm',
  },
});
