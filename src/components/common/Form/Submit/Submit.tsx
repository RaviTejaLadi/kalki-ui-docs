import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '../../Button';

interface SubmitProps extends ButtonProps {
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
