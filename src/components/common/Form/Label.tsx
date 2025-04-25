import { forwardRef, LabelHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const labelStyles = cva(
  `block font-medium text-foreground flex gap-0.5 items-center leading-none peer-disabled:cursor-not-allowed 
   peer-disabled:opacity-70 mb-2`,
  {
    variants: {
      size: {
        xs: 'text-3xs',
        sm: 'text-2xs',
        md: 'text-2xs',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelStyles> {
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  margin?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      htmlFor,
      children,
      className,
      style,
      size = 'sm',
      required = false,
      color,
      fontSize,
      fontWeight,
      padding,
      margin,
      ...props
    },
    ref
  ) => {
    const customStyles = {
      color,
      fontSize,
      fontWeight,
      padding,
      margin,
      ...style,
    };

    return (
      <label
        htmlFor={htmlFor}
        ref={ref}
        className={cn(labelStyles({ size }), className)}
        style={customStyles}
        {...props}
      >
        <span>{children}</span>
        {required && <span className="text-red-500 ml-1 text-[0.5rem]">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';
export default Label;
