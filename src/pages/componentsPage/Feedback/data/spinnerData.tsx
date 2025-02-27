import Spinner from '@/components/common/Spinner/Spinner';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'variant',
    'string',
    'primary',
    "Specifies the visual variant of the Spinner. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', and 'light'. Each variant has its own color scheme defined by the colorMap object.",
  ],
  [
    'size',
    'string',
    'md',
    "Defines the size of the Spinner. Possible values are 'sm', 'md', 'lg', and 'xl', which correspond to different dimensions specified in the sizeMap object.",
  ],
  ['ref', 'ref', 'null', 'A React ref to be forwarded to the Spinner component, allowing access to the DOM element.'],
];

export const docs: docsData[] = [
  {
    title: 'Default Spinner',
    desc: "This is the default spinner with the 'primary' variant and 'md' size.",
    code: `
import { Spinner } from 'react-ui-essentials';

const App = () => (
  <Spinner />
);

export default App;
    `,
    snippet: <Spinner />,
  },
  {
    title: 'Custom Variant Spinner',
    desc: "This spinner uses the 'success' variant to display a green spinner.",
    code: `
import { Spinner } from 'react-ui-essentials';

const App = () => (
  <Spinner variant="success" />
);

export default App;
    `,
    snippet: <Spinner variant="success" />,
  },
  {
    title: 'Custom Size Spinner',
    desc: "This spinner uses the 'lg' size to display a larger spinner.",
    code: `
import { Spinner } from 'react-ui-essentials';

const App = () => (
  <Spinner size="lg" />
);

export default App;
    `,
    snippet: <Spinner size="lg" />,
  },
  {
    title: 'Custom Variant and Size Spinner',
    desc: "This spinner uses both the 'danger' variant and 'xl' size for a large red spinner.",
    code: `
import { Spinner } from 'react-ui-essentials';

const App = () => (
  <Spinner variant="danger" size="xl" />
);

export default App;
    `,
    snippet: <Spinner variant="danger" size="xl" />,
  },
  {
    title: 'Spinner with Additional Props',
    desc: "This spinner includes additional props such as 'aria-label' for accessibility.",
    code: `
import { Spinner } from 'react-ui-essentials';

const App = () => (
  <Spinner variant="info" size="sm" aria-label="Loading..." />
);

export default App;
    `,
    snippet: <Spinner variant="info" size="sm" aria-label="Loading..." />,
  },
];
