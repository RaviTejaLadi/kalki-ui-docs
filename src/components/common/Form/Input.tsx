import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';
import { FormErrorMessage } from './FormErrorMessage';

const inputStyles = cva(
  [
    'w-full border-[1px] rounded-md bg-background dark:border-gray-200/10',
    'hover:shadow-sm focus:border-gray-500/10 focus:ring-1 focus:ring-gray-200/10',
    'flex px-3 py-2 border-input ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground text-foreground',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'md:text-sm outline-none',
  ],
  {
    variants: {
      size: {
        xs: 'h-7 px-[0.45rem] w-auto h-6 text-2xs  placeholder:text-2xs ',
        sm: 'px-[0.55rem] h-8  w-auto text-xs placeholder:text-xs',
        md: 'px-3 h-10  w-auto text-sm placeholder:text-sm',
        lg: 'p-3.5 h-11  w-auto text-base placeholder:text-base',
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
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      width,
      height,
      margin,
      padding,
      type = 'text',
      value,
      onChange,
      className,
      style,
      size = 'sm',
      error,
      disabled = false,
      ...props
    },
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
      <div className="relative">
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={cn(
            inputStyles({ size }),
            error ? 'dark:border-red-500 border-red-500 focus-visible:ring-red-500' : '',
            className
          )}
          style={customStyles}
          disabled={disabled}
          {...props}
        />
        {error && <FormErrorMessage error={error} />}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
