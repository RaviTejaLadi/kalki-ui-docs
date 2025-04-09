import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/rippleData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const RipplePage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Ripple</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          A Ripple effect is a design technique that adds a visual effect to a website that gives the impression that a
          button has been pressed. It&apos;s a visual feedback mechanism that shows the user that an element has been
          touched.
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

export default RipplePage;
