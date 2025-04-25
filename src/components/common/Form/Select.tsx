import React, { forwardRef } from 'react';
import { FormErrorMessage } from './FormErrorMessage';
import { cn } from '@/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  error?: string;
  children: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', error, disabled = false, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            `flex h-10 w-full rounded-md border text-muted-foreground px-3 py-2 text-sm 
            ring-offset-white focus-visible:outline-none focus-visible:ring-1 
            focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 
            bg-background dark:border-gray-800 dark:ring-offset-gray-950 
            dark:focus-visible:ring-gray-300`,
            error ? 'dark:border-red-500 border-red-500 focus-visible:ring-red-500' : '',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
        {error && <FormErrorMessage error={error} />}
      </div>
    );
  }
);
Select.displayName = 'Select';

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
}

const Option = forwardRef<HTMLOptionElement, OptionProps>(({ className = '', children, ...props }, ref) => {
  return (
    <option className={className} ref={ref} {...props}>
      {children}
    </option>
  );
});

Option.displayName = 'Option';

export default Object.assign(
  Select as React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>,
  {
    Option: Option,
  }
);

export { Option };
