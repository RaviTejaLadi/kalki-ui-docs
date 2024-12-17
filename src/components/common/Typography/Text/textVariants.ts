import { cva } from 'class-variance-authority';

/**
 * Styles for the `Text` component using `cva` to manage Tailwind CSS classes.
 * Variants for `variant` and `size` are defined with Tailwind utility classes.
 */
export const textVariants = cva('block', {
  variants: {
    variant: {
      default: 'text-black',
      primary: 'text-blue-500',
      secondary: 'text-gray-600',
      success: 'text-green-500',
      info: 'text-cyan-500',
      warning: 'text-yellow-500',
      danger: 'text-red-500',
      help: 'text-purple-600',
    },
    size: {
      xs: 'text-xs leading-4',
      sm: 'text-sm leading-5',
      md: 'text-base leading-6',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-8',
      xxl: 'text-2xl leading-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
