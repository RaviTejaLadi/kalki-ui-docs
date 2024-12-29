import React, { LabelHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const labelStyles = cva(
  'block font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelStyles> {
  htmlFor: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  margin?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
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
    <label htmlFor={htmlFor} className={cn(labelStyles({ size }), className)} style={customStyles} {...props}>
      {children}
    </label>
  );
};

export default Label;
