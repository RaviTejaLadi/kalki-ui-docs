import { SectionHeader, Separator, TableList, SectionHeaderTitle } from 'kalki-ui';
import { docs, columns, rows } from './data/contentScrollableData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const ContentScrollablePage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Content Scrollable</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="ContentScrollable" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default ContentScrollablePage;
