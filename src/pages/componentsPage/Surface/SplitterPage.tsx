import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, splitterProps, splitterPaneProps } from './data/splitterData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const SplitterPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Splitter</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
