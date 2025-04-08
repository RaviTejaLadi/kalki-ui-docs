// components/ui/form/index.tsx
import { cn } from '@/utils';
import React, { createContext, forwardRef, useContext, useId } from 'react';
import { FieldError, FieldErrors } from 'react-hook-form';
import Button, { ButtonProps } from '../Button';

// Form Context
type FormContextValue = {
  id: string;
  errors?: Record<string, string | FieldError> | FieldErrors<any>;
};

const FormContext = createContext<FormContextValue | undefined>(undefined);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Form components must be used within a Form component');
  }
  return context;
}

// Form Root
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  errors?: Record<string, string | FieldError> | FieldErrors<any>;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(({ children, className, errors, ...props }, ref) => {
  const id = useId();

  return (
    <FormContext.Provider value={{ id, errors }}>
      <form ref={ref} className={cn('space-y-6', className)} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
});
Form.displayName = 'Form';

// Form Field
interface FormFieldProps {
  name: string;
  children: React.ReactNode;
}

export function FormField({ name, children }: FormFieldProps) {
  const { errors } = useFormContext();
  const hasError = errors?.[name];

  // Extract error message from different possible error types
  const getErrorMessage = () => {
    const error = errors?.[name];
    if (!error) return '';

    if (typeof error === 'string') return error;
    if (typeof error === 'object' && 'message' in error) return error.message as string;
    return '';
  };

  return (
    <div className="space-y-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            name,
            error: !!hasError,
            errorMessage: getErrorMessage(),
            ...child.props,
          });
        }
        return child;
      })}
      {hasError && <p className="text-sm font-medium text-red-500">{getErrorMessage()}</p>}
    </div>
  );
}

// Form Label
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  }
);
FormLabel.displayName = 'FormLabel';

// Form Input
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border text-foreground border-gray-300 bg-inherit px-3 py-2 text-sm',
          'ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus-visible:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormInput.displayName = 'FormInput';

// Form Textarea
interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-inherit px-3 py-2 text-sm',
          'ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus-visible:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormTextarea.displayName = 'FormTextarea';

// Form Checkbox
interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
            error && 'border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
FormCheckbox.displayName = 'FormCheckbox';

// Form Radio Group
interface FormRadioGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function FormRadioGroup({ children, className }: FormRadioGroupProps) {
  return <div className={cn('space-y-2', className)}>{children}</div>;
}

// Form Radio
interface FormRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const FormRadio = forwardRef<HTMLInputElement, FormRadioProps>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        className={cn(
          'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500',
          error && 'border-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  );
});
FormRadio.displayName = 'FormRadio';

// Form Select
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options?: Array<{ value: string; label: string }>;
  placeholder?: 'string';
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, error, options, children, placeholder = 'Select an option', ...props }, ref) => {
    return (
      <select
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-inherit text-foreground px-3 py-2 text-sm',
          'ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus-visible:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      >
        <option value="" disabled selected className="text-muted-foreground">
          {placeholder}
        </option>
        {options
          ? options.map((option) => (
              <option key={option.value} className="bg-inherit text-muted-foreground" value={option.value}>
                {option.label}
              </option>
            ))
          : children}
      </select>
    );
  }
);
FormSelect.displayName = 'FormSelect';

// Form Switch
interface FormSwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

export const FormSwitch = forwardRef<HTMLInputElement, FormSwitchProps>(({ label, error, ...props }, ref) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="sr-only" ref={ref} {...props} />
        <div
          className={cn(
            'block w-10 h-6 rounded-full',
            props.checked ? 'bg-blue-600' : 'bg-gray-200',
            error && 'bg-red-500'
          )}
        />
        <div
          className={cn(
            'absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out',
            props.checked && 'transform translate-x-4'
          )}
        />
      </div>
      {label && <span className="ml-3 text-sm font-medium text-foreground">{label}</span>}
    </label>
  );
});
FormSwitch.displayName = 'FormSwitch';

// Form Button

export const FormButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <Button ref={ref} variant={variant} size={size} className={className} {...props}>
        {children}
      </Button>
    );
  }
);
FormButton.displayName = 'FormButton';

// Form Description
interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />;
  }
);
FormDescription.displayName = 'FormDescription';

// Form Message
interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: 'error' | 'success' | 'warning' | 'info';
}

export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, type = 'error', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-sm font-medium',
          {
            error: 'text-red-500',
            success: 'text-green-500',
            warning: 'text-amber-500',
            info: 'text-blue-500',
          }[type],
          className
        )}
        {...props}
      />
    );
  }
);
FormMessage.displayName = 'FormMessage';
