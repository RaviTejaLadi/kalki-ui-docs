import { cva } from 'class-variance-authority';

export const galleryVariants = cva('gap-4', {
  variants: {
    pattern: {
      grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ',
      masonry: 'columns-2 md:columns-3 lg:columns-4 space-y-4',
      carousel: 'flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth',
      asymmetric: 'grid grid-cols-4 grid-rows-4',
      compact: 'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1',
    },
  },
  defaultVariants: {
    pattern: 'grid',
  },
});
