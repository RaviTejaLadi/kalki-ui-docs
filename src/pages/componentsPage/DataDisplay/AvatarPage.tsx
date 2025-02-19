import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/avatarDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const AvatarPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Avatar</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Avatar represents people using icons, labels and images.
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

export default AvatarPage;
