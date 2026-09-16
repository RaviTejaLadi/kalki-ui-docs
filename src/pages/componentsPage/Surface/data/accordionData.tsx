import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Box } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Accordion',
    desc: 'A simple accordion with two independent sections.',
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function BasicAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader eventKey="0">Accordion Item #1</AccordionHeader>
        <AccordionBody eventKey="0">This is the body content for the first accordion item.</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader eventKey="1">Accordion Item #2</AccordionHeader>
        <AccordionBody eventKey="1">This is the body content for the second accordion item.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
`,
    snippet: (
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey="0">Accordion Item #1</AccordionHeader>
          <AccordionBody eventKey="0">This is the body content for the first accordion item.</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader eventKey="1">Accordion Item #2</AccordionHeader>
          <AccordionBody eventKey="1">This is the body content for the second accordion item.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: 'Theme Aware Styling',
    desc: 'Accordion styles automatically adapt to the current app theme.',
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, Box } from "kalki-ui";

export default function AccordionThemes() {
  return (
    <Box style={{ display: "grid", gap: "12px" }}>
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey="theme-1">Theme-aware section</AccordionHeader>
          <AccordionBody eventKey="theme-1">Styled with automatic light/dark classes.</AccordionBody>
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey="theme-2">Another section</AccordionHeader>
          <AccordionBody eventKey="theme-2">Use standard composition without a variant prop.</AccordionBody>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
`,
    snippet: (
      <Box style={{ display: 'grid', gap: '12px' }}>
        <Accordion>
          <AccordionItem>
            <AccordionHeader eventKey="theme-1">Theme-aware section</AccordionHeader>
            <AccordionBody eventKey="theme-1">Styled with automatic light/dark classes.</AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem>
            <AccordionHeader eventKey="theme-2">Another section</AccordionHeader>
            <AccordionBody eventKey="theme-2">Use standard composition without a variant prop.</AccordionBody>
          </AccordionItem>
        </Accordion>
      </Box>
    ),
  },
  {
    title: 'Accordion with Custom Size',
    desc: 'Adjust header and body spacing with the size prop.',
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function LargeAccordion() {
  return (
    <Accordion size="lg">
      <AccordionItem>
        <AccordionHeader eventKey="0">Large Accordion Item</AccordionHeader>
        <AccordionBody eventKey="0">This accordion uses the large size.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
`,
    snippet: (
      <Accordion size="lg">
        <AccordionItem>
          <AccordionHeader eventKey="0">Large Accordion Item</AccordionHeader>
          <AccordionBody eventKey="0">This accordion uses the large size.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Custom Icon',
    desc: 'Replace the default chevron with your own icon.',
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function CustomIconAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader eventKey="0" icon={<span>+</span>}>
          Accordion with Custom Icon
        </AccordionHeader>
        <AccordionBody eventKey="0">This accordion item uses a custom icon in its header.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
`,
    snippet: (
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey="0" icon={<span>+</span>}>
            Accordion with Custom Icon
          </AccordionHeader>
          <AccordionBody eventKey="0">This accordion item uses a custom icon in its header.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const accordionProps = [
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl'`, 'sm', 'Specifies the spacing and text scale.'],
  ['children', 'ReactNode', 'null', 'Accordion item content.'],
  ['className', 'string', '-', 'Additional CSS classes to apply to the accordion container.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the accordion container.'],
];

export const accordionItemProps = [
  ['children', 'ReactNode', 'null', 'The content inside AccordionItem.'],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionItem.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionItem.'],
];

export const accordionHeaderProps = [
  ['children', 'ReactNode', 'null', 'Header text or elements displayed inside AccordionHeader.'],
  ['eventKey', 'string', '-', 'Unique identifier for the AccordionHeader and AccordionBody pair.'],
  ['open', 'boolean', 'false', 'Controls whether this section starts open.'],
  ['icon', 'ReactNode', '<ChevronDown />', 'Optional custom icon displayed on the right side.'],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionHeader.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionHeader.'],
];

export const accordionBodyProps = [
  ['children', 'ReactNode', 'null', 'Content displayed when the item is expanded.'],
  ['eventKey', 'string', '-', 'Unique identifier linking this body to its header.'],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionBody.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionBody.'],
];
