import { cva } from 'class-variance-authority';

export const badgeVariants = cva('inline-block font-bold text-center align-middle', {
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
      light: 'bg-light text-black',
      dark: 'bg-dark text-white',
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
