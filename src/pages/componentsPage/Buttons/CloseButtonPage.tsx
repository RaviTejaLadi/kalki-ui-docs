import { SectionHeader, TableList, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows, componentHierarchyCode } from './data/closeButtonDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import CloseButtonPlayground from '@/components/playground/CloseButtonPlayground';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Close Button',
  description: `The CloseButton component is a customizable button that displays a close icon. It can be used in various
          contexts where a close or dismiss action is needed.`,
};

const CloseButtonPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <CloseButtonPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="CloseButton" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
      <SectionHeader variant="transparent" size="sm" className="mt-4">
        <SectionHeaderTitle className="tracking-wide">Component Hierarchy</SectionHeaderTitle>
      </SectionHeader>
      <Div borderStyle="solid">
        <SyntaxHighlighter code={componentHierarchyCode} language="html" />
      </Div>
    </div>
  );
};

export default CloseButtonPage;
