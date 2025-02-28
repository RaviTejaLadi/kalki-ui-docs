import Accordion from '@/components/common/Accordion';
import Box from '@/components/common/Box';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Accordion',
    desc: 'This example demonstrates the basic usage of the Accordion component. It shows how to create a simple accordion with two items.',
    code: `
import { Accordion } from 'kalki-ui';

function BasicAccordion() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header eventKey="0">Accordion Item #1</Accordion.Header>
        <Accordion.Body eventKey="0">
          This is the body content for the first accordion item.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header eventKey="1">Accordion Item #2</Accordion.Header>
        <Accordion.Body eventKey="1">
          This is the body content for the second accordion item.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
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
import { Accordion } from 'kalki-ui';

function SecondaryAccordion() {
  return (
    <Accordion variant="secondary">
      <Accordion.Item>
        <Accordion.Header eventKey="0">Secondary Accordion Item</Accordion.Header>
        <Accordion.Body eventKey="0">
          This accordion uses the secondary variant.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
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
import { Accordion } from 'kalki-ui';

function LargeAccordion() {
  return (
    <Accordion size="lg">
      <Accordion.Item>
        <Accordion.Header eventKey="0">Large Accordion Item</Accordion.Header>
        <Accordion.Body eventKey="0">
          This accordion uses the large size.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
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
import { Accordion } from 'kalki-ui';
import CustomIcon from './CustomIcon';

function CustomIconAccordion() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header eventKey="0" icon={<CustomIcon />}>
          Accordion with Custom Icon
        </Accordion.Header>
        <Accordion.Body eventKey="0">
          This accordion item uses a custom icon in its header.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
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
import { Accordion } from 'kalki-ui';

function OpenAccordion() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header eventKey="0" open={true}>Initially Open Item</Accordion.Header>
        <Accordion.Body eventKey="0">
          This accordion item is open by default.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header eventKey="1">Closed Item</Accordion.Header>
        <Accordion.Body eventKey="1">
          This accordion item is closed by default.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
      `,
    snippet: (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header eventKey="0" open>Initially Open Item</Accordion.Header>
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
import { Accordion } from 'kalki-ui';

function Variants() {
  return (
    <Box>
    {["primary", "secondary", "success", "danger", "warning", "help", "info", "dark", "light"].map((item) => (
      <Accordion variant={item} size="sm">
        <Accordion.Header eventKey="0">Initially Open Item</Accordion.Header>
        <Accordion.Body eventKey="0">This accordion item is open by default.</Accordion.Body>
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
    'string',
    'primary',
    "Specifies the visual variant of the Accordion. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'help', 'info', 'dark', and 'light'.",
  ],
  ['size', 'string', 'sm', "Specifies the size of the Accordion. Possible values are 'sm', 'md', and 'lg'."],
  [
    'children',
    'node',
    'null',
    'The content to be rendered inside the Accordion component. This should be Accordion.Item components.',
  ],
];

export const accordionHeaderProps = [
  [
    'eventKey',
    'string',
    'required',
    'A unique identifier for the accordion item. This is used to control the open/close state.',
  ],
  ['icon', 'node', 'ArrowDropDown', 'An optional custom icon to use instead of the default arrow icon.'],
  ['open', 'boolean', 'false', 'If true, the accordion item will be open by default.'],
  ['children', 'node', 'null', 'The content to be rendered inside the Accordion.Header component.'],
];

export const accordionBodyProps = [
  [
    'eventKey',
    'string',
    'required',
    'A unique identifier for the accordion item. This should match the eventKey of the corresponding Accordion.Header.',
  ],
  ['children', 'node', 'null', 'The content to be rendered inside the Accordion.Body component.'],
];

export const accordionItemProps = [
  [
    'children',
    'node',
    'null',
    'The content to be rendered inside the Accordion.Item component. This should typically be an Accordion.Header and an Accordion.Body.',
  ],
];
