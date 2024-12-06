import React, { forwardRef, CSSProperties } from 'react';
import Table from './Table';
import Code from '../Code/Code';
import { cn } from '@/utils';

interface TableListProps {
  columns: string[];
  rows: Array<Array<React.ReactNode>>;
  code?: boolean;
  CodeColumn?: number | number[];
  codevariant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'help'
    | 'light'
    | 'dark';
  codeUnderline?: boolean;
  codeSize?: 'sm' | 'md' | 'lg';
  codeStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
}

const TableList = forwardRef<HTMLTableElement, TableListProps>(
  (
    {
      columns,
      rows,
      code = false,
      CodeColumn = [],
      codevariant = 'primary',
      codeSize = 'sm',
      codeUnderline = false,
      codeStyle = {},
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const codeColumns = Array.isArray(CodeColumn) ? CodeColumn : [CodeColumn];

    return (
      <Table ref={ref} className={cn(className)} style={style} {...rest}>
        <Table.Head>
          <Table.Row>
            {columns.map((column, index) => (
              <Table.Cell isHeader key={index}>
                {column}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Cell key={cellIndex} data-th={columns[cellIndex]}>
                  {code && codeColumns.includes(cellIndex) ? (
                    <Code
                      size={codeSize}
                      variant={codevariant}
                      underline={codeUnderline}
                      style={codeStyle}
                    >
                      {cell}
                    </Code>
                  ) : (
                    cell
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
);

TableList.displayName = 'TableList';
export default TableList;
