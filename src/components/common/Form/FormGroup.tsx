import { cn } from '@/utils';
import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import Label from './Label';
import { FormErrorMessage } from './FormErrorMessage';

interface FormGroupProps {
  children?: ReactNode;
  className?: string;
  margin?: string;
  padding?: string;
  style?: CSSProperties;
  label?: string;
  labelFor?: string;
  error?: string;
  required?: boolean;
}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  (
    {
      children,
      className = '',
      style = {},
      error,
      required = false,
      label,
      labelFor,
      margin = '0 0 20px 0',
      padding,
      ...props
    },
    ref
  ) => {
    const customStyles = {
      margin,
      padding,
      ...style,
    };

    return (
      <div ref={ref} className={cn(className)} style={customStyles} {...props}>
        {label && (
          <Label htmlFor={labelFor} required={required}>
            {label}
          </Label>
        )}
        {children}
        {error && !React.isValidElement(children) && <FormErrorMessage error={error} />}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';

export default FormGroup;
