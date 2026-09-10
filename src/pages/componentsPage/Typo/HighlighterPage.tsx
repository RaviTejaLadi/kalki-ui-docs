import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/highlighterData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import HighlighterPlayground from '@/components/playground/HighlighterPlayground';

const metaData: IMetaData = {
  title: 'Highlighter',
  description:
    'Highlight specific words or phrases in a string with customizable variants, colors, and emphasis styles.',
};

const HighlighterPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <HighlighterPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Highlighter" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default HighlighterPage;
