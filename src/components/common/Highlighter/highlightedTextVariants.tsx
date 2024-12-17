import { cva } from 'class-variance-authority';

export const highlightedTextVariants = cva(
  [
    'inline-flex items-center justify-center',
    'transition-all duration-200 ease-in-out',
    'hover:opacity-90 cursor-pointer',
    'whitespace-normal align-baseline',
  ],
  {
    variants: {
      variant: {
        solid: ['border-transparent text-white', 'rounded px-2 py-0'],
        outlined: ['bg-transparent border-2', 'rounded px-2 py-0.5'],
        underline: ['border-b-2 border-t-0 border-x-0', 'rounded-none px-2 py-0.5'],
        pill: ['rounded-full px-3 py-0.5', 'border-transparent text-white'],
        gradient: [
          'border-transparent text-white',
          'rounded px-2 py-0.5',
          'bg-gradient-to-r from-current to-current/80',
        ],
        glass: ['backdrop-blur-sm bg-opacity-20', 'rounded px-2 py-0', 'border border-white/20', 'shadow-sm'],
        shadow: ['border-transparent text-white', 'rounded px-2 py-0.5', 'shadow-md hover:shadow-lg'],
        floating: ['border-transparent text-white', 'rounded px-2 py-0.5', 'shadow-md hover:-translate-y-0.5'],
        minimal: ['border-b border-t-0 border-x-0', 'px-0.5', 'hover:border-b-2'],
        tag: [
          'border-transparent text-white',
          'rounded px-2 py-0.5',
          "before:content-['#'] before:opacity-50 before:mr-0.5",
        ],
      },
      emphasis: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      sizing: {
        inherit: '',
        compact: 'mx-0.5 leading-none',
        comfortable: 'mx-1 leading-normal',
        relaxed: 'mx-1.5 my-1 leading-relaxed',
      },
    },
    defaultVariants: {
      variant: 'solid',
      emphasis: 'medium',
      sizing: 'inherit',
    },
  }
);
