import { SectionHeader } from '@/components/common/SectionHeader';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
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
 * @property {string} [componentName] - When set, shows shadcn-style Installation + Usage.
 * @property {string} [importCode] - Optional custom import snippet for Usage.
 * @property {boolean} [defaultExport] - Whether the package export is default.
 */
interface DocumentationRendererProps {
  data: Array<docsData>;
  className?: string;
  componentName?: string;
  importCode?: string;
  defaultExport?: boolean;
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
  defaultExport,
}) => {
  return (
    <div className={cn(className)}>
      {componentName ? (
        <ComponentInstallSection componentName={componentName} importCode={importCode} defaultExport={defaultExport} />
      ) : null}
      {data?.map((item: docsData, index: number) => {
        return (
          <div className="my-5" key={`${item.title}-${index}`}>
            <SectionHeader variant="transparent" size="sm">
              <SectionHeader.Title className="tracking-wide">{item.title}</SectionHeader.Title>
              <SectionHeader.SubTitle className="tracking-wide">{item.desc}</SectionHeader.SubTitle>
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
