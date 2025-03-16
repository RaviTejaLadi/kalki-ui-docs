import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import { docsData } from '@/types/docsData';
import { cn } from '@/utils';
import React from 'react';
import SnippetDisplay from '../SnippetDisplay';

/**
 * Props for the DocumentationRenderer component.
 *
 * @interface DocumentationRendererProps
 * @property {Array<docsData>} data - An array of documentation data objects.
 * @property {string} [className] - An optional class name for styling the component.
 */
interface DocumentationRendererProps {
  data: Array<docsData>;
  className?: string;
}

/**
 * DocumentationRenderer component renders a list of documentation items.
 * Each item includes a section header with a title and description, and tabs for preview and code.
 *
 * @param {DocumentationRendererProps} props - The props for the DocumentationRenderer component.
 * @param {Array<docsData>} props.data - The array of documentation data to render.
 * @param {string} [props.className] - Optional additional class name for the container div.
 *
 * @returns {JSX.Element} The rendered DocumentationRenderer component.
 */
const DocumentationRenderer: React.FC<DocumentationRendererProps> = ({ data, className }) => {
  return (
    <div className={cn(className)}>
      {data?.map((item: docsData) => {
        return (
          <div className="my-5" key={item.title.slice(0, 3)}>
            <SectionHeader variant="transparent" size="sm">
              <SectionHeader.Title className="tracking-wide">{item.title}</SectionHeader.Title>
              <SectionHeader.SubTitle className="tracking-wide">{item.desc}</SectionHeader.SubTitle>
            </SectionHeader>
            <SnippetDisplay
              snippet={item.snippet}
              highlighter={<SyntaxHighlighter code={item.code} language="jsx" />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DocumentationRenderer;
