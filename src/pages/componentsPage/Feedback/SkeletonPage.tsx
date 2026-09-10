import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/skeletonData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import SkeletonPlayground from '@/components/playground/SkeletonPlayground';

const metaData: IMetaData = {
  title: 'Skeleton',
  description:
    'Loading placeholders that pulse while content is being fetched, helping users understand layout before data arrives.',
};

const SkeletonPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <SkeletonPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Skeleton" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default SkeletonPage;
