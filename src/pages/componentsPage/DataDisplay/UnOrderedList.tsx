import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, unOrderedListRows, UnOrderedListItemRows } from './data/UnOrderedListData';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';
import TableList from '@/components/common/Table/TableList';

const UnOrderedList = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Un Ordered List</SectionHeader.Title>
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
            un ordered List
          </Heading>
          <TableList columns={columns} rows={unOrderedListRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            un ordered List Item
          </Heading>
          <TableList columns={columns} rows={UnOrderedListItemRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default UnOrderedList;
