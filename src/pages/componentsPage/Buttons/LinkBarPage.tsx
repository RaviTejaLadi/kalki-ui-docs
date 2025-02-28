import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/linkBarDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

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
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Component Hiraricy</SectionHeader.Title>
      </SectionHeader>
    </div>
  );
};

export default LinkBarPage;
