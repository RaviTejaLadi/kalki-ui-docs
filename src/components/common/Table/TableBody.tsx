import { cn } from '@/utils';
import React from 'react';
import { TableSectionProps } from './types';

export const TableBody: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <tbody className={cn('divide-y divide-gray-200', className)} style={style} {...rest}>
      {children}
    </tbody>
  );
};
