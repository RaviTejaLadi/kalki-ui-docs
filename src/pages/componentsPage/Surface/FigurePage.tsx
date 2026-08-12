import { SectionHeader, Separator, TableList, Heading, Div, SectionHeaderTitle } from 'kalki-ui';
import { docs, columns, figureProps, figureImageProps, figureCaptionProps } from './data/figureData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
const FigurePage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Figure</SectionHeaderTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Figure" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Figure
          </Heading>
          <TableList columns={columns} rows={figureProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Figure Image
          </Heading>
          <TableList columns={columns} rows={figureImageProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Figure Caption
          </Heading>
          <TableList columns={columns} rows={figureCaptionProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default FigurePage;
