import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/closeButtonDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import CloseButtonPlayground from '@/components/playground/CloseButtonPlayground';

const CloseButtonPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Close Button</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          The CloseButton component is a customizable button that displays a close icon. It can be used in various
          contexts where a close or dismiss action is needed.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <CloseButtonPlayground />
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

export default CloseButtonPage;
