import { SectionHeader, Div, Heading, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, unOrderedListRows, UnOrderedListItemRows } from './data/UnOrderedListData';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Unordered List',
  description: `Used to display a list of items`,
};

const UnOrderedList = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer
        data={docs}
        componentName="UnOrderedList"
        importCode={`import { UnOrderedList } from "kalki-ui";`}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Unordered List
          </Heading>
          <TableList columns={columns} rows={unOrderedListRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Unordered List Item
          </Heading>
          <TableList columns={columns} rows={UnOrderedListItemRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default UnOrderedList;
