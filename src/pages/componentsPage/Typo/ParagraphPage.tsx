import { SectionHeader, Separator, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { docs, columns, rows } from './data/paraData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const ParagraphPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Paragraph</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          A paragraph always starts on a new line, and is usually a block of text.
        </SectionHeaderSubTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and
          after a paragraph.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Paragraph" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default ParagraphPage;
