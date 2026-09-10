import { useState } from 'react';
import { Figure, FigureCaption, FigureImage } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const WIDTHS = ['200px', '300px', '500px', '100%'] as const;
const IMAGE_URL = 'https://picsum.photos/id/1018/800/500';

const FigurePlayground = () => {
  const [width, setWidth] = useState<(typeof WIDTHS)[number]>('300px');

  const generateCode = () => `<Figure width="${width}">
  <FigureImage src="${IMAGE_URL}" alt="Mountain landscape" />
  <FigureCaption>A scenic mountain landscape</FigureCaption>
</Figure>`;

  return (
    <PlaygroundShell
      preview={
        <Figure width={width}>
          <FigureImage src={IMAGE_URL} alt="Mountain landscape" className="rounded-md" />
          <FigureCaption>A scenic mountain landscape</FigureCaption>
        </Figure>
      }
      controls={<OptionGroup label="Width" options={WIDTHS} value={width} onChange={setWidth} />}
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default FigurePlayground;
