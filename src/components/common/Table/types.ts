import { CSSProperties, ReactNode } from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface TableSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  isHeader?: boolean;
}

export type { TableProps, TableSectionProps, TableRowProps, TableCellProps };
