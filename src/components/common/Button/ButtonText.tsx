import { cn } from '@/utils';
import { ButtonTextProps } from './interfaces';

export const ButtonText: React.FC<ButtonTextProps> = ({ children, className, ...rest }) => {
  return (
    <span className={cn('inline-flex items-center', className)} {...rest}>
      {children}
    </span>
  );
};
