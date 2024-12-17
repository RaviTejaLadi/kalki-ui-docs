import { cn } from '@/utils';
import React from 'react';
import { TableRowProps } from './types';

export const TableRow: React.FC<TableRowProps> = ({ children, className, style, ...rest }) => {
  return (
    <tr
      className={cn('hover:bg-gray-100 focus-within:bg-gray-100 transition-colors', className)}
      style={style}
      {...rest}
    >
      {children}
    </tr>
  );
};
