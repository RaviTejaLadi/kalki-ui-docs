import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
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
import { Heading } from '@/components/common/Typography';
import Div from '@/components/common/Div';

const CardsPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Card</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          A flexible container for grouping related content with header, body, and footer regions.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} componentName="Card" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
