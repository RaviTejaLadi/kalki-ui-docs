import { cn } from '@/utils';
import { ButtonIconProps } from './interfaces';

export const ButtonIcon: React.FC<ButtonIconProps> = ({ children, className, ...rest }) => {

  return (
    <span className={cn('inline-flex items-center mx-1', className)} {...rest}>
      {children}
    </span>
  );
};
