import OrderedList from '@/components/common/Lists/OrderedList';
import UnOrderedList from '@/components/common/Lists/UnOrderedList';

export const ListsPreviews = {
  basic: (
    <div className="flex gap-6 text-sm">
      <div>
        <div className="font-medium mb-1">Ordered</div>
        <OrderedList type="1">
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </OrderedList>
      </div>
      <div>
        <div className="font-medium mb-1">Unordered</div>
        <UnOrderedList>
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </UnOrderedList>
      </div>
    </div>
  ),
};
