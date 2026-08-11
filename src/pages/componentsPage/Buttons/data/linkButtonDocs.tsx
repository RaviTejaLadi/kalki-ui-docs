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
import { LinkButton, Ripple } from "kalki-ui";

export default function BasicLinkButton() {
  return (
    <LinkButton>
      Click me
      <Ripple />
    </LinkButton>
  );
}
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
import { LinkButton, Box } from "kalki-ui";

export default function LinkButtonVariants() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <LinkButton variant="primary">Primary</LinkButton>
      <LinkButton variant="secondary">Secondary</LinkButton>
      <LinkButton variant="success">Success</LinkButton>
      <LinkButton variant="danger">Danger</LinkButton>
      <LinkButton variant="warning">Warning</LinkButton>
      <LinkButton variant="info">Info</LinkButton>
    </Box>
  );
}
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
import { LinkButton, Box } from "kalki-ui";

export default function LinkButtonSizes() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <LinkButton size="sm">Small</LinkButton>
      <LinkButton size="md">Medium</LinkButton>
      <LinkButton size="lg">Large</LinkButton>
    </Box>
  );
}
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
import { LinkButton } from "kalki-ui";

export default function RaisedLinkButton() {
  return (
    <LinkButton raised variant="primary">
      Raised LinkButton
    </LinkButton>
  );
}
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
import { LinkButton } from "kalki-ui";

export default function RoundedLinkButton() {
  return (
    <LinkButton rounded variant="success">
      Rounded LinkButton
    </LinkButton>
  );
}
`,
    snippet: (
      <LinkButton rounded variant="success">
        Rounded LinkButton
      </LinkButton>
    ),
  },
  {
    title: 'LinkButton with Icon and Text',
    desc: 'This example demonstrates how to use LinkButton.Icon and LinkButton.Text together.',
    code: `
import { LinkButton } from "kalki-ui";

export default function LinkButtonWithIconAndText() {
  return (
    <LinkButton variant="primary">
      <LinkButton.Icon>💖</LinkButton.Icon>
      <LinkButton.Text>Like</LinkButton.Text>
    </LinkButton>
  );
}
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
    desc: 'Icon-only LinkButton examples across variants.',
    code: `
import { LinkButton, Box } from "kalki-ui";
import { Terminal } from "lucide-react";

export default function LinkButtonIconOnly() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {(
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ] as const
      ).map((item) => (
        <LinkButton key={item} size="sm" variant={item}>
          <LinkButton.Icon>
            <Terminal width="20px" height="20px" />
          </LinkButton.Icon>
        </LinkButton>
      ))}
    </Box>
  );
}
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
  ['size', 'string', 'sm', 'Defines size of the LinkButton. [xs, sm, md, lg, xl, 2xl, 3xl]'],
  [
    'variant',
    'string',
    'primary',
    'Visual style of the LinkButton. [primary, secondary, success, danger, warning, info, help, light, dark, outline, ghost, link]',
  ],
  ['children', 'node', 'null', 'Child elements of the LinkButton.'],
  ['to', 'string', "''", 'Destination path for navigation.'],
  ['className', 'string', 'null', 'Additional CSS classes for the LinkButton.'],
  ['raised', 'bool', 'false', 'Adds a shadow to indicate elevation.'],
  ['style', 'object', '{}', 'Inline styles for the LinkButton.'],
  ['rounded', 'bool', 'false', 'Applies a fully rounded border radius.'],
];

export const componentHierarchyCode = `
  <LinkButton>
    <LinkButton.Icon>

    </LinkButton.Icon>
    <LinkButton.Text>

    </LinkButton.Text>
  </LinkButton>
`;
