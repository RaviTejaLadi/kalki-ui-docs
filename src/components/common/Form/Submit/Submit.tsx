import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Button from '../../Button';

interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const Submit: React.FC<SubmitProps> = ({ children, onClick, ...props }) => {
  return (
    <Button type="submit" onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default Submit;
