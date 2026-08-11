import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows } from './data/galleryData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { IMetaData } from '@/types/metaData';
import Head from '@/components/Head';

const metaData: IMetaData = {
  title: 'Gallery',
  description: 'Flexible image and media layouts with grid, masonry, carousel, asymmetric, and compact patterns.',
};

const GalleryPage = () => {
  return (
    <div className="container">
      <Head {...metaData} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">{metaData.title}</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">{metaData.description}</SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Gallery" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default GalleryPage;
