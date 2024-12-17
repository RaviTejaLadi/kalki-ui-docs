import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'inline-flex items-center px-2 mx-1 text-sm font-medium rounded-md transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'text-gray-600 hover:text-blue-600 hover:bg-gray-100',
        active: 'text-blue-600 bg-blue-50 shadow-sm border-blue-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
