import { SectionHeader, Div, Heading, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, ListGroupsRows, ListGroupsItemRows } from './data/ListGroupData';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import ListGroupPlayground from '@/components/playground/ListGroupPlayground';

const metaData: IMetaData = {
  title: 'List Group',
  description: `Lists are used to group related content in a structured, easy-to-read manner. The main types of lists are
          unordered lists, ordered lists , and list groups (custom styled).`,
};

const ListGroupPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <ListGroupPlayground />
      <DocsDivider />
      <DocumentationRenderer
        data={docs}
        componentName="ListGroups"
        importCode={`import { ListGroups } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
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
