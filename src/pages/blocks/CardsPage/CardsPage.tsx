import { Tab, Tabs } from '@/components/common/Tabs';
import BlocksWrapper from '../BlocksWrapper';
import { data } from './data/cardsData';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import { Code, Terminal } from 'lucide-react';

const CardsPage = () => {
  return (
    <BlocksWrapper BlockName="Cards">
      {data.map((item, index) => {
        return (
          <Tabs className="p-4" variant="secondary" key={index}>
            <Tab
              label="Preview"
              value="preview"
              className="flex justify-center"
              leftIcon={<Terminal className="size-4" />}
            >
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

export default CardsPage;
