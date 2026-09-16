import { useState } from 'react';
import { Gallery, GalleryImage } from 'kalki-ui';
import { sampleImages } from '@/assets/samples';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const PATTERNS = ['grid', 'masonry', 'carousel', 'asymmetric', 'compact'] as const;

const GalleryPlayground = () => {
  const [pattern, setPattern] = useState<(typeof PATTERNS)[number]>('grid');

  const generateCode = () => `<Gallery pattern="${pattern}" className="w-full max-w-3xl">
  <GalleryImage src="${sampleImages[0]}" alt="1" />
  <GalleryImage src="${sampleImages[1]}" alt="2" />
  <GalleryImage src="${sampleImages[2]}" alt="3" />
  <GalleryImage src="${sampleImages[3]}" alt="4" />
  <GalleryImage src="${sampleImages[0]}" alt="5" />
  <GalleryImage src="${sampleImages[1]}" alt="6" />
</Gallery>`;

  return (
    <PlaygroundShell
      preview={
        <Gallery pattern={pattern} className="w-full max-w-3xl">
          {Array.from({ length: 6 }, (_, index) => (
            <GalleryImage
              key={index}
              src={sampleImages[index % sampleImages.length]}
              alt={`Gallery item ${index + 1}`}
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
