import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple table with head, body, and footer sections.',
    code: `
import { Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from "kalki-ui";

export default function BasicTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell isHeader>Header 1</TableCell>
          <TableCell isHeader>Header 2</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>2 rows</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
`,
    snippet: (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell isHeader>Header 1</TableCell>
            <TableCell isHeader>Header 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>2 rows</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const tableRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table.'],
  ['ref', 'ref', 'undefined', 'Ref forwarded to the table element.'],
];

export const tableHeadRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table head.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table head.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table head.'],
];

export const tableBodyRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table body.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table body.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table body.'],
];

export const tableFooterRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table footer.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table footer.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table footer.'],
];

export const tableRowRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table row.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table row.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table row.'],
];

export const tableCellRows = [
  ['children', 'node', 'undefined', 'The content to be rendered inside the table cell.'],
  ['className', 'string', 'undefined', 'Additional CSS class for the table cell.'],
  ['style', 'object', 'undefined', 'Inline styles to be applied to the table cell.'],
  [
    'isHeader',
    'bool',
    'false',
    'Determines if the cell should be rendered as a header cell (th) or a regular cell (td).',
  ],
];
