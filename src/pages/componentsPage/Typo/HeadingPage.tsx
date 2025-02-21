import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/headingData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';

const HeadingPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Heading</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Headings are titles or subtitles that you want to display on a webpage.
        </SectionHeader.SubTitle>
        <SectionHeader.SubTitle className="tracking-wide">
          Headings are defined with the H1 to H6.
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

export default HeadingPage;
