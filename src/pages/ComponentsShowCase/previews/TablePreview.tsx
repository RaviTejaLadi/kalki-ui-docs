import Table from '@/components/common/Table';

export const TablePreviews = {
  basic: (
    <Table className="max-w-xs">
      <Table.Head>
        <Table.Row>
          <Table.Cell isHeader>Name</Table.Cell>
          <Table.Cell isHeader>Value</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alpha</Table.Cell>
          <Table.Cell>1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Beta</Table.Cell>
          <Table.Cell>2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
