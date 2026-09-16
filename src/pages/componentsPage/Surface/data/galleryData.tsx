import { Gallery, GalleryImage } from 'kalki-ui';
import { sampleDog1, sampleDog2, sampleDog3, sampleDog4 } from '@/assets/samples';
import { docsData } from '@/types/docsData';

const demoSrc = sampleDog1;

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'pattern',
    "'grid' | 'masonry' | 'carousel' | 'asymmetric' | 'compact'",
    'grid',
    'Layout pattern used to arrange gallery children.',
  ],
  ['className', 'string', '-', 'Additional CSS classes applied to the gallery container.'],
  ['children', 'ReactNode', '-', 'Gallery images or custom media items.'],
];

export const docs: docsData[] = [
  {
    title: 'Grid Gallery',
    desc: 'Default grid layout with images that fill each gallery item container.',
    code: `
import { Gallery, GalleryImage } from "kalki-ui";

export default function GridGallery() {
  return (
    <Gallery pattern="grid" className="w-full max-w-3xl">
      <GalleryImage src="${demoSrc}" alt="1" />
      <GalleryImage src="${sampleDog2}" alt="2" />
      <GalleryImage src="${sampleDog3}" alt="3" />
    </Gallery>
  );
}
`,
    snippet: (
      <Gallery pattern="grid" className="w-full max-w-3xl">
        <GalleryImage src={demoSrc} alt="1" />
        <GalleryImage src={sampleDog2} alt="2" />
        <GalleryImage src={sampleDog3} alt="3" />
      </Gallery>
    ),
  },
  {
    title: 'Compact Gallery',
    desc: 'A denser grid with images filling their container space.',
    code: `
import { Gallery, GalleryImage } from "kalki-ui";

export default function CompactGallery() {
  return (
    <Gallery pattern="compact" className="w-full max-w-3xl">
      <GalleryImage src="${demoSrc}" alt="1" />
      <GalleryImage src="${sampleDog2}" alt="2" />
      <GalleryImage src="${sampleDog3}" alt="3" />
      <GalleryImage src="${sampleDog4}" alt="4" />
    </Gallery>
  );
}
`,
    snippet: (
      <Gallery pattern="compact" className="w-full max-w-3xl">
        <GalleryImage src={demoSrc} alt="1" />
        <GalleryImage src={sampleDog2} alt="2" />
        <GalleryImage src={sampleDog3} alt="3" />
        <GalleryImage src={sampleDog4} alt="4" />
      </Gallery>
    ),
  },
];
