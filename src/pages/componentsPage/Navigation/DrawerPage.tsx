import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, drawerRows, drawerHeaderRows, drawerTitleRows, drawerBodyRows } from './data/drawerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import DrawerPlayground from '@/components/playground/DrawerPlayground';
const DrawerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Drawer</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <DrawerPlayground />
      <DocsDivider />
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
