import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, ListGroupsRows, ListGroupsItemRows } from './data/ListGroupData';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';
import TableList from '@/components/common/Table/TableList';

const ListGroupPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">List Group</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Lists are used to group related content in a structured, easy-to-read manner. The main types of lists are
          unordered lists, ordered lists , and list groups (custom styled).
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            List Groups
          </Heading>
          <TableList columns={columns} rows={ListGroupsRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            List Groups Item
          </Heading>
          <TableList columns={columns} rows={ListGroupsItemRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default ListGroupPage;
