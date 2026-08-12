import { UnOrderedList, UnOrderedListItem } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const unOrderedListRows = [
  [
    'children',
    'node',
    'required',
    'The content to be rendered inside the UnOrderedList component. This should be UnOrderedListItem components.',
  ],
  [
    'type',
    'string',
    'disc',
    "Specifies the type of bullet point for list items. Common values include 'disc', 'circle', 'square', but any valid CSS list-style-type can be used.",
  ],
];

export const UnOrderedListItemRows = [
  ['children', 'any', 'undefined', 'The content to be rendered inside the ListItem component.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple UnorderedList component with default disc bullets.',
    code: `
import { UnOrderedList, OrderedListItem, UnOrderedListItem } from "kalki-ui";

export default function BasicUnorderedList() {
  return (
    <UnOrderedList>
      <UnOrderedListItem>First item</UnOrderedListItem>
      <UnOrderedListItem>Second item</UnOrderedListItem>
      <UnOrderedListItem>Third item</UnOrderedListItem>
    </UnOrderedList>
  );
}
`,
    snippet: (
      <UnOrderedList>
        <UnOrderedListItem>First item</UnOrderedListItem>
        <UnOrderedListItem>Second item</UnOrderedListItem>
        <UnOrderedListItem>Third item</UnOrderedListItem>
      </UnOrderedList>
    ),
  },
  {
    title: 'Custom Bullet Style',
    desc: 'UnorderedList component with custom bullet style.',
    code: `
import { UnOrderedList, OrderedListItem, UnOrderedListItem } from "kalki-ui";

export default function SquareUnorderedList() {
  return (
    <UnOrderedList type="square">
      <UnOrderedListItem>Square bullet item 1</UnOrderedListItem>
      <UnOrderedListItem>Square bullet item 2</UnOrderedListItem>
      <UnOrderedListItem>Square bullet item 3</UnOrderedListItem>
    </UnOrderedList>
  );
}
`,
    snippet: (
      <UnOrderedList type="square">
        <UnOrderedListItem>Square bullet item 1</UnOrderedListItem>
        <UnOrderedListItem>Square bullet item 2</UnOrderedListItem>
        <UnOrderedListItem>Square bullet item 3</UnOrderedListItem>
      </UnOrderedList>
    ),
  },
  {
    title: 'Nested Lists',
    desc: 'UnorderedList component with nested lists and different bullet styles.',
    code: `
import { UnOrderedList, OrderedListItem, UnOrderedListItem } from "kalki-ui";

export default function NestedUnorderedList() {
  return (
    <UnOrderedList>
      <UnOrderedListItem>Main item 1</UnOrderedListItem>
      <UnOrderedListItem>
        Main item 2
        <UnOrderedList type="circle">
          <UnOrderedListItem>Subitem 2.1</UnOrderedListItem>
          <UnOrderedListItem>Subitem 2.2</UnOrderedListItem>
        </UnOrderedList>
      </UnOrderedListItem>
      <UnOrderedListItem>Main item 3</UnOrderedListItem>
    </UnOrderedList>
  );
}
`,
    snippet: (
      <UnOrderedList>
        <UnOrderedListItem>Main item 1</UnOrderedListItem>
        <UnOrderedListItem>
          Main item 2
          <UnOrderedList type="circle">
            <UnOrderedListItem>Subitem 2.1</UnOrderedListItem>
            <UnOrderedListItem>Subitem 2.2</UnOrderedListItem>
          </UnOrderedList>
        </UnOrderedListItem>
        <UnOrderedListItem>Main item 3</UnOrderedListItem>
      </UnOrderedList>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'UnorderedList component with custom CSS classes for styling.',
    code: `
import { UnOrderedList, OrderedListItem, UnOrderedListItem } from "kalki-ui";

export default function StyledUnorderedList() {
  return (
    <UnOrderedList className="pl-5 space-y-2" type="none">
      <UnOrderedListItem className="text-xl font-semibold text-blue-500">✅ Custom styled item 1</UnOrderedListItem>
      <UnOrderedListItem className="text-xl font-semibold text-blue-500">🚀 Custom styled item 2</UnOrderedListItem>
      <UnOrderedListItem className="text-xl font-semibold text-blue-500">🌟 Custom styled item 3</UnOrderedListItem>
    </UnOrderedList>
  );
}
`,
    snippet: (
      <UnOrderedList className="pl-5 space-y-2" type="none">
        <UnOrderedListItem className="text-xl font-semibold text-blue-500">✅ Custom styled item 1</UnOrderedListItem>
        <UnOrderedListItem className="text-xl font-semibold text-blue-500">🚀 Custom styled item 2</UnOrderedListItem>
        <UnOrderedListItem className="text-xl font-semibold text-blue-500">🌟 Custom styled item 3</UnOrderedListItem>
      </UnOrderedList>
    ),
  },
];
