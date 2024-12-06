import Box from '@/components/common/Box';
import { ResizableContainer } from '@/components/common/ResizableContainer/ResizableContainer';
import { SectionHeader } from '@/components/common/SectionHeader/SectionHeader';
import { SyntaxHighLighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import { Tab, Tabs } from '@/components/common/Tabs/Tabs';
import { docsData } from '@/types/docsData';
import { cn } from '@/utils';
import { Code, Terminal } from 'lucide-react';
import React from 'react';

interface DocumentationRendererProps {
  data: Array<docsData>;
  className?: string;
}

const DocumentationRenderer: React.FC<DocumentationRendererProps> = ({ data, className }) => {
  return (
    <div className={cn(className)}>
      {data?.map((item: docsData) => {
        return (
          <div className="my-5" key={item.title.slice(0, 3)}>
            <SectionHeader variant={'transparent'} size="sm">
              <SectionHeader.Title className="tracking-wide">{item.title}</SectionHeader.Title>
              <SectionHeader.SubTitle className="tracking-wide">{item.desc}</SectionHeader.SubTitle>
            </SectionHeader>
            <Tabs variant="light" size="sm"  title="PreviewCodeTabs">
              <Tab
                label="Preview"
                value="preview"
                className="h-64 w-full"
                leftIcon={<Terminal className="size-4" />}
              >
                <ResizableContainer direction="right"  >
                  {item.snippet}
                </ResizableContainer>
              </Tab>
              <Tab label="Code" value="code" className="max-h-96" leftIcon={<Code className="size-4" />}>
                <Box padding="10px">
                  <SyntaxHighLighter code={item.code} language="jsx" />
                </Box>
              </Tab>
            </Tabs>
          </div>
        );
      })}
    </div>
  );
};

export default DocumentationRenderer;
