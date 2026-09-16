import { useState } from 'react';
import { Gallery, Image } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const PATTERNS = ['grid', 'masonry', 'carousel', 'asymmetric', 'compact'] as const;
const DEMO_SRC = 'https://github.com/github.png';

const GalleryPlayground = () => {
  const [pattern, setPattern] = useState<(typeof PATTERNS)[number]>('grid');

  const generateCode = () => `<Gallery pattern="${pattern}" className="max-w-md">
  <Image src="${DEMO_SRC}" alt="1" width={96} height={96} variant="rounded" />
  <Image src="${DEMO_SRC}" alt="2" width={96} height={96} variant="rounded" />
  <Image src="${DEMO_SRC}" alt="3" width={96} height={96} variant="rounded" />
  <Image src="${DEMO_SRC}" alt="4" width={96} height={96} variant="rounded" />
  <Image src="${DEMO_SRC}" alt="5" width={96} height={96} variant="rounded" />
  <Image src="${DEMO_SRC}" alt="6" width={96} height={96} variant="rounded" />
</Gallery>`;

  return (
    <PlaygroundShell
      preview={
        <Gallery pattern={pattern} className="w-full max-w-md">
          {Array.from({ length: 6 }, (_, index) => (
            <Image
              key={index}
              src={DEMO_SRC}
              alt={`Gallery item ${index + 1}`}
              width={96}
              height={96}
              variant="rounded"
            />
          ))}
        </Gallery>
      }
      controls={<OptionGroup label="Pattern" options={PATTERNS} value={pattern} onChange={setPattern} />}
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default GalleryPlayground;
