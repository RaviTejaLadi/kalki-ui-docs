import { Table, TableHead, TableBody, TableRow, TableCell } from 'kalki-ui';
export const TablePreviews = {
  basic: (
    <Table className="max-w-xs">
      <TableHead>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alpha</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Beta</TableCell>
          <TableCell>2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
