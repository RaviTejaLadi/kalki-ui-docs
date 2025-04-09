import Box from '@/components/common/Box';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Box',
    desc: 'This example demonstrates the most basic usage of the Box component with default properties.',
    code: `
import { Box } from "react-ui-essentials";

const App = () => (
  <Box backgroundColor="#e0f7fa" padding="20px">
    <h2>Simple Box</h2>
    <p>This is a simple box with background color and padding.</p>
  </Box>
);
      `,
    snippet: (
      <Box backgroundColor="#e0f7fa" padding="20px">
        <h2>Simple Box</h2>
        <p>This is a simple box with background color and padding.</p>
      </Box>
    ),
  },
  {
    title: 'Box with Custom Dimensions',
    desc: 'This example shows how to use the Box component with custom width and height.',
    code: `
import { Box } from "react-ui-essentials";
  
const App = () => (
  <Box width="300px" height="150px" backgroundColor="#ffecb3" padding="10px">
    <h2>Custom Size Box</h2>
    <p>This box has a custom width and height.</p>
  </Box>
);
      `,
    snippet: (
      <Box width="300px" height="150px" backgroundColor="#ffecb3" padding="10px">
        <h2>Custom Size Box</h2>
        <p>This box has a custom width and height.</p>
      </Box>
    ),
  },

  {
    title: 'Outlined Box',
    desc: 'This example demonstrates how to add an outline to the Box using the outlined prop.',
    code: `
import { Box } from "react-ui-essentials";

const App = () => (
  <Box outlined padding="20px" margin="10px" style={{ borderColor: "#1976d2", borderWidth: "2px" }}>
    <h2>Outlined Box</h2>
    <p>This box has a custom outline.</p>
  </Box>
);
      `,
    snippet: (
      <Box outlined padding="20px" margin="10px" style={{ borderColor: '#1976d2', borderWidth: '2px' }}>
        <h2 className="text-muted-foreground">Outlined Box</h2>
        <p className="text-muted-foreground">This box has a custom outline.</p>
      </Box>
    ),
  },
  {
    title: 'Box with Mixed Styles',
    desc: 'This example demonstrates how to customize the text and background colors of the Box.',
    code: `
import { Box } from "react-ui-essentials";

const App = () => (
    <Box
      width="250px"
      height="150px"
      shadow="xxl"
      rounded
      outlined
      padding="15px"
      margin="15px"
      color="#4a148c"
      backgroundColor="#ede7f6"
    >
      <h2>Mixed Styles Box</h2>
      <p>This box combines various styles.</p>
    </Box>
);
      `,
    snippet: (
      <Box
        width="250px"
        height="150px"
        shadow="2xl"
        rounded
        outlined
        padding="15px"
        margin="15px"
        color="#4a148c"
        backgroundColor="#ede7f6"
      >
        <h2>Mixed Styles Box</h2>
        <p>This box combines various styles.</p>
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['children', 'node', 'null', 'Content to be displayed inside the Box component.'],
  ['className', 'string', 'null', 'Additional custom class names to apply to the Box component.'],
  ['style', 'object', '{}', 'Inline styles to apply to the Box component.'],
  [
    'shadow',
    'number',
    '',
    'Box-shadow level for the Box component. Acceptable values range from none,normal,sm,md,lg,xl,2xl,inner.',
  ],
  ['height', 'string', "'auto'", 'Height of the Box component.'],
  ['margin', 'string', "'0'", 'Margin around the Box component.'],
  ['padding', 'string', "'0'", 'Padding inside the Box component.'],
  ['outlined', 'bool', 'false', 'If true, the Box component will have a border outline.'],
  ['rounded', 'bool', 'false', 'If true, the Box component will have rounded corners.'],
  ['width', 'string', "'auto'", 'Width of the Box component.'],
  ['color', 'string', 'null', 'Text color for the content inside the Box component.'],
  ['backgroundColor', 'string', 'null', 'Background color for the Box component.'],
];
