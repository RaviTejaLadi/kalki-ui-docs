import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, drawerRows, drawerHeaderRows, drawerTitleRows, drawerBodyRows } from './data/drawerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const DrawerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Drawer</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Drawer
          </Heading>
          <TableList columns={columns} rows={drawerRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Drawer Header
          </Heading>
          <TableList columns={columns} rows={drawerHeaderRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Drawer Title
          </Heading>
          <TableList columns={columns} rows={drawerTitleRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Drawer Body
          </Heading>
          <TableList columns={columns} rows={drawerBodyRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default DrawerPage;
