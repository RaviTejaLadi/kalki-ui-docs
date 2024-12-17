import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex items-center font-medium text-center rounded-md transition',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        success: 'bg-green-500 text-white hover:bg-green-600',
        warning: 'bg-yellow-500 text-gray-800 hover:bg-yellow-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        info: 'bg-teal-500 text-white hover:bg-teal-600',
        light: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        dark: 'bg-gray-800 text-white hover:bg-gray-900',
      },
      size: {
        xs: 'text-xs h-6 p-1',
        sm: 'text-sm h-8 p-1.5',
        md: 'text-base h-10 p-1.5',
        lg: 'text-lg h-12 p-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);
