import { cn } from '@/utils';
import React, { forwardRef, ReactNode, CSSProperties } from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className, style, ...rest }, ref) => {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table
        ref={ref}
        className={cn(
          'w-full border-collapse border border-gray-200 rounded-md text-sm bg-white shadow-sm overflow-hidden',
          className
        )}
        style={style}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
});

interface TableSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const TableHead: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <thead
      className={cn(
        'bg-gray-50  text-foreground text-left uppercase text-xs font-semibold border-b border-gray-200',
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </thead>
  );
};

const TableBody: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <tbody className={cn('divide-y divide-gray-200', className)} style={style} {...rest}>
      {children}
    </tbody>
  );
};

const TableFooter: React.FC<TableSectionProps> = ({ children, className, style, ...rest }) => {
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

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const TableRow: React.FC<TableRowProps> = ({ children, className, style, ...rest }) => {
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

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  isHeader?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({ children, className, style, isHeader = false, ...rest }) => {
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

Table.displayName = 'Table';

export default Object.assign(
  Table as React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>,
  {
    Head: TableHead,
    Body: TableBody,
    Cell: TableCell,
    Footer: TableFooter,
    Row: TableRow,
  }
);

export { TableHead, TableBody, TableCell, TableFooter, TableRow };
