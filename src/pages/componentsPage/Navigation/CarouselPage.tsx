import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import {
  docs,
  columns,
  carouselRows,
  carouselSlides,
  carouselContent,
  carouselControls,
  carouselDots,
} from './data/carouselData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { Heading } from '@/components/common/Typography';

const CarouselPage = () => {
  return (
    <div>
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Carousel</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          The Carousel component is a reusable React component that displays a set of slides with navigation controls.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer data={docs} />
      <Heading as="h6" className="mb-2 text-muted-foreground">
        carousel
      </Heading>
      <TableList columns={columns} rows={carouselRows} code CodeColumn={0} />
      <Heading as="h6" className="mb-2 text-muted-foreground">
        Carousel Slides
      </Heading>
      <TableList columns={columns} rows={carouselSlides} code CodeColumn={0} />
      <Heading as="h6" className="mb-2 text-muted-foreground">
        Carousel Content
      </Heading>
      <TableList columns={columns} rows={carouselContent} code CodeColumn={0} />
      <Heading as="h6" className="mb-2 text-muted-foreground">
        Carousel Controls
      </Heading>
      <TableList columns={columns} rows={carouselControls} code CodeColumn={0} />
      <Heading as="h6" className="mb-2 text-muted-foreground">
        Carousel Dots
      </Heading>
      <TableList columns={columns} rows={carouselDots} code CodeColumn={0} />
    </div>
  );
};

export default CarouselPage;
