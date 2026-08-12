import { SectionHeader, Separator, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { docs, columns, drawerRows, drawerHeaderRows, drawerTitleRows, drawerBodyRows } from './data/drawerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
const DrawerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Drawer</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} componentName="Drawer" />
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
