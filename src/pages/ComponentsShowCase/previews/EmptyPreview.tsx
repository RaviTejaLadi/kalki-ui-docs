import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '@/components/common/Empty';
import { Inbox } from 'lucide-react';

export const EmptyPreviews = {
  basic: (
    <Empty className="min-h-[120px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="size-6" />
        </EmptyMedia>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>Get started by adding your first item.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
