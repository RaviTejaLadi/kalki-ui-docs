import { cva } from 'class-variance-authority';

export const navMenuTriggerVariants = cva(
  'inline-flex items-center justify-center rounded-md font-semibold disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        light: 'text-black bg-white hover:bg-gray-100',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white  shadow hover:bg-primary/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
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
