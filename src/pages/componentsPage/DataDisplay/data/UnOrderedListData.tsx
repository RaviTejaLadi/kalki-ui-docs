import UnOrderedList from '@/components/common/Lists/UnOrderedList';
import { docsData } from '@/types/docsData';
export const columns = ['Name', 'Type', 'Default', 'Description'];

export const unOrderedListRows = [
  [
    'children',
    'node',
    'required',
    'The content to be rendered inside the UnOrderedList component. This should be UnOrderedList.Item components.',
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
    desc: 'A simple UnOrderedList component with default disc bullets.',
    code: `
      <UnOrderedList>
        <UnOrderedList.Item>First item</UnOrderedList.Item>
        <UnOrderedList.Item>Second item</UnOrderedList.Item>
        <UnOrderedList.Item>Third item</UnOrderedList.Item>
      </UnOrderedList>
    `,
    snippet: (
      <UnOrderedList>
        <UnOrderedList.Item>First item</UnOrderedList.Item>
        <UnOrderedList.Item>Second item</UnOrderedList.Item>
        <UnOrderedList.Item>Third item</UnOrderedList.Item>
      </UnOrderedList>
    ),
  },
  {
    title: 'Custom Bullet Style',
    desc: 'UnOrderedList component with custom bullet style.',
    code: `
      <UnOrderedList type="square">
        <UnOrderedList.Item>Square bullet item 1</UnOrderedList.Item>
        <UnOrderedList.Item>Square bullet item 2</UnOrderedList.Item>
        <UnOrderedList.Item>Square bullet item 3</UnOrderedList.Item>
      </UnOrderedList>
    `,
    snippet: (
      <UnOrderedList type="square">
        <UnOrderedList.Item>Square bullet item 1</UnOrderedList.Item>
        <UnOrderedList.Item>Square bullet item 2</UnOrderedList.Item>
        <UnOrderedList.Item>Square bullet item 3</UnOrderedList.Item>
      </UnOrderedList>
    ),
  },
  {
    title: 'Nested Lists',
    desc: 'UnOrderedList component with nested lists and different bullet styles.',
    code: `
      <UnOrderedList>
        <UnOrderedList.Item>Main item 1</UnOrderedList.Item>
        <UnOrderedList.Item>
          Main item 2
          <UnOrderedList type="circle">
            <UnOrderedList.Item>Subitem 2.1</UnOrderedList.Item>
            <UnOrderedList.Item>Subitem 2.2</UnOrderedList.Item>
          </UnOrderedList>
        </UnOrderedList.Item>
        <UnOrderedList.Item>Main item 3</UnOrderedList.Item>
      </UnOrderedList>
    `,
    snippet: (
      <UnOrderedList>
        <UnOrderedList.Item>Main item 1</UnOrderedList.Item>
        <UnOrderedList.Item>
          Main item 2
          <UnOrderedList type="circle">
            <UnOrderedList.Item>Subitem 2.1</UnOrderedList.Item>
            <UnOrderedList.Item>Subitem 2.2</UnOrderedList.Item>
          </UnOrderedList>
        </UnOrderedList.Item>
        <UnOrderedList.Item>Main item 3</UnOrderedList.Item>
      </UnOrderedList>
    ),
  },
  {
    title: 'Custom Styling',
    desc: 'UnOrderedList component with custom CSS classes for styling.',
    code: `
      <UnOrderedList className="custom-unordered-list" type="none">
        <UnOrderedList.Item className="custom-list-item">✅ Custom styled item 1</UnOrderedList.Item>
        <UnOrderedList.Item className="custom-list-item">🚀 Custom styled item 2</UnOrderedList.Item>
        <UnOrderedList.Item className="custom-list-item">🌟 Custom styled item 3</UnOrderedList.Item>
      </UnOrderedList>
    `,
    snippet: (
      <UnOrderedList className="pl-5 space-y-2" type="none">
        <UnOrderedList.Item className="text-xl font-semibold text-blue-500">✅ Custom styled item 1</UnOrderedList.Item>
        <UnOrderedList.Item className="text-xl font-semibold text-blue-500">🚀 Custom styled item 2</UnOrderedList.Item>
        <UnOrderedList.Item className="text-xl font-semibold text-blue-500">🌟 Custom styled item 3</UnOrderedList.Item>
      </UnOrderedList>
    ),
  },
];
