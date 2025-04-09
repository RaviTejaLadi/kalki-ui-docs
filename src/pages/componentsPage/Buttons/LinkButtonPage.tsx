import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import React from 'react';
import { docs, columns, rows,componentHierarchyCode } from './data/linkButtonDocs';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import Div from '@/components/common/Div';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';

const LinkButtonPage: React.FC = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Button</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Button is used to perform various actions when interacted with by users. It’s one of the most common
          interactive elements in web applications and websites. The button can trigger actions such as form
          submissions, invoking JavaScript functions, or navigation, among other behaviors.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
      <SectionHeader variant="transparent" size="sm" className="mt-4">
        <SectionHeader.Title className="tracking-wide">Component Hierarchy</SectionHeader.Title>
      </SectionHeader>
      <Div borderStyle="solid">
        <SyntaxHighlighter code={componentHierarchyCode} language="html" />
      </Div>
    </div>
  );
};

export default LinkButtonPage;
