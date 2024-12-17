import React, { LabelHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

// Define the label variant styles with cva
const labelStyles = cva('block font-medium', {
  variants: {
    size: {
      sm: 'text-sm', // 14px
      md: 'text-base', // 16px
      lg: 'text-lg', // 18px
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelStyles> {
  htmlFor: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  margin?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className,
  style,
  size = 'sm',
  color,
  fontSize,
  fontWeight,
  padding,
  margin,
  ...props
}) => {
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
      className={cn(labelStyles({ size }), className)}
      style={customStyles}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
