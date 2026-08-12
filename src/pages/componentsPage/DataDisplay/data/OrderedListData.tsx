import { Box, OrderedList, OrderedListItem } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const orderedListRows = [
  [
    'children',
    'node',
    'required',
    'The content to be rendered inside the OrderedList component. This should be OrderedListItem components.',
  ],
  [
    'type',
    'string',
    '1',
    "Specifies the type of marker to use for the list items. Possible values are '1', 'a', 'A', 'i', or 'I'.",
  ],
];

export const listItemRows = [
  ['children', 'any', 'undefined', 'The content to be rendered inside the ListItem component.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple OrderedList component with default numeric markers.',
    code: `
import { OrderedList, OrderedListItem } from "kalki-ui";

export default function BasicOrderedList() {
  return (
    <OrderedList>
      <OrderedListItem>First item</OrderedListItem>
      <OrderedListItem>Second item</OrderedListItem>
      <OrderedListItem>Third item</OrderedListItem>
    </OrderedList>
  );
}
`,
    snippet: (
      <OrderedList>
        <OrderedListItem>First item</OrderedListItem>
        <OrderedListItem>Second item</OrderedListItem>
        <OrderedListItem>Third item</OrderedListItem>
      </OrderedList>
    ),
  },
  {
    title: 'Custom Marker Type',
    desc: 'OrderedList component with custom marker type (lowercase letters).',
    code: `
import { OrderedList, OrderedListItem } from "kalki-ui";

export default function CustomMarkerOrderedList() {
  return (
    <OrderedList type="a">
      <OrderedListItem>Item A</OrderedListItem>
      <OrderedListItem>Item B</OrderedListItem>
      <OrderedListItem>Item C</OrderedListItem>
    </OrderedList>
  );
}
`,
    snippet: (
      <OrderedList type="a">
        <OrderedListItem>Item A</OrderedListItem>
        <OrderedListItem>Item B</OrderedListItem>
        <OrderedListItem>Item C</OrderedListItem>
      </OrderedList>
    ),
  },
  {
    title: 'Nested Lists',
    desc: 'OrderedList component with nested lists and different marker types.',
    code: `
import { OrderedList, OrderedListItem } from "kalki-ui";

export default function NestedOrderedList() {
  return (
    <OrderedList>
      <OrderedListItem>Main item 1</OrderedListItem>
      <OrderedListItem>
        Main item 2
        <OrderedList type="a">
          <OrderedListItem>Subitem 2.a</OrderedListItem>
          <OrderedListItem>Subitem 2.b</OrderedListItem>
        </OrderedList>
      </OrderedListItem>
      <OrderedListItem>Main item 3</OrderedListItem>
    </OrderedList>
  );
}
`,
    snippet: (
      <OrderedList>
        <OrderedListItem>Main item 1</OrderedListItem>
        <OrderedListItem>
          Main item 2
          <OrderedList type="a">
            <OrderedListItem>Subitem 2.a</OrderedListItem>
            <OrderedListItem>Subitem 2.b</OrderedListItem>
          </OrderedList>
        </OrderedListItem>
        <OrderedListItem>Main item 3</OrderedListItem>
      </OrderedList>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'OrderedList component with custom CSS classes for styling.',
    code: `
import { Box, OrderedList, OrderedListItem } from "kalki-ui";

export default function StyledOrderedList() {
  return (
    <Box padding="10px" margin="0px 0px 0px 15px">
      <OrderedList type="i" className="list-decimal pl-5 space-y-2">
        <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 1</OrderedListItem>
        <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 2</OrderedListItem>
        <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 3</OrderedListItem>
      </OrderedList>
    </Box>
  );
}
`,
    snippet: (
      <Box padding="10px" margin="0px 0px 0px 15px">
        <OrderedList type="i" className="list-decimal pl-5 space-y-2">
          <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 1</OrderedListItem>
          <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 2</OrderedListItem>
          <OrderedListItem className="text-xl font-semibold text-blue-500">Custom styled item 3</OrderedListItem>
        </OrderedList>
      </Box>
    ),
  },
];
