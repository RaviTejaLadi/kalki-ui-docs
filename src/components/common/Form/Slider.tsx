import { cn } from '@/utils';
import React, { forwardRef } from 'react';

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number | string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className = '',
      min = 0,
      max = 100,
      step = 1,
      defaultValue = 50,
      value,
      disabled = false,
      'aria-label': ariaLabel = 'Slider',
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;

    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        {...(isControlled ? { value } : { defaultValue })}
        aria-label={ariaLabel}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={Number(isControlled ? value : defaultValue)}
        className={cn(
          'h-2 w-full cursor-pointer appearance-none rounded-md',
          'bg-gray-200 dark:bg-gray-700 accent-blue-600 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
