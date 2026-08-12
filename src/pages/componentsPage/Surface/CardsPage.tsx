import { SectionHeader, TableList, Heading, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import {
  docs,
  columns,
  cardProps,
  cardHeaderProps,
  cardTitleProps,
  cardDescriptionProps,
  cardContentProps,
  cardFooterProps,
} from './data/cardData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
const CardsPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Card</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          A flexible container for grouping related content with header, body, and footer regions.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Card" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Card
          </Heading>
          <TableList columns={columns} rows={cardProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            CardHeader
          </Heading>
          <TableList columns={columns} rows={cardHeaderProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            CardTitle
          </Heading>
          <TableList columns={columns} rows={cardTitleProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            CardDescription
          </Heading>
          <TableList columns={columns} rows={cardDescriptionProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            CardContent
          </Heading>
          <TableList columns={columns} rows={cardContentProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            CardFooter
          </Heading>
          <TableList columns={columns} rows={cardFooterProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default CardsPage;
