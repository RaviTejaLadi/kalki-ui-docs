import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import {
  docs,
  columns,
  tableRows,
  tableHeadRows,
  tableBodyRows,
  tableFooterRows,
  tableRowRows,
  tableCellRows,
} from './data/tableDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const TablePage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Tables</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Table is used to display data in a structured, grid-like format consisting of rows and columns.
        </SectionHeader.SubTitle>
        <SectionHeader.SubTitle className="tracking-wide">
          Tables are ideal for presenting data that is best understood in a row-column format, such as statistics,
          schedules, comparisons, financial information, and any data that needs to be organized clearly.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table
          </Heading>
          <TableList columns={columns} rows={tableRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table Header
          </Heading>
          <TableList columns={columns} rows={tableHeadRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table Body
          </Heading>
          <TableList columns={columns} rows={tableBodyRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table Footer
          </Heading>
          <TableList columns={columns} rows={tableFooterRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table Row
          </Heading>
          <TableList columns={columns} rows={tableRowRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading size="h6" className="mb-2 text-muted-foreground">
            Table Cell
          </Heading>
          <TableList columns={columns} rows={tableCellRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default TablePage;
