import { cva } from 'class-variance-authority';

export const spinnerVariants = cva('inline-block animate-spin', {
  variants: {
    variant: {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      danger: 'text-red-600',
      warning: 'text-yellow-500',
      info: 'text-cyan-600',
      light: 'text-gray-200',
      dark: 'text-gray-800',
    },
    size: {
      sm: 'w-6 h-6',
      md: 'w-9 h-9',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
