import { cva } from 'class-variance-authority';

export const bannerVariants = cva(
  'flex justify-between items-center w-full rounded-md overflow-hidden transition-all duration-300 m-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        warning: 'bg-warning text-gray-900',
        info: 'bg-info text-white',
        help: 'bg-help text-white',
        light: 'bg-light text-foreground',
        dark: 'bg-dark text-white',
      },
      size: {
        sm: 'p-5 h-20',
        md: 'p-6 h-24',
        lg: 'p-7 h-28',
        xl: 'p-8 h-32',
        '2xl': 'p-9 h-36',
        '3xl': 'p-10 h-52',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
