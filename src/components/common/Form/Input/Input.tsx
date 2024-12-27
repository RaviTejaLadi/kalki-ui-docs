import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';

const inputStyles = cva(
  [
    'w-full border-[1px] rounded-md bg-background dark:bg-inherit dark:border-gray-200/10',
    'hover:shadow-sm focus:border-gray-500/10 focus:ring-2 focus:ring-gray-200/10',
    'flex px-3 py-2 border-input ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'md:text-sm outline-none',
  ],
  {
    variants: {
      size: {
        xs: 'h-7 px-[0.45rem] w-auto h-6 text-2xs ',
        sm: 'px-[0.55rem] h-8  w-auto text-xs ',
        md: 'px-3 h-10  w-auto text-sm ',
        lg: 'p-3.5 h-11  w-auto text-base ',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputStyles> {
  name: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, width, height, margin, padding, type = 'text', value, onChange, className, style, size = 'sm', ...props },
    ref
  ) => {
    const customStyles = {
      width,
      height,
      margin,
      padding,
      ...style,
    };

    return (
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={cn(inputStyles({ size }), className)}
        style={customStyles}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
