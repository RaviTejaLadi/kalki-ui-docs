import { cva } from 'class-variance-authority';

export const linkVariants = cva('no-underline transition-colors duration-300', {
  variants: {
    variant: {
      default: 'text-blue-500 hover:text-blue-700',
      subtle: 'text-gray-500 hover:text-gray-700',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
