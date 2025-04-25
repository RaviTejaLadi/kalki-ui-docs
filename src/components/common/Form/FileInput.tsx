import React, { forwardRef } from 'react';
import { FormErrorMessage } from './FormErrorMessage';

// File Input Component
interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className = '', error, disabled = false, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type="file"
          className={`
            flex w-full rounded-md border text-muted-foreground border-gray-200 px-3 py-2 text-sm 
            ring-offset-white file:mr-4 file:rounded-md file:border-0 
             file:px-2.5 file:py-1.5 file:text-sm file:font-medium file:text-foreground
            hover:file:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-gray-950 focus-visible:ring-offset-2 
            disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 
             dark:ring-offset-gray-950 dark:file:bg-gray-800
           dark:focus-visible:ring-gray-300
            ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
            ${className}
          `}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {error && <FormErrorMessage error={error} />}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

export default FileInput;
