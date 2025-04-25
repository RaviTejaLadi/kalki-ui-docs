import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const checkboxStyles = cva(
  `rounded border-gray-300 text-blue-600 
  focus:ring-blue-600  focus:ring-offset-2
  disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      size: {
        sm: 'w-3.5 h-3.5',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxStyles> {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      checked,
      onChange,
      width,
      height,
      margin,
      padding,
      style,
      className,
      disabled = false,
      size = 'sm',
      label,
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
      <div className="flex items-center space-x-2">
        <input
          ref={ref}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className={cn(checkboxStyles({ size }), className)}
          style={customStyles}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
