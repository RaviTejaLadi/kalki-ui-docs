import Spinner from '@/components/common/Spinner';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'variant',
    'string',
    'primary',
    "Specifies the visual variant of the Spinner. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', and 'light'.",
  ],
  ['size', 'string', 'sm', "Defines the size of the Spinner. Possible values are 'sm', 'md', 'lg', and 'xl'."],
  ['className', 'string', '-', 'Additional CSS classes applied to the spinner element.'],
  ['ref', 'ref', 'null', 'A React ref forwarded to the Spinner root element.'],
];

export const docs: docsData[] = [
  {
    title: 'Default Spinner',
    desc: "This is the default spinner with the 'primary' variant and default size.",
    code: `
import { Spinner } from "kalki-ui";

export default function DefaultSpinner() {
  return <Spinner />;
}
`,
    snippet: <Spinner />,
  },
  {
    title: 'Custom Variant Spinner',
    desc: "This spinner uses the 'success' variant to display a green spinner.",
    code: `
import { Spinner } from "kalki-ui";

export default function SuccessSpinner() {
  return <Spinner variant="success" />;
}
`,
    snippet: <Spinner variant="success" />,
  },
  {
    title: 'Custom Size Spinner',
    desc: "This spinner uses the 'lg' size to display a larger spinner.",
    code: `
import { Spinner } from "kalki-ui";

export default function LargeSpinner() {
  return <Spinner size="lg" />;
}
`,
    snippet: <Spinner size="lg" />,
  },
  {
    title: 'Custom Variant and Size Spinner',
    desc: "This spinner uses both the 'danger' variant and 'xl' size for a large red spinner.",
    code: `
import { Spinner } from "kalki-ui";

export default function DangerXlSpinner() {
  return <Spinner variant="danger" size="xl" />;
}
`,
    snippet: <Spinner variant="danger" size="xl" />,
  },
  {
    title: 'Spinner with Additional Props',
    desc: "This spinner includes additional props such as 'aria-label' for accessibility.",
    code: `
import { Spinner } from "kalki-ui";

export default function AccessibleSpinner() {
  return <Spinner variant="info" size="sm" aria-label="Loading..." />;
}
`,
    snippet: <Spinner variant="info" size="sm" aria-label="Loading..." />,
  },
];
