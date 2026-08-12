import { docsData } from '@/types/docsData';
import { AlignedStackExample } from '../examples/AlignedStackExample';
import { BasicHorizontalStackExample } from '../examples/BasicHorizontalStackExample';
import { NestedStacksExample } from '../examples/NestedStacksExample';
import { VerticalStackExample } from '../examples/VerticalStackExample';
import { WrappedStackExample } from '../examples/WrappedStackExample';

export const docs: docsData[] = [
  {
    title: 'Basic Horizontal Stack',
    desc: 'A simple horizontal stack of items with default spacing.',
    code: `
import { Stack, Box, StackItem } from "kalki-ui";
export default function Example() {
  return (
    <Stack spacing={10}>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 1
        </Box>
      </StackItem>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 2
        </Box>
      </StackItem>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 3
        </Box>
      </StackItem>
    </Stack>
  );
}
`,
    snippet: <BasicHorizontalStackExample />,
  },
  {
    title: 'Vertical Stack with Custom Spacing',
    desc: 'A vertical stack of items with custom spacing.',
    code: `
import { Stack, Box, StackItem } from "kalki-ui";

export default function Example() {
  return (
    <Stack direction="column" spacing={20}>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 1
        </Box>
      </StackItem>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 2
        </Box>
      </StackItem>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item 3
        </Box>
      </StackItem>
    </Stack>
  );
}
`,
    snippet: <VerticalStackExample />,
  },
  {
    title: 'Stack with Custom Alignment',
    desc: 'A stack with custom justification and alignment.',
    code: `
import { Stack, Box, StackItem } from "kalki-ui";

export default function Example() {
  return (
    <Stack justifyContent="center" alignItems="center" style={{ height: "200px", border: "1px solid #ccc" }}>
      <StackItem>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Centered Item
        </Box>
      </StackItem>
    </Stack>
  );
}
`,
    snippet: <AlignedStackExample />,
  },
  {
    title: 'Wrapped Stack',
    desc: 'A stack that wraps its items when they exceed the container width.',
    code: `
import { Stack, Box, StackItem } from "kalki-ui";

export default function Example() {
  return (
    <Stack flexWrap="wrap" spacing={10} style={{ maxWidth: "300px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <StackItem key={item} style={{ padding: "10px" }}>
          <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
            Item {item}
          </Box>
        </StackItem>
      ))}
    </Stack>
  );
}
`,
    snippet: <WrappedStackExample />,
  },
  {
    title: 'Nested Stacks',
    desc: 'An example of nested stacks for more complex layouts.',
    code: `
import { Stack, Box, StackItem } from "kalki-ui";

export default function Example() {
  return (
    <Stack direction="column" spacing={20}>
      <StackItem>
        <Stack spacing={10}>
          <Box padding="10px" shadow="sm" rounded>
            <StackItem>
              <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
                Nested Item 1
              </Box>
            </StackItem>
            <StackItem>
              <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
                Nested Item 2
              </Box>
            </StackItem>
          </Box>
        </Stack>
      </StackItem>
      <StackItem>
        <Box padding="10px" shadow="sm" rounded>
          <Stack direction="column" spacing={5}>
            <StackItem>
              <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
                Nested Item 3
              </Box>
            </StackItem>
            <StackItem>
              <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
                Nested Item 4
              </Box>
            </StackItem>
          </Stack>
        </Box>
      </StackItem>
    </Stack>
  );
}
`,
    snippet: <NestedStacksExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const stackProps = [
  ['direction', 'string', 'row', "Specifies the direction of the stack. Possible values are 'row' and 'column'."],
  [
    'justifyContent',
    'string',
    'start',
    "Specifies how to distribute space between and around content items along the main axis. Possible values are 'start', 'center', 'end', 'between', and 'around'.",
  ],
  [
    'alignItems',
    'string',
    'stretch',
    "Specifies how to align items along the cross axis. Possible values are 'start', 'center', 'end', and 'stretch'.",
  ],
  [
    'alignContent',
    'string',
    'stretch',
    "Specifies how to align content when there is extra space in the cross axis. Possible values are 'start', 'center', 'end', and 'stretch'.",
  ],
  [
    'flexWrap',
    'string',
    'nowrap',
    "Specifies whether the flex items should wrap or not. Possible values are 'wrap' and 'nowrap'.",
  ],
  ['spacing', 'number', '0', 'Specifies the space between items in pixels.'],
  ['padding', 'string', '-', 'Specifies the padding for the stack container.'],
  ['className', 'string', '-', 'Additional CSS class for the stack container.'],
  ['children', 'node', '-', 'The content of the stack.'],
];

export const stackItemProps = [['children', 'node', '-', 'The content of the stack item. Required prop.']];

export const additionalNotes = [
  'The Stack component is built on top of flexbox, providing an easy way to create flexible layouts.',
  'StackItem is a wrapper around the Box component, allowing for additional customization of individual items.',
  'The Stack component forwards refs, allowing you to access the underlying DOM element if needed.',
  'You can nest Stack components to create more complex layouts.',
  'The spacing prop applies to both horizontal and vertical spacing between items.',
  'Custom styles can be applied to both the Stack and StackItem components using the style prop or custom CSS classes.',
  'The Stack component automatically handles the conversion of justifyContent, alignItems, and alignContent prop values to their corresponding CSS class names.',
];
