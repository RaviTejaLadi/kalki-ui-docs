import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, orderedListRows, listItemRows } from './data/OrderedListData';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';
import TableList from '@/components/common/Table/TableList';

const OrderedListPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Ordered List</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">Used to display a list of items</SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            ordered List
          </Heading>
          <TableList columns={columns} rows={orderedListRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            ordered List Item
          </Heading>
          <TableList columns={columns} rows={listItemRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default OrderedListPage;
