import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows,componentHierarchyCode } from './data/linkBarDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import Div from '@/components/common/Div';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';

const LinkBarPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">LinkBar</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
      <SectionHeader variant="transparent" size="sm" className="mt-4">
        <SectionHeader.Title className="tracking-wide">Component Hierarchy</SectionHeader.Title>
      </SectionHeader>
      <Div borderStyle="solid">
        <SyntaxHighlighter code={componentHierarchyCode} language="jsx" />
      </Div>
    </div>
  );
};

export default LinkBarPage;
