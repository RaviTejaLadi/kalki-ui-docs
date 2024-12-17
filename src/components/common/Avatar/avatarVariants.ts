import { cva } from 'class-variance-authority';

export const avatarVariants = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
    variant: {
      image: 'object-cover',
      fallback: 'bg-gray-300 text-gray-600 font-medium',
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'circle',
    variant: 'image',
  },
});
