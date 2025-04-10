import Table from '@/components/common/Table';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple Table component with default styling.',
    code: `
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell isHeader>Header 1</Table.Cell>
            <Table.Cell isHeader>Header 2</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1, Cell 1</Table.Cell>
            <Table.Cell>Row 1, Cell 2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2, Cell 1</Table.Cell>
            <Table.Cell>Row 2, Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      `,
    snippet: (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell isHeader>Header 1</Table.Cell>
            <Table.Cell isHeader>Header 2</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1, Cell 1</Table.Cell>
            <Table.Cell>Row 1, Cell 2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2, Cell 1</Table.Cell>
            <Table.Cell>Row 2, Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
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
