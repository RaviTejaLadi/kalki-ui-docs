import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import React, { forwardRef, useState } from 'react';

const switchVariants = cva(
  `relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 
  border-transparent transition-colors duration-200 ease-in-out 
  focus:outline-none focus:ring-1 focus:ring-gray-950 focus:ring-offset-1 
  disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-gray-300`,
  {
    variants: {
      variant: {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        help: 'bg-purple-600',
        light: 'bg-gray-200',
        dark: 'bg-gray-800',
      },
      size: {
        xs: 'h-4 w-7',
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
      checked: {
        true: '',
        false: 'dark:bg-gray-200/10 bg-gray-200',
      },
    },
    compoundVariants: [
      {
        variant: 'light',
        checked: false,
        className: 'bg-gray-200',
      },
      {
        variant: 'dark',
        checked: false,
        className: 'dark:bg-gray-200/10',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      checked: false,
    },
  }
);

const thumbVariants = cva(
  `pointer-events-none inline-block rounded-full bg-white shadow ring-0 
  transition duration-200 ease-in-out`,
  {
    variants: {
      size: {
        xs: 'h-2.5 w-2.5 m-[1.5px]',
        sm: 'h-3 w-3 m-[2.5px]',
        md: 'h-4 w-4 m-[2.5px]',
        lg: 'h-5 w-5 m-[3px]',
      },
      checked: {
        true: '',
        false: 'translate-x-0',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        checked: true,
        className: 'translate-x-3',
      },
      {
        size: 'sm',
        checked: true,
        className: 'translate-x-4',
      },
      {
        size: 'md',
        checked: true,
        className: 'translate-x-5',
      },
      {
        size: 'lg',
        checked: true,
        className: 'translate-x-7',
      },
    ],
  }
);

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof switchVariants> {
  className?: string;
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className = '',
      label,
      checked = false,
      onCheckedChange,
      disabled = false,
      variant = 'primary',
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
      if (disabled) return;

      const newValue = !isChecked;
      setIsChecked(newValue);

      if (onCheckedChange) {
        onCheckedChange(newValue);
      }
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          data-state={isChecked ? 'checked' : 'unchecked'}
          className={cn(switchVariants({ variant, size, checked: isChecked, className }))}
          onClick={handleChange}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          <span aria-hidden="true" className={thumbVariants({ size, checked: isChecked })} />
        </button>
        {label && (
          <label className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
