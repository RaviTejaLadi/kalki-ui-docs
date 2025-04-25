import { forwardRef } from 'react';
import Input, { InputProps } from './Input';
import LabelExt from './LabelExt';
import { LabelProps } from './Label';
import { cn } from '@/utils';
import { FormErrorMessage } from './FormErrorMessage';

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
          className={cn(error && 'dark:border-red-500 border-red-500 focus-visible:ring-red-500', className)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          {...props}
        />
        {error && <FormErrorMessage error={error} />}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
