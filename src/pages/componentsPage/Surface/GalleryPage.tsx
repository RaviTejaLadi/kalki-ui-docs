import { SectionHeader, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows } from './data/galleryData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';
import GalleryPlayground from '@/components/playground/GalleryPlayground';

const metaData: IMetaData = {
  title: 'Gallery',
  description: 'Flexible image and media layouts with grid, masonry, carousel, asymmetric, and compact patterns.',
};

const GalleryPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">{metaData.title}</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">{metaData.description}</SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <GalleryPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="GalleryImage" deepImport="gallery" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default GalleryPage;
