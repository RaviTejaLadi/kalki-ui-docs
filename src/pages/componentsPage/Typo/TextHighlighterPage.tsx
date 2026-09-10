import { SectionHeader, TableList, Div, Heading, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows, textHighlighterTextRows } from './data/textHighlighterData';
import TextHighlighterPlayground from '@/components/playground/TextHighlighterPlayground';
const TextHighlighterPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Text Highlighting</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          The TextHighlighter component allows you to highlight specific words or phrases within a text passage. This is
          useful for drawing attention to important information or for creating interactive text elements.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <TextHighlighterPlayground />
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="TextHighlighter" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
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
