import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/paraData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const ParagraphPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Paragraph</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          A paragraph always starts on a new line, and is usually a block of text.
        </SectionHeader.SubTitle>
        <SectionHeader.SubTitle className="tracking-wide">
          A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and
          after a paragraph.
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

export default ParagraphPage;
