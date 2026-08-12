import { SectionHeader, TableList, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import React from 'react';
import { docs, columns, componentHierarchyCode, rows } from './data/buttonDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import ButtonPlayground from '@/components/playground/ButtonPlayground';
import Head from '@/components/Head';
import { IMetaData } from '@/types/metaData';

const metaData: IMetaData = {
  title: 'Button',
  description: `Button is used to perform various actions when interacted with by users. It’s one of the most common
          interactive elements in web applications and websites. The button can trigger actions such as form
          submissions, invoking JavaScript functions, or navigation, among other behaviors.`,
};

const ButtonPage: React.FC = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <ButtonPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Button" />
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

export default ButtonPage;
