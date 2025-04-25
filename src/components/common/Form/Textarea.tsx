import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { FormErrorMessage } from './FormErrorMessage';

const textareaStyles = cva(
  `flex min-h-[80px] w-full rounded-md border border-gray-200 px-3 py-2 text-sm 
    ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
    focus-visible:ring-gray-950 focus-visible:ring-offset-1 
    disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 
    bg-background dark:ring-offset-gray-950 
    dark:focus-visible:ring-gray-300`,
  {
    variants: {
      size: {
        sm: 'p-1.5 h-[90px] text-sm  placeholder:text-sm',
        md: 'p-2 h-[120px] text-base placeholder:text-base',
        lg: 'p-2.5 h-[150px] text-lg placeholder:text-lg',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaStyles> {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      value,
      onChange,
      width,
      height,
      margin,
      padding,
      className,
      disabled = false,
      style,
      error,
      size = 'sm',
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
        <textarea
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            textareaStyles({ size }),
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

Textarea.displayName = 'Textarea';

export default Textarea;
