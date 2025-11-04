import { Tab, Tabs } from '@/components/common/Tabs';
import BlocksWrapper from '../BlocksWrapper';
import { Code, Terminal } from 'lucide-react';
import { data } from './data/heroSectionsData';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';

const HeroSectionPage = () => {
  return (
    <BlocksWrapper BlockName="Hero Sections">
      {data.map((item, index) => {
        return (
          <Tabs className="p-4 break-inside-avoid" key={index} variant="secondary">
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

export default HeroSectionPage;
