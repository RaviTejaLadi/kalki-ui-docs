import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const radioStyles = cva(
  `border-gray-300 text-blue-600 
   focus:ring-blue-600 focus:ring-offset-2
   disabled:cursor-not-allowed disabled:opacity-50`,
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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ name, value, onChange, disabled = false, label, size = 'sm', className, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          className={cn(radioStyles({ size }), className)}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Radio.displayName = 'Radio';
export default Radio;
