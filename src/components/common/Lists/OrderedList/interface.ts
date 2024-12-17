import { CSSProperties, ReactNode } from 'react';
import { ListStyleType } from './type';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface OrderedListProps extends Omit<React.OlHTMLAttributes<HTMLOListElement>, 'type'> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: ListStyleType;
}
