import { useState } from 'react';
import { UnOrderedList, UnOrderedListItem } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const UNORDERED_LIST_TYPES = ['disc', 'circle', 'square', 'none'] as const;
type UnOrderedListType = (typeof UNORDERED_LIST_TYPES)[number];

const UnOrderedListPlayground = () => {
  const [type, setType] = useState<UnOrderedListType>('disc');

  const generateCode = () => `<UnOrderedList type="${type}">
  <UnOrderedListItem>First item</UnOrderedListItem>
  <UnOrderedListItem>Second item</UnOrderedListItem>
  <UnOrderedListItem>Third item</UnOrderedListItem>
</UnOrderedList>`;

  return (
    <PlaygroundShell
      preview={
        <UnOrderedList type={type}>
          <UnOrderedListItem>First item</UnOrderedListItem>
          <UnOrderedListItem>Second item</UnOrderedListItem>
          <UnOrderedListItem>Third item</UnOrderedListItem>
        </UnOrderedList>
      }
      controls={<OptionGroup label="Bullet type" options={UNORDERED_LIST_TYPES} value={type} onChange={setType} />}
      code={generateCode()}
    />
  );
};

export default UnOrderedListPlayground;
