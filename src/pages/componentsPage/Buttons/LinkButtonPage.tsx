import { SectionHeader, Separator, TableList, Div, SectionHeaderTitle } from 'kalki-ui';
import React from 'react';
import { docs, columns, rows, componentHierarchyCode } from './data/linkButtonDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Link Button',
  description: `Button is used to perform various actions when interacted with by users. It’s one of the most common
          interactive elements in web applications and websites. The button can trigger actions such as form
          submissions, invoking JavaScript functions, or navigation, among other behaviors.`,
};
const LinkButtonPage: React.FC = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="LinkButton" />
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

export default LinkButtonPage;
