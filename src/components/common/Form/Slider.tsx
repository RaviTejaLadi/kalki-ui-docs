import { cn } from '@/utils';
import React, { forwardRef } from 'react';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className = '', min = 0, max = 100, step = 1, defaultValue = 50, disabled = false, ...props }, ref) => {
    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        className={cn(
          'h-2 w-full cursor-pointer appearance-none rounded-md',
          'bg-gray-200  accent-blue-600 disabled:cursor-not-allowed disabled:opacity-50',
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
