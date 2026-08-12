import { SectionHeader, Separator, TableList, SectionHeaderTitle } from 'kalki-ui';
import { docs, columns, rows } from './data/linkData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const LinkPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Link</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Link" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default LinkPage;
