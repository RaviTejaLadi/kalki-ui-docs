import { Tab, Tabs } from '@/components/common/Tabs';
import BlocksWrapper from '../BlocksWrapper';
import { Code, Terminal } from 'lucide-react';
import { data } from './data/errorPagesData';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';

const ErrorPages = () => {
  return (
    <BlocksWrapper BlockName="Error Pages">
      {data.map((item, index) => {
        return (
          <Tabs className="p-4 break-inside-avoid" variant="secondary" key={index}>
            <Tab label="Preview" value="preview" leftIcon={<Terminal className="size-4" />}>
              {item.snippet}
            </Tab>
            <Tab label="Code" value="code" className="h-[500px] overflow-y-auto" leftIcon={<Code className="size-4" />}>
              <SyntaxHighlighter code={item.code} language="jsx" />
            </Tab>
          </Tabs>
        );
      })}
    </BlocksWrapper>
  );
};

export default ErrorPages;
