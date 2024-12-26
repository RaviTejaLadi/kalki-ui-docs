import { cva } from 'class-variance-authority';

export const navMenuTriggerVariants = cva(
  'inline-flex items-center justify-center rounded-md font-normal disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        light: 'text-gray-900 bg-white hover:bg-gray-100 dark:bg-inherit dark:hover:text-foreground dark:hover:bg-gray-700',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600',
        outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white shadow-sm',
        link: 'text-primary hover:text-primary/90 dark:text-primary-400 dark:hover:text-primary-300 underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-4 text-sm',
        md: 'h-10 px-6 text-base',
        lg: 'h-12 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'light',
      size: 'md',
    },
  }
);
