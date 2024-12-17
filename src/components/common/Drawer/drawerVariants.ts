import { cva } from 'class-variance-authority';

export const drawerVariants = cva(
  'fixed z-50 transition ease-in-out bg-white shadow-lg overflow-y-auto flex flex-col',
  {
    variants: {
      position: {
        top: 'top-0 left-0 transform -translate-y-full w-full',
        right: 'top-0 right-0 transform translate-x-full h-full',
        bottom: 'bottom-0 left-0 transform translate-y-full w-full',
        left: 'top-0 left-0 transform -translate-x-full h-full',
      },
      open: {
        true: 'transform-none',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  }
);
