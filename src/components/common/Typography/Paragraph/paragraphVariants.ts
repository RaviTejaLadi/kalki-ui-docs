import { cva } from 'class-variance-authority';

export const paragraphVariants = cva('leading-7', {
  variants: {
    size: {
      default: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
      xxxl: 'text-3xl',
    },
    underline: { true: 'underline' },
    overline: { true: 'overline' },
    dashed: { true: 'line-through' },
    italic: { true: 'italic' },
    strong: { true: 'font-bold' },
    strikethrough: { true: 'line-through' },
    marked: { true: 'bg-yellow-200' },
    smaller: { true: 'text-sm' },
    deleted: { true: 'line-through' },
    inserted: { true: 'underline' },
  },
  defaultVariants: {
    size: 'default',
  },
});
