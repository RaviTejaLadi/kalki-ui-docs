import Accordion from '@/components/common/Accordion';
import Box from '@/components/common/Box';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Accordion',
    desc: 'This example demonstrates the basic usage of the Accordion component. It shows how to create a simple accordion with two items.',
    code: `
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0">Accordion Item #1</Accordion.Header>
          <Accordion.Body eventKey="0">This is the body content for the first accordion item.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header eventKey="1">Accordion Item #2</Accordion.Header>
          <Accordion.Body eventKey="1">This is the body content for the second accordion item.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      `,
    snippet: (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0">Accordion Item #1</Accordion.Header>
          <Accordion.Body eventKey="0">This is the body content for the first accordion item.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header eventKey="1">Accordion Item #2</Accordion.Header>
          <Accordion.Body eventKey="1">This is the body content for the second accordion item.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Custom Variant',
    desc: "This example shows how to use a custom variant for the Accordion. The 'secondary' variant is used here, which may have a different visual style.",
    code: `
      <Accordion variant="secondary">
        <Accordion.Item>
          <Accordion.Header eventKey="0">Secondary Accordion Item</Accordion.Header>
          <Accordion.Body eventKey="0">This accordion uses the secondary variant.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      `,
    snippet: (
      <Accordion variant="secondary">
        <Accordion.Item>
          <Accordion.Header eventKey="0">Secondary Accordion Item</Accordion.Header>
          <Accordion.Body eventKey="0">This accordion uses the secondary variant.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Custom Size',
    desc: "This example demonstrates how to use a custom size for the Accordion. The 'lg' size is used here for a larger accordion.",
    code: `
      <Accordion size="lg">
        <Accordion.Item>
          <Accordion.Header eventKey="0">Large Accordion Item</Accordion.Header>
          <Accordion.Body eventKey="0">This accordion uses the large size.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      `,
    snippet: (
      <Accordion size="lg">
        <Accordion.Item>
          <Accordion.Header eventKey="0">Large Accordion Item</Accordion.Header>
          <Accordion.Body eventKey="0">This accordion uses the large size.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Custom Icon',
    desc: 'This example shows how to use a custom icon in the Accordion Header. A custom icon is passed to replace the default arrow icon.',
    code: `
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0" icon={<span>🔽</span>}>
            Accordion with Custom Icon
          </Accordion.Header>
          <Accordion.Body eventKey="0">This accordion item uses a custom icon in its header.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      `,
    snippet: (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0" icon={<span>🔽</span>}>
            Accordion with Custom Icon
          </Accordion.Header>
          <Accordion.Body eventKey="0">This accordion item uses a custom icon in its header.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with Initially Open Item',
    desc: "This example demonstrates how to have an accordion item open by default using the 'open' prop on the AccordionHeader.",
    code: `
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0" open>
            Initially Open Item
          </Accordion.Header>
          <Accordion.Body eventKey="0">This accordion item is open by default.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header eventKey="1">Closed Item</Accordion.Header>
          <Accordion.Body eventKey="1">This accordion item is closed by default.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      `,
    snippet: (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0" open>
            Initially Open Item
          </Accordion.Header>
          <Accordion.Body eventKey="0">This accordion item is open by default.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header eventKey="1">Closed Item</Accordion.Header>
          <Accordion.Body eventKey="1">This accordion item is closed by default.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ),
  },
  {
    title: 'Accordion with All Available Variants',
    code: `
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
            <Accordion.Header eventKey="0">{item}</Accordion.Header>
            <Accordion.Body eventKey="0">This accordion is {item}.</Accordion.Body>
          </Accordion>
        ))}
      </Box>
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
            <Accordion.Header eventKey="0">{item}</Accordion.Header>
            <Accordion.Body eventKey="0">This accordion is {item}.</Accordion.Body>
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
    'The content to be rendered inside the Accordion component. This should include Accordion.Item components.',
  ],
  ['className', 'string', '-', 'Additional CSS classes to apply to the Accordion container.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the Accordion container.'],
];

export const accordionItemProps = [
  [
    'children',
    'ReactNode',
    'null',
    'The content inside the Accordion.Item, typically Accordion.Header and Accordion.Body.',
  ],
  ['className', 'string', '-', 'Additional CSS classes for the Accordion.Item.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the Accordion.Item.'],
];

export const accordionHeaderProps = [
  ['children', 'ReactNode', 'null', 'The header text or elements displayed inside the Accordion.Header.'],
  ['eventKey', 'string', '-', 'Unique identifier for the Accordion.Header and Accordion.Body pair.'],
  ['open', 'boolean', 'false', 'If true, the Accordion.Header opens its corresponding Accordion.Body by default.'],
  ['icon', 'ReactNode', '<ChevronDown />', 'Optional custom icon displayed on the right side of the header.'],
  ['className', 'string', '-', 'Additional CSS classes for the Accordion.Header.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the Accordion.Header.'],
];

export const accordionBodyProps = [
  ['children', 'ReactNode', 'null', 'The content displayed when the Accordion.Body is expanded.'],
  ['eventKey', 'string', '-', 'Unique identifier linking this Accordion.Body to its corresponding Accordion.Header.'],
  ['className', 'string', '-', 'Additional CSS classes for the Accordion.Body.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the Accordion.Body.'],
];
