import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center rounded transition ease-in-out duration-150', {
  variants: {
    variant: {
      light: 'bg-light border-gray-100 hover:bg-gray-200 hover:border-gray-200',
      dark: 'bg-dark border-gray-700 hover:bg-gray-600 hover:border-gray-600 text-white',
    },
    size: {
      sm: 'w-6 h-6 p-1 rounded-md',
      md: 'w-8 h-8 p-2 rounded-md',
      lg: 'w-10 h-10 p-2 rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'light',
    size: 'sm',
  },
});
