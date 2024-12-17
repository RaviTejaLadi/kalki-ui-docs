import React, { InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const radioStyles = cva(
  'mr-2 border border-gray-300 rounded-full bg-white shadow-sm focus:ring-2 focus:ring-blue-500',
  {
    variants: {
      size: {
        sm: 'w-3.5 h-3.5',
        md: 'w-4 h-4',
        lg: 'w-4.5 h-4.5',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof radioStyles> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
}

const Radio: React.FC<RadioProps> = ({ name, value, onChange, size = 'sm', className, ...props }) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      className={cn(radioStyles({ size }), className)}
      {...props}
    />
  );
};

export default Radio;
