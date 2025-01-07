import { cn } from '@/utils';
import React from 'react';
import { TableSectionProps } from './types';

export const TableHead: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <thead
      className={cn(
        'bg-gray-50 dark:bg-inherit dark:border-gray-200/10 text-foreground text-left uppercase text-xs font-semibold border-b border-gray-200',
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </thead>
  );
};
