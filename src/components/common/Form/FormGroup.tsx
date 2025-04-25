import { cn } from '@/utils';
import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import Label, { LabelProps } from './Label';
import { FormErrorMessage } from './FormErrorMessage';

interface FormGroupProps extends LabelProps {
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
      size,
    },
    ref
  ) => {
    const customStyles = {
      margin,
      padding,
      ...style,
    };

    return (
      <div ref={ref} className={cn(className)} style={customStyles}>
        {label && (
          <Label htmlFor={labelFor} size={size} required={required}>
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
