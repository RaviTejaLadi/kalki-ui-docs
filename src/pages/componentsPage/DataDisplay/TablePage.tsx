import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
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
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Table',
  description: `Table is used to display data in a structured, grid-like format consisting of rows and columns.`,
};

const TablePage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Tables are ideal for presenting data that is best understood in a row-column format, such as statistics,
          schedules, comparisons, financial information, and any data that needs to be organized clearly.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Table" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table
          </Heading>
          <TableList columns={columns} rows={tableRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table Header
          </Heading>
          <TableList columns={columns} rows={tableHeadRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table Body
          </Heading>
          <TableList columns={columns} rows={tableBodyRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table Footer
          </Heading>
          <TableList columns={columns} rows={tableFooterRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table Row
          </Heading>
          <TableList columns={columns} rows={tableRowRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Table Cell
          </Heading>
          <TableList columns={columns} rows={tableCellRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default TablePage;
