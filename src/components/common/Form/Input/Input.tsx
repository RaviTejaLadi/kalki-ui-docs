import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';

const inputStyles = cva(
  'w-full border border-gray-300 rounded-md bg-white shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-200',
  {
    variants: {
      size: {
        sm: 'p-1.5 h-8 w-auto text-sm placeholder-gray-500',
        md: 'p-2 h-10 w-auto text-base placeholder-gray-500',
        lg: 'p-2.5 h-12 w-auto text-lg placeholder-gray-500',
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
  size?: 'sm' | 'md' | 'lg';
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
