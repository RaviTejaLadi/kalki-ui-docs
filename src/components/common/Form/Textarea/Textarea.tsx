import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils'; // Utility function for combining class names

const textareaStyles = cva(
  'w-full border border-gray-300 rounded-md bg-white shadow-sm resize-vertical focus:border-blue-500 focus:ring-4 focus:ring-blue-200',
  {
    variants: {
      size: {
        sm: 'p-1.5 text-sm',
        md: 'p-2 text-base',
        lg: 'p-2.5 text-lg',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {
  name: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'sm' | 'md' | 'lg';
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
      style,
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
      <textarea
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(textareaStyles({ size }), className)}
        style={customStyles}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
