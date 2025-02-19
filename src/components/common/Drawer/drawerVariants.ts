import { cva } from 'class-variance-authority';

export const drawerVariants = cva(
  'fixed z-50 p-4 bg-white shadow-lg  border bg-background  dark:bg-[#1b202e] text-foreground dark:border-gray-200/10 overflow-y-auto flex flex-col transition-all duration-300 ease-in-out transform',
  {
    variants: {
      position: {
        top: 'top-0 left-0 transform  -translate-y-full w-full',
        right: 'top-0  right-0 transform border  translate-x-full h-full',
        bottom: 'bottom-0 left-0 transform  translate-y-full w-full',
        left: 'top-0 left-0 transform  -translate-x-full h-full',
      },
      open: {
        true: 'transform-none',
        false: 'transform transition-all duration-300 ease-in-out ',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  }
);
