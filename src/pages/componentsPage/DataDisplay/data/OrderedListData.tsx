import Box from '@/components/common/Box';
import OrderedList from '@/components/common/Lists/OrderedList';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const orderedListRows = [
  [
    'children',
    'node',
    'required',
    'The content to be rendered inside the OrderedList component. This should be OrderedList.Item components.',
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
      <OrderedList>
        <OrderedList.Item>First item</OrderedList.Item>
        <OrderedList.Item>Second item</OrderedList.Item>
        <OrderedList.Item>Third item</OrderedList.Item>
      </OrderedList>
    `,
    snippet: (
      <OrderedList>
        <OrderedList.Item>First item</OrderedList.Item>
        <OrderedList.Item>Second item</OrderedList.Item>
        <OrderedList.Item>Third item</OrderedList.Item>
      </OrderedList>
    ),
  },
  {
    title: 'Custom Marker Type',
    desc: 'OrderedList component with custom marker type (lowercase letters).',
    code: `
      <OrderedList type="a">
        <OrderedList.Item>Item A</OrderedList.Item>
        <OrderedList.Item>Item B</OrderedList.Item>
        <OrderedList.Item>Item C</OrderedList.Item>
      </OrderedList>
    `,
    snippet: (
      <OrderedList type="a">
        <OrderedList.Item>Item A</OrderedList.Item>
        <OrderedList.Item>Item B</OrderedList.Item>
        <OrderedList.Item>Item C</OrderedList.Item>
      </OrderedList>
    ),
  },
  {
    title: 'Nested Lists',
    desc: 'OrderedList component with nested lists and different marker types.',
    code: `
      <OrderedList>
        <OrderedList.Item>Main item 1</OrderedList.Item>
        <OrderedList.Item>
          Main item 2
          <OrderedList type="a">
            <OrderedList.Item>Subitem 2.a</OrderedList.Item>
            <OrderedList.Item>Subitem 2.b</OrderedList.Item>
          </OrderedList>
        </OrderedList.Item>
        <OrderedList.Item>Main item 3</OrderedList.Item>
      </OrderedList>
    `,
    snippet: (
      <OrderedList>
        <OrderedList.Item>Main item 1</OrderedList.Item>
        <OrderedList.Item>
          Main item 2
          <OrderedList type="a">
            <OrderedList.Item>Subitem 2.a</OrderedList.Item>
            <OrderedList.Item>Subitem 2.b</OrderedList.Item>
          </OrderedList>
        </OrderedList.Item>
        <OrderedList.Item>Main item 3</OrderedList.Item>
      </OrderedList>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'OrderedList component with custom CSS classes for styling.',
    code: `
      <Box padding="10px" margin="0px 0px 0px 15px">
        <OrderedList type="i" className="list-decimal pl-5 space-y-2">
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 1</OrderedList.Item>
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 2</OrderedList.Item>
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 3</OrderedList.Item>
        </OrderedList>
      </Box>
    `,
    snippet: (
      <Box padding="10px" margin="0px 0px 0px 15px">
        <OrderedList type="i" className="list-decimal pl-5 space-y-2">
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 1</OrderedList.Item>
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 2</OrderedList.Item>
          <OrderedList.Item className="text-xl font-semibold text-blue-500">Custom styled item 3</OrderedList.Item>
        </OrderedList>
      </Box>
    ),
  },
];
