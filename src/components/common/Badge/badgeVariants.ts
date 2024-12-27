import { cva } from 'class-variance-authority';

export const badgeVariants = cva('inline-flex gap-2 m-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit items-center font-bold text-center align-middle', {
  variants: {
    size: {
      sm: 'text-xs py-1 px-2 rounded-sm',
      md: 'text-sm py-1.5 px-3 rounded-md',
      lg: 'text-base py-2 px-4 rounded-lg',
    },
    variant: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      success: 'bg-success text-white',
      danger: 'bg-danger text-white',
      warning: 'bg-warning text-black',
      info: 'bg-info text-white',
      help: 'bg-help text-white',
      light: 'bg-light text-foreground',
      dark: 'bg-dark text-white',
      outline: 'border border-gray-200/10 text-foreground',
    },
    pill: {
      true: 'rounded-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'primary',
    pill: false,
  },
});
