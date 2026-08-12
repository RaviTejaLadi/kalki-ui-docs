import { Accordion, Box, AccordionHeader, AccordionBody, AccordionItem } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Accordion',
    desc: 'This example demonstrates the basic usage of the Accordion component. It shows how to create a simple accordion with two items.',
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
    title: 'Accordion with Custom Variant',
    desc: "This example shows how to use a custom variant for the Accordion. The 'secondary' variant is used here, which may have a different visual style.",
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function SecondaryAccordion() {
  return (
    <Accordion variant="secondary">
      <AccordionItem>
        <AccordionHeader eventKey="0">Secondary Accordion Item</AccordionHeader>
        <AccordionBody eventKey="0">This accordion uses the secondary variant.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
`,
    snippet: (
      <Accordion variant="secondary">
        <AccordionItem>
          <AccordionHeader eventKey="0">Secondary Accordion Item</AccordionHeader>
          <AccordionBody eventKey="0">This accordion uses the secondary variant.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Custom Size',
    desc: "This example demonstrates how to use a custom size for the Accordion. The 'lg' size is used here for a larger accordion.",
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
    desc: 'This example shows how to use a custom icon in the Accordion Header. A custom icon is passed to replace the default arrow icon.',
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function CustomIconAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader eventKey="0" icon={<span>🔽</span>}>
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
          <AccordionHeader eventKey="0" icon={<span>🔽</span>}>
            Accordion with Custom Icon
          </AccordionHeader>
          <AccordionBody eventKey="0">This accordion item uses a custom icon in its header.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Initially Open Item',
    desc: "This example demonstrates how to have an accordion item open by default using the 'open' prop on the AccordionHeader.",
    code: `
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "kalki-ui";

export default function InitiallyOpenAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader eventKey="0" open>
          Initially Open Item
        </AccordionHeader>
        <AccordionBody eventKey="0">This accordion item is open by default.</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader eventKey="1">Closed Item</AccordionHeader>
        <AccordionBody eventKey="1">This accordion item is closed by default.</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
`,
    snippet: (
      <Accordion>
        <AccordionItem>
          <AccordionHeader eventKey="0" open>
            Initially Open Item
          </AccordionHeader>
          <AccordionBody eventKey="0">This accordion item is open by default.</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader eventKey="1">Closed Item</AccordionHeader>
          <AccordionBody eventKey="1">This accordion item is closed by default.</AccordionBody>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with All Available Variants',
    code: `
import { Accordion, Box, AccordionHeader, AccordionBody } from "kalki-ui";

export default function AccordionVariants() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {(
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "help",
          "info",
          "dark",
          "light",
        ] as const
      ).map((item) => (
        <Accordion key={item} variant={item} size="sm">
          <AccordionHeader eventKey="0">{item}</AccordionHeader>
          <AccordionBody eventKey="0">This accordion is {item}.</AccordionBody>
        </Accordion>
      ))}
    </Box>
  );
}
`,
    snippet: (
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'help' as const,
          'info' as const,
          'dark' as const,
          'light' as const,
        ].map((item) => (
          <Accordion key={item} variant={item} size="sm">
            <AccordionHeader eventKey="0">{item}</AccordionHeader>
            <AccordionBody eventKey="0">This accordion is {item}.</AccordionBody>
          </Accordion>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const accordionProps = [
  [
    'variant',
    `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light'`,
    'primary',
    'Specifies the visual variant of the Accordion.',
  ],
  ['size', `'sm' | 'md' | 'lg' | 'xl' | '2xl'`, 'sm', 'Specifies the size of the Accordion.'],
  [
    'children',
    'ReactNode',
    'null',
    'The content to be rendered inside the Accordion component. This should include AccordionItem components.',
  ],
  ['className', 'string', '-', 'Additional CSS classes to apply to the Accordion container.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the Accordion container.'],
];

export const accordionItemProps = [
  [
    'children',
    'ReactNode',
    'null',
    'The content inside the AccordionItem, typically AccordionHeader and AccordionBody.',
  ],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionItem.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionItem.'],
];

export const accordionHeaderProps = [
  ['children', 'ReactNode', 'null', 'The header text or elements displayed inside the AccordionHeader.'],
  ['eventKey', 'string', '-', 'Unique identifier for the AccordionHeader and AccordionBody pair.'],
  ['open', 'boolean', 'false', 'If true, the AccordionHeader opens its corresponding AccordionBody by default.'],
  ['icon', 'ReactNode', '<ChevronDown />', 'Optional custom icon displayed on the right side of the header.'],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionHeader.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionHeader.'],
];

export const accordionBodyProps = [
  ['children', 'ReactNode', 'null', 'The content displayed when the AccordionBody is expanded.'],
  ['eventKey', 'string', '-', 'Unique identifier linking this AccordionBody to its corresponding AccordionHeader.'],
  ['className', 'string', '-', 'Additional CSS classes for the AccordionBody.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the AccordionBody.'],
];
