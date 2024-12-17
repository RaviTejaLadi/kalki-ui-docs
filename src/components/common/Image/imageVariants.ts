import { cva } from 'class-variance-authority';

export const imageVariants = cva('transition-opacity duration-300 ease-in-out', {
  variants: {
    variant: {
      default: 'rounded-none',
      rounded: 'rounded-lg',
      circle: 'rounded-full',
    },
    objectFit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
  },
  defaultVariants: {
    variant: 'default',
    objectFit: 'cover',
  },
});
