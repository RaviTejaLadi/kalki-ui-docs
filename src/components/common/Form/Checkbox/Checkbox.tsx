import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const checkboxStyles = cva(
  'mr-2 border border-gray-300  rounded-md bg-white shadow-sm',
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
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: 'sm' | 'md' | 'lg';
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
      <input
        ref={ref}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={cn(checkboxStyles({ size }), className)}
        style={customStyles}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
