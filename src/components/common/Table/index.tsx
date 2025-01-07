import { cn } from '@/utils';
import React, { forwardRef } from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableProps } from './types';

/**
 * A reusable Table component that wraps HTML table element with additional styling.
 *
 * @component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The content to be rendered inside the table
 * @param {string} [props.className] - Additional CSS class names to be applied
 * @param {CSSProperties} [props.style] - Inline styles to be applied to the table
 * @param {React.Ref<HTMLTableElement>} ref - Forwarded ref to access the underlying table element
 *
 * @returns {JSX.Element} A styled table component wrapped in a scrollable container
 *
 * @example
 * ```tsx
 * <Table className="my-custom-class">
 *   <thead>...</thead>
 *   <tbody>...</tbody>
 * </Table>
 * ```
 */
const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className, style, ...rest }, ref) => {
  return (
    <div className="overflow-x-auto rounded-md border dark:border-gray-200/10">
      <table
        ref={ref}
        className={cn(
          'w-full border-collapse border border-gray-200 rounded-md text-sm bg-background dark:bg-inherit dark:border-gray-200/10 shadow-sm overflow-hidden',
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
