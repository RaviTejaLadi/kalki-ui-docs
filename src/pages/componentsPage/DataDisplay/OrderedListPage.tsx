import { SectionHeader, Div, Heading, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { columns, docs, orderedListRows, listItemRows } from './data/OrderedListData';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import OrderedListPlayground from '@/components/playground/OrderedListPlayground';

const metaData: IMetaData = {
  title: 'Ordered List',
  description: `Used to display a list of items`,
};

const OrderedListPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <OrderedListPlayground />
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="OrderedList" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
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
