import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center rounded transition ease-in-out duration-150', {
  variants: {
    variant: {
      light: [
        'bg-white dark:bg-gray-800',
        'border-gray-100 dark:border-gray-700',
        'hover:bg-gray-100 dark:hover:bg-gray-700',
        'text-gray-900 dark:text-gray-100',
      ],
      dark: [
        'bg-gray-900 dark:bg-gray-950',
        'border-gray-700 dark:border-gray-800',
        'hover:bg-gray-800 dark:hover:bg-gray-900',
        'text-white',
      ],
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
