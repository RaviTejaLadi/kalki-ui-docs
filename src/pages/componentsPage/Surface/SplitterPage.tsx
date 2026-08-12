import { SectionHeader, Separator, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { docs, columns, splitterProps, splitterPaneProps } from './data/splitterData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
const SplitterPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Splitter</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Splitter" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Splitter
          </Heading>
          <TableList columns={columns} rows={splitterProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Splitter Pane
          </Heading>
          <TableList columns={columns} rows={splitterPaneProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default SplitterPage;
