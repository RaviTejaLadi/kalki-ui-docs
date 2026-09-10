import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/headingData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import HeadingPlayground from '@/components/playground/HeadingPlayground';

const HeadingPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Heading</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Headings are titles or subtitles that you want to display on a webpage.
        </SectionHeaderSubTitle>
        <SectionHeaderSubTitle className="tracking-wide">Headings are defined with the H1 to H6.</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <HeadingPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Heading" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default HeadingPage;
