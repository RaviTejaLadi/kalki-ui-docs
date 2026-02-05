import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, tabsRows, tabRows } from './data/tabsData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const TabsPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Tabs</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
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
