import { SectionHeader, TableList, Div, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows, componentHierarchyCode } from './data/linkBarDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import LinkBarPlayground from '@/components/playground/LinkBarPlayground';

const metaData: IMetaData = {
  title: 'LinkBar',
};

const LinkBarPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <LinkBarPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="LinkBar" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
      <SectionHeader variant="transparent" size="sm" className="mt-4">
        <SectionHeaderTitle className="tracking-wide">Component Hierarchy</SectionHeaderTitle>
      </SectionHeader>
      <Div borderStyle="dashed" className="border-border">
        <SyntaxHighlighter code={componentHierarchyCode} language="jsx" />
      </Div>
    </div>
  );
};

export default LinkBarPage;
