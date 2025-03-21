import Badge from '@/components/common/Badge';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Badge',
    desc: 'This example demonstrates the most basic usage of the Badge component with default size (small) and primary variant.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
      <>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'help' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Badge size="sm" key={item} variant={item} style={{ margin: '0px 4px' }}>
            {item}
          </Badge>
        ))}
      </>
);
      `,
    snippet: (
      <>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'help' as const,
          'light' as const,
          'dark' as const,
        ].map((item) => (
          <Badge size="sm" key={item} variant={item} style={{ margin: '0px 4px' }}>
            {item}
          </Badge>
        ))}
      </>
    ),
  },
  {
    title: 'Medium Badge',
    desc: 'This example shows how to use the Badge component with a medium size.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge size="md">Medium Badge</Badge>
);
      `,
    snippet: <Badge size="md">Medium Badge</Badge>,
  },
  {
    title: 'Large Badge',
    desc: 'This example shows how to use the Badge component with a large size.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge size="lg">Large Badge</Badge>
);
      `,
    snippet: <Badge size="lg">Large Badge</Badge>,
  },
  {
    title: 'Secondary Variant Badge',
    desc: 'This example demonstrates the usage of the secondary variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="secondary">Secondary Badge</Badge>
);
      `,
    snippet: <Badge variant="secondary">Secondary Badge</Badge>,
  },
  {
    title: 'Success Variant Badge',
    desc: 'This example shows how to use the success variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="success">Success Badge</Badge>
);
      `,
    snippet: <Badge variant="success">Success Badge</Badge>,
  },
  {
    title: 'Danger Variant Badge',
    desc: 'This example demonstrates the usage of the danger variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="danger">Danger Badge</Badge>
);
      `,
    snippet: <Badge variant="danger">Danger Badge</Badge>,
  },
  {
    title: 'Warning Variant Badge',
    desc: 'This example shows how to use the warning variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="warning">Warning Badge</Badge>
);
      `,
    snippet: <Badge variant="warning">Warning Badge</Badge>,
  },
  {
    title: 'Info Variant Badge',
    desc: 'This example demonstrates the usage of the info variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="info">Info Badge</Badge>
);
      `,
    snippet: <Badge variant="info">Info Badge</Badge>,
  },
  {
    title: 'Light Variant Badge',
    desc: 'This example shows how to use the light variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="light">Light Badge</Badge>
);
      `,
    snippet: <Badge variant="light">Light Badge</Badge>,
  },
  {
    title: 'Dark Variant Badge',
    desc: 'This example demonstrates the usage of the dark variant for the Badge component.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge variant="dark">Dark Badge</Badge>
);
      `,
    snippet: <Badge variant="dark">Dark Badge</Badge>,
  },
  {
    title: 'Pill Badge',
    desc: 'This example shows how to use the pill property to create a rounded badge.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge pill>Pill Badge</Badge>
);
      `,
    snippet: <Badge pill>Pill Badge</Badge>,
  },
  {
    title: 'Large Pill Badge with Danger Variant',
    desc: 'This example combines the pill, size, and variant properties to create a large, rounded badge with the danger variant.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge size="lg" variant="danger" pill>Large Danger Pill Badge</Badge>
);
      `,
    snippet: (
      <Badge size="lg" variant="danger" pill>
        Large Danger Pill Badge
      </Badge>
    ),
  },
  {
    title: 'Badge with Additional Properties',
    desc: 'This example demonstrates passing additional properties to the Badge component, such as an onClick handler.',
    code: `
import { Badge } from "kalki-ui";

const App = () => (
  <Badge onClick={() => alert('Badge clicked')}>Clickable Badge</Badge>
);
      `,
    snippet: <Badge onClick={() => alert('Badge clicked')}>Clickable Badge</Badge>,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'sm', 'Defines size of the badge. [sm, md, lg] '],
  [
    'variant',
    'string',
    'primary',
    'It specifies the visual style of the badge. [ primary, secondary, success, danger, warning, info, light, dark]',
  ],
  ['children', 'node', 'null', 'Used to get the child elements of the component.'],
  ['pill', 'bool', 'null', 'used to get pill shaped badge'],
];
