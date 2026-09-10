import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from 'kalki-ui';
import PlaygroundShell from './PlaygroundShell';

const generateCode = () => `<Table>
  <TableHead>
    <TableRow>
      <TableCell isHeader>Name</TableCell>
      <TableCell isHeader>Role</TableCell>
      <TableCell isHeader>Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Ada Lovelace</TableCell>
      <TableCell>Engineer</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Grace Hopper</TableCell>
      <TableCell>Scientist</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Alan Turing</TableCell>
      <TableCell>Researcher</TableCell>
      <TableCell>Away</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>3 members</TableCell>
      <TableCell>—</TableCell>
    </TableRow>
  </TableFooter>
</Table>`;

const TablePlayground = () => (
  <PlaygroundShell
    preview={
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Role</TableCell>
            <TableCell isHeader>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>Engineer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Grace Hopper</TableCell>
            <TableCell>Scientist</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alan Turing</TableCell>
            <TableCell>Researcher</TableCell>
            <TableCell>Away</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>3 members</TableCell>
            <TableCell>—</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    }
    controls={
      <p className="text-sm text-muted-foreground">
        Table is a compositional layout primitive. Preview shows Head, Body, Footer, and header cells.
      </p>
    }
    code={generateCode()}
    previewClassName="w-full overflow-x-auto"
  />
);

export default TablePlayground;
