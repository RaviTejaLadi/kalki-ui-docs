import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows, textHighlighterTextRows } from './data/textHighlighterData';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';

const TextHighlighterPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Text Highlighting</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          The TextHighlighter component allows you to highlight specific words or phrases within a text passage. This is
          useful for drawing attention to important information or for creating interactive text elements.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            TextHighlighter
          </Heading>
          <TableList columns={columns} rows={rows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            TextHighlighterText
          </Heading>
          <TableList columns={columns} rows={textHighlighterTextRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default TextHighlighterPage;
