import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex justify-center items-center font-normal text-center whitespace-nowrap align-middle select-none transition-colors duration-150 ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary/90 border-primary text-primary-foreground focus:ring-2 focus:ring-blue-300',
        secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-2 focus:ring-gray-300',
        success: 'bg-success hover:bg-green-600 text-white focus:ring-2 focus:ring-green-300',
        danger: 'bg-danger hover:bg-red-600 text-white focus:ring-2 focus:ring-red-300',
        warning: 'bg-warning hover:bg-yellow-600 text-white focus:ring-2 focus:ring-yellow-300',
        info: 'bg-info hover:bg-cyan-600 text-white focus:ring-2 focus:ring-cyan-300',
        help: 'bg-help hover:bg-purple-600 text-white focus:ring-2 focus:ring-purple-300',
        light: 'bg-light hover:bg-gray-200 text-gray-800 focus:ring-2 focus:ring-gray-200',
        dark: 'bg-dark hover:bg-gray-900 text-dark-foreground focus:ring-2 focus:ring-gray-600',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'text-xs h-7 py-[0.5px] px-2',
        sm: 'text-sm h-8 py-1 px-2',
        md: 'text-base h-9 py-2 px-4',
        lg: 'text-lg h-10 py-2 px-4',
        xl: 'text-xl h-11 py-3 px-6',
        '2xl': 'text-2xl h-12 py-3 px-6',
        '3xl': 'text-3xl h-13 py-4 px-7',
      },
      raised: {
        true: 'shadow-md',
        false: '',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      raised: false,
      rounded: false,
    },
  }
);
