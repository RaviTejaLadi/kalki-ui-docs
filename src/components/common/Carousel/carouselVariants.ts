import { cva } from 'class-variance-authority';

export const carouselVariants = cva('flex flex-col mx-auto', {
  variants: {
    padding: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
  },
});
