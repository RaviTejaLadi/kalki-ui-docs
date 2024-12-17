import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute w-max max-w-xs px-3 py-1.5 rounded-md text-sm shadow-lg transition-opacity duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-green-500 text-white',
        danger: 'bg-destructive text-destructive-foreground',
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white',
        help: 'bg-purple-500 text-white',
        light: 'bg-background text-foreground border border-border',
        dark: 'bg-foreground text-background',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'sm',
    },
  }
);
