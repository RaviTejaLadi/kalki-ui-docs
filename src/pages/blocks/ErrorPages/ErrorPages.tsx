import { Tab, Tabs } from 'kalki-ui';
import BlocksWrapper from '../BlocksWrapper';
import { Code, Terminal } from 'lucide-react';
import { data } from './data/errorPagesData';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';

const ErrorPages = () => {
  return (
    <BlocksWrapper BlockName="Error Pages">
      {data.map((item, index) => {
        return (
          <Tabs className="break-inside-avoid overflow-hidden p-2 sm:p-4" variant="secondary" key={index}>
            <Tab
              label="Preview"
              value="preview"
              className="max-h-[70vh] w-full min-w-0 overflow-auto"
              leftIcon={<Terminal className="size-4" />}
            >
              {item.snippet}
            </Tab>
            <Tab
              label="Code"
              value="code"
              className="h-[min(500px,70vh)] overflow-auto"
              leftIcon={<Code className="size-4" />}
            >
              <SyntaxHighlighter code={item.code} language="jsx" />
            </Tab>
          </Tabs>
        );
      })}
    </BlocksWrapper>
  );
};

export default ErrorPages;
