import { useState } from 'react';
import { Inbox, SearchX } from 'lucide-react';
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const MEDIA_VARIANTS = ['icon', 'default'] as const;

const EmptyPlayground = () => {
  const [withMedia, setWithMedia] = useState(true);
  const [withAction, setWithAction] = useState(true);
  const [mediaVariant, setMediaVariant] = useState<(typeof MEDIA_VARIANTS)[number]>('icon');

  const code = `<Empty>
  <EmptyHeader>
${
  withMedia
    ? `    <EmptyMedia variant="${mediaVariant}">
      <Inbox className="size-6" />
    </EmptyMedia>
`
    : ''
}    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      Try adjusting your filters or search for a different keyword.
    </EmptyDescription>
  </EmptyHeader>
${
  withAction
    ? `  <EmptyContent>
    <Button size="sm" variant="outline">Clear filters</Button>
    <Button size="sm">Create item</Button>
  </EmptyContent>
`
    : ''
}</Empty>`;

  return (
    <PlaygroundShell
      preview={
        <Empty className="w-full max-w-md border border-dashed rounded-lg">
          <EmptyHeader>
            {withMedia && (
              <EmptyMedia variant={mediaVariant}>
                {mediaVariant === 'icon' ? <Inbox className="size-6" /> : <SearchX className="size-6" />}
              </EmptyMedia>
            )}
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>Try adjusting your filters or search for a different keyword.</EmptyDescription>
          </EmptyHeader>
          {withAction && (
            <EmptyContent className="flex gap-2">
              <Button size="sm" variant="outline">
                Clear filters
              </Button>
              <Button size="sm">Create item</Button>
            </EmptyContent>
          )}
        </Empty>
      }
      controls={
        <>
          {withMedia && (
            <OptionGroup
              label="Media variant"
              options={MEDIA_VARIANTS}
              value={mediaVariant}
              onChange={setMediaVariant}
            />
          )}
          <CheckboxGrid
            options={[
              { label: 'With media', checked: withMedia, onChange: setWithMedia },
              { label: 'With actions', checked: withAction, onChange: setWithAction },
            ]}
          />
        </>
      }
      code={code}
      previewClassName="w-full"
    />
  );
};

export default EmptyPlayground;
