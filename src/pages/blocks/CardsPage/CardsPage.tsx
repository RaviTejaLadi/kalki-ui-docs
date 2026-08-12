import { Tab, Tabs } from 'kalki-ui';
import BlocksWrapper from '../BlocksWrapper';
import { data } from './data/cardsData';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';
import { Code, Terminal } from 'lucide-react';

const CardsPage = () => {
  return (
    <BlocksWrapper BlockName="Cards">
      {data.map((item, index) => {
        return (
          <Tabs className="break-inside-avoid overflow-hidden p-2 sm:p-4" variant="secondary" key={index}>
            <Tab
              label="Preview"
              value="preview"
              className="flex w-full min-w-0 justify-center overflow-x-auto"
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

export default CardsPage;
