import { cn } from '@/utils';
import { ListItemProps } from './interface';

export const OrderedListItem: React.FC<ListItemProps> = ({ children, className = '', style, ...rest }) => {
  return (
    <li className={cn('mb-1 text-black', className)} style={style} {...rest}>
      {children}
    </li>
  );
};
