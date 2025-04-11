import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import {
  docs,
  columns,
  accordionProps,
  accordionHeaderProps,
  accordionBodyProps,
  accordionItemProps,
} from './data/accordionData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';

const AccordionPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Accordion</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          Users can expand an accordion section by clicking or tapping on a header, revealing additional details or
          subcategories. Accordions are often used for organizing content hierarchies, FAQs, or collapsible forms,
          enhancing user experience by reducing clutter and providing a structured, user-friendly interface.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
