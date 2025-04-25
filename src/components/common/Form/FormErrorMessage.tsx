import React from 'react';

export const FormErrorMessage: React.FC<{ error: string }> = ({ error }) => {
  return <p className="mt-1 text-xs text-red-500">{error}</p>;
};
