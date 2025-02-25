import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/breadcrumbData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const BreadcrumbPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Breadcrumb</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          The Breadcrumb component is a navigation aid that helps users understand their current location within a
          website&apos;s hierarchy.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default BreadcrumbPage;
