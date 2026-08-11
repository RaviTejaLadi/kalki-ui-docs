import { forwardRef, useId } from 'react';
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
  ({ label, info, labelProps, error, name, id, className, size = 'sm', ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? name ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="space-y-2">
        <LabelExt label={label} info={info} htmlFor={inputId} size={size} {...labelProps} />
        <Input
          ref={ref}
          id={inputId}
          name={name}
          size={size}
          className={cn(error && 'dark:border-red-500 border-red-500 focus-visible:ring-red-500', className)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && <FormErrorMessage id={errorId} error={error} />}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
