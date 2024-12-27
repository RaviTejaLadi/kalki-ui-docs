import { forwardRef } from 'react';
import Input, { InputProps } from '../Input/Input';
import LabelExt from '../LabelExt/LabelExt';
import { LabelProps } from '../Label/Label';
import { cn } from '@/utils';

interface InputFieldProps extends InputProps {
  label: string;
  info?: string;
  labelProps?: Omit<LabelProps, 'htmlFor'>;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, info, labelProps, error, name, className, size = 'sm', ...props }, ref) => {
    return (
      <div ref={ref} className="space-y-2">
        <LabelExt label={label} info={info} htmlFor={name} size={size} {...labelProps} />
        <Input
          name={name}
          size={size}
          className={cn(error && 'border-red-500 focus:border-red-500 focus:ring-red-200', className)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${name}-error`} className="text-xs text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
