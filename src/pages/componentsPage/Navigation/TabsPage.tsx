import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, tabsRows, tabRows } from './data/tabsData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import TabsPlayground from '@/components/playground/TabsPlayground';
const TabsPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Tabs</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <TabsPlayground />
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="Tabs" />
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tabs
          </Heading>
          <TableList columns={columns} rows={tabsRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Tab
          </Heading>
          <TableList columns={columns} rows={tabRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default TabsPage;
