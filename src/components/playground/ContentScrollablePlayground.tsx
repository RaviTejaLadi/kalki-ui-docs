import { useState } from 'react';
import { ContentScrollable } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup } from './PlaygroundShell';

const HEIGHTS = ['120', '200', '300'] as const;
const LONG_TEXT =
  'Kalki UI provides reusable building blocks for modern React applications. Scroll through this sample to see how overflowing content behaves inside a constrained surface. Components can be composed, themed, and adapted to fit product requirements.';

const ContentScrollablePlayground = () => {
  const [variant, setVariant] = useState<(typeof COLOR_VARIANTS)[number]>('info');
  const [height, setHeight] = useState<(typeof HEIGHTS)[number]>('200');

  const generateCode = () => `<ContentScrollable variant="${variant}" height="${height}px">
  <p>${LONG_TEXT}</p>
  <p>${LONG_TEXT}</p>
</ContentScrollable>`;

  return (
    <PlaygroundShell
      preview={
        <ContentScrollable variant={variant} height={`${height}px`} width="100%">
          <p className="mb-4">{LONG_TEXT}</p>
          <p className="mb-4">{LONG_TEXT}</p>
          <p>{LONG_TEXT}</p>
        </ContentScrollable>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={COLOR_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Height (px)" options={HEIGHTS} value={height} onChange={setHeight} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default ContentScrollablePlayground;
