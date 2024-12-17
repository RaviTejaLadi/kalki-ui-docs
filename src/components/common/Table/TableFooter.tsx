import { cn } from '@/utils';
import React from 'react';
import { TableSectionProps } from './types';

export const TableFooter: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <tfoot
      className={cn('bg-gray-50 text-muted-foreground font-medium text-sm border-t border-gray-200', className)}
      style={style}
      {...rest}
    >
      {children}
    </tfoot>
  );
};
