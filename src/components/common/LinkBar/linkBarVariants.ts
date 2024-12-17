import { cva } from 'class-variance-authority';

export const linkBarVariants = cva(
  'flex items-center justify-center rounded-md transition-all',
  {
    variants: {
      variant: {
        primary: 'border border-blue-200',
        secondary: 'border border-gray-300',
        success: 'border border-green-200',
        danger: 'border border-red-200',
        warning: 'border border-yellow-200',
        info: 'border border-cyan-200',
        help: 'border border-purple-200',
        light: 'border border-gray-100',
        dark: 'border border-gray-400',
        default: 'bg-white',
        outline: 'border border-gray-200 bg-white shadow-sm',
      },
      size: {
        sm: 'h-10',
        md: 'h-12',
        lg: 'h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);
