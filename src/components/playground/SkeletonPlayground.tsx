import { useState } from 'react';
import { Skeleton } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const PRESETS = {
  'Text line': 'h-4 w-full',
  'Short line': 'h-4 w-1/2',
  Avatar: 'h-12 w-12 rounded-full',
  Card: 'h-28 w-full rounded-md',
} as const;

type Preset = keyof typeof PRESETS;

const SkeletonPlayground = () => {
  const [preset, setPreset] = useState<Preset>('Text line');
  const className = PRESETS[preset];

  return (
    <PlaygroundShell
      preview={
        <div className="w-full max-w-xl space-y-3">
          {preset === 'Card' ? (
            <>
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className={className} />
            </>
          ) : (
            <Skeleton className={className} />
          )}
        </div>
      }
      controls={
        <OptionGroup
          label="Placeholder pattern"
          options={Object.keys(PRESETS) as Preset[]}
          value={preset}
          onChange={setPreset}
        />
      }
      code={
        preset === 'Card'
          ? `<div className="space-y-3">
  <Skeleton className="h-12 w-12 rounded-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="${className}" />
</div>`
          : `<Skeleton className="${className}" />`
      }
      previewClassName="w-full"
    />
  );
};

export default SkeletonPlayground;
