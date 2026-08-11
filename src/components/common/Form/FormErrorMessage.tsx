import React from 'react';

interface FormErrorMessageProps {
  error: string;
  id?: string;
  className?: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ error, id, className }) => {
  return (
    <p id={id} role="alert" className={`mt-1 text-xs text-red-500 ${className ?? ''}`.trim()}>
      {error}
    </p>
  );
};
