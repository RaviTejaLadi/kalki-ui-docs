import { cn } from '@/utils';
import React from 'react';
import { TableCellProps } from './types';

export const TableCell: React.FC<TableCellProps> = ({ children, className, style, isHeader = false, ...rest }) => {
  const CellTag = isHeader ? 'th' : 'td';
  return (
    <CellTag
      className={cn(
        'px-4 py-2',
        isHeader ? 'font-medium text-xs tracking-wide text-foreground' : 'text-muted-foreground',
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </CellTag>
  );
};
