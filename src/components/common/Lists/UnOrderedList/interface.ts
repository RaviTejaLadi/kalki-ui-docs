import { CSSProperties, ReactNode } from 'react';

export interface UnOrderedListProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: 'disc' | 'circle' | 'square' | 'none';
}

export interface ListItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
