import Box from '@/components/common/Box';
import LinkButton from '@/components/common/LinkButton';
import Ripple from '@/components/common/Ripple';
import { docsData } from '@/types/docsData';
import { Terminal } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic LinkButton',
    desc: 'This example demonstrates the most basic usage of the LinkButton component with default properties.',
    code: `
      <LinkButton>
        Click me
        <Ripple />
      </LinkButton>
      `,
    snippet: (
      <LinkButton>
        Click me
        <Ripple />
      </LinkButton>
    ),
  },
  {
    title: 'LinkButton Variants',
    desc: 'This example shows different variants of the LinkButton component.',
    code: `
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <LinkButton variant="primary">Primary</LinkButton>
        <LinkButton variant="secondary">Secondary</LinkButton>
        <LinkButton variant="success">Success</LinkButton>
        <LinkButton variant="danger">Danger</LinkButton>
        <LinkButton variant="warning">Warning</LinkButton>
        <LinkButton variant="info">Info</LinkButton>
      </Box>
      `,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <LinkButton variant="primary">Primary</LinkButton>
        <LinkButton variant="secondary">Secondary</LinkButton>
        <LinkButton variant="success">Success</LinkButton>
        <LinkButton variant="danger">Danger</LinkButton>
        <LinkButton variant="warning">Warning</LinkButton>
        <LinkButton variant="info">Info</LinkButton>
      </Box>
    ),
  },
  {
    title: 'LinkButton Sizes',
    desc: 'This example demonstrates different sizes of the LinkButton component.',
    code: `
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <LinkButton size="sm">Small</LinkButton>
        <LinkButton size="md">Medium</LinkButton>
        <LinkButton size="lg">Large</LinkButton>
      </Box>
      `,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <LinkButton size="sm">Small</LinkButton>
        <LinkButton size="md">Medium</LinkButton>
        <LinkButton size="lg">Large</LinkButton>
      </Box>
    ),
  },
  {
    title: 'Raised LinkButton',
    desc: 'This example shows how to create a raised LinkButton with a shadow effect.',
    code: `
      <LinkButton raised variant="primary">
        Raised LinkButton
      </LinkButton>
      `,
    snippet: (
      <LinkButton raised variant="primary">
        Raised LinkButton
      </LinkButton>
    ),
  },
  {
    title: 'Rounded LinkButton',
    desc: 'This example demonstrates how to create a LinkButton with rounded corners.',
    code: `
      <LinkButton rounded variant="success">
        Rounded LinkButton
      </LinkButton>
      `,
    snippet: (
      <LinkButton rounded variant="success">
        Rounded LinkButton
      </LinkButton>
    ),
  },
  {
    title: 'LinkButton with Icon and Text',
    desc: 'This example demonstrates how to use LinkButtonIcon and LinkButtonText components together.',
    code: `
      <LinkButton variant="primary">
        <LinkButton.Icon>💖</LinkButton.Icon>
        <LinkButton.Text>Like</LinkButton.Text>
      </LinkButton>
      `,
    snippet: (
      <LinkButton variant="primary">
        <LinkButton.Icon>💖</LinkButton.Icon>
        <LinkButton.Text>Like</LinkButton.Text>
      </LinkButton>
    ),
  },
  {
    title: 'LinkButton with only Icon',
    desc: '',
    code: `
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <LinkButton key={item} size="sm" variant={item}>
            <LinkButton.Icon>
              <Terminal width="20px" height="20px" />
            </LinkButton.Icon>
          </LinkButton>
        ))}
      </Box>
      `,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <LinkButton key={item} size="sm" variant={item}>
            <LinkButton.Icon>
              <Terminal width="20px" height="20px" />
            </LinkButton.Icon>
          </LinkButton>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'sm', 'Defines size of the LinkButton. [sm, md, lg, xl, xxl] '],
  [
    'variant',
    'string',
    'primary',
    'It specifies the visual style of the badge. [ primary, secondary, success, danger, warning, info, help, light, dark]',
  ],
  ['children', 'node', 'null', 'Used to get the child elements of the component.'],
  ['to', 'string', 'null', 'to navigate to a new page '],
  ['className', 'string', 'null', 'to declare class of LinkButton component.'],
  ['raised', 'bool', 'false', 'Add a shadow to indicate elevation.'],
  ['style', 'object', '{}', 'to provide custom styles to LinkButton component.'],
  ['rounded', 'bool', 'false', 'Add a circular border radius to the LinkButton.'],
];

export const componentHierarchyCode = `
  <LinkButton >
    <LinkButton.Icon>

    </LinkButton.Icon>
    <LinkButton.Text>

    </LinkButton.Text>
  </LinkButton>
`;
