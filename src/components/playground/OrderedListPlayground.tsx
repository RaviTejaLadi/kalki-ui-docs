import { useState } from 'react';
import { OrderedList, OrderedListItem } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const ORDERED_LIST_TYPES = ['1', 'a', 'A', 'i', 'I'] as const;
type OrderedListType = (typeof ORDERED_LIST_TYPES)[number];

const OrderedListPlayground = () => {
  const [type, setType] = useState<OrderedListType>('1');

  const generateCode = () => `<OrderedList type="${type}">
  <OrderedListItem>First item</OrderedListItem>
  <OrderedListItem>Second item</OrderedListItem>
  <OrderedListItem>Third item</OrderedListItem>
</OrderedList>`;

  return (
    <PlaygroundShell
      preview={
        <OrderedList type={type}>
          <OrderedListItem>First item</OrderedListItem>
          <OrderedListItem>Second item</OrderedListItem>
          <OrderedListItem>Third item</OrderedListItem>
        </OrderedList>
      }
      controls={<OptionGroup label="Marker type" options={ORDERED_LIST_TYPES} value={type} onChange={setType} />}
      code={generateCode()}
    />
  );
};

export default OrderedListPlayground;
