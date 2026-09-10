import { SectionHeader, TableList, Div, Heading, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import {
  docs,
  columns,
  accordionProps,
  accordionHeaderProps,
  accordionBodyProps,
  accordionItemProps,
} from './data/accordionData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import AccordionPlayground from '@/components/playground/AccordionPlayground';
const AccordionPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Accordion</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          An accordion is a vertically stacked list of items where each item can be expanded or collapsed to reveal or
          hide content. It allows users to manage and navigate large amounts of information within a limited space.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <AccordionPlayground />
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Accordion" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Accordion
          </Heading>
          <TableList columns={columns} rows={accordionProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Accordion Header
          </Heading>
          <TableList columns={columns} rows={accordionHeaderProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Accordion Body
          </Heading>
          <TableList columns={columns} rows={accordionBodyProps} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Accordion Item
          </Heading>
          <TableList columns={columns} rows={accordionItemProps} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default AccordionPage;
