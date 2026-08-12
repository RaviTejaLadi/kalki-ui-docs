import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/breadcrumbData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const BreadcrumbPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Breadcrumb</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          The Breadcrumb component is a navigation aid that helps users understand their current location within a
          website&apos;s hierarchy.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Breadcrumb" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default BreadcrumbPage;
