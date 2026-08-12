import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
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
const CarouselPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Carousel</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          The Carousel component is a reusable React component that displays a set of slides with navigation controls.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer data={docs} componentName="Carousel" />
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            carousel
          </Heading>
          <TableList columns={columns} rows={carouselRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Carousel Slides
          </Heading>
          <TableList columns={columns} rows={carouselSlides} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Carousel Content
          </Heading>
          <TableList columns={columns} rows={carouselContent} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Carousel Controls
          </Heading>
          <TableList columns={columns} rows={carouselControls} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Carousel Dots
          </Heading>
          <TableList columns={columns} rows={carouselDots} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default CarouselPage;
