import { SectionHeader, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import { docsData } from '@/types/docsData';
import { cn } from '@/utils';
import React from 'react';
import SnippetDisplay from '../SnippetDisplay';
import ComponentInstallSection from '../ComponentInstallSection';

/**
 * Props for the DocumentationRenderer component.
 *
 * @interface DocumentationRendererProps
 * @property {Array<docsData>} data - An array of documentation data objects.
 * @property {string} [className] - An optional class name for styling the component.
 * @property {string} [componentName] - When set, shows Installation + Usage.
 * @property {string} [importCode] - Optional custom import snippet for Usage.
 * @property {string} [deepImport] - Optional deep-import path (e.g. "button").
 */
interface DocumentationRendererProps {
  data: Array<docsData>;
  className?: string;
  componentName?: string;
  importCode?: string;
  deepImport?: string;
}

/**
 * DocumentationRenderer component renders a list of documentation items.
 * Each item includes a section header with a title and description, and preview + code.
 */
const DocumentationRenderer: React.FC<DocumentationRendererProps> = ({
  data,
  className,
  componentName,
  importCode,
  deepImport,
}) => {
  return (
    <div className={cn('w-full min-w-0 overflow-x-hidden', className)}>
      {componentName ? (
        <ComponentInstallSection componentName={componentName} importCode={importCode} deepImport={deepImport} />
      ) : null}
      {data?.map((item: docsData, index: number) => {
        return (
          <div className="my-5 w-full min-w-0" key={`${item.title}-${index}`}>
            <SectionHeader variant="transparent" size="sm">
              <SectionHeaderTitle className="tracking-wide">{item.title}</SectionHeaderTitle>
              <SectionHeaderSubTitle className="tracking-wide">{item.desc}</SectionHeaderSubTitle>
            </SectionHeader>
            <SnippetDisplay
              snippet={item.snippet}
              highlighter={<SyntaxHighlighter code={item.code.trim()} language="tsx" />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DocumentationRenderer;
