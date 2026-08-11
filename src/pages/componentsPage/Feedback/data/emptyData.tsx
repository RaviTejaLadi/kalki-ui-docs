import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import Button from '@/components/common/Button';
import { docsData } from '@/types/docsData';
import { Inbox } from 'lucide-react';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['className', 'string', '-', 'Additional CSS classes applied to the Empty root element.'],
  ['children', 'ReactNode', '-', 'Content rendered inside the empty state (header, media, actions).'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Empty',
    desc: 'A simple empty state with a title and description.',
    code: `
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from "kalki-ui";
import { Inbox } from "lucide-react";

export default function BasicEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>Get started by adding your first item.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
`,
    snippet: (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No items yet</EmptyTitle>
          <EmptyDescription>Get started by adding your first item.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    ),
  },
  {
    title: 'Empty with Action',
    desc: 'Use EmptyContent to place an action below the description.',
    code: `
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "kalki-ui";
import { Inbox } from "lucide-react";
import { Button } from "kalki-ui";

export default function EmptyWithAction() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Try adjusting your filters or search terms.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Clear filters</Button>
      </EmptyContent>
    </Empty>
  );
}
`,
    snippet: (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No results found</EmptyTitle>
          <EmptyDescription>Try adjusting your filters or search terms.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Clear filters</Button>
        </EmptyContent>
      </Empty>
    ),
  },
];
