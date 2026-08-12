import { GalleryImage as Gallery, Image } from 'kalki-ui';
import { docsData } from '@/types/docsData';

const demoSrc = 'https://github.com/github.png';

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
    desc: 'Default grid layout for a responsive image collection.',
    code: `
import { GalleryImage, Image } from "kalki-ui";

export default function GridGallery() {
  return (
    <GalleryImage pattern="grid">
      <Image src="${demoSrc}" alt="1" width={64} height={64} variant="rounded" />
      <Image src="${demoSrc}" alt="2" width={64} height={64} variant="rounded" />
      <Image src="${demoSrc}" alt="3" width={64} height={64} variant="rounded" />
    </Image>
  );
}
`,
    snippet: (
      <Gallery pattern="grid" className="max-w-md">
        <Image src={demoSrc} alt="1" width={64} height={64} variant="rounded" />
        <Image src={demoSrc} alt="2" width={64} height={64} variant="rounded" />
        <Image src={demoSrc} alt="3" width={64} height={64} variant="rounded" />
      </Gallery>
    ),
  },
  {
    title: 'Compact Gallery',
    desc: 'A denser grid with tighter spacing.',
    code: `
import { GalleryImage, Image } from "kalki-ui";

export default function CompactGallery() {
  return (
    <GalleryImage pattern="compact">
      <Image src="${demoSrc}" alt="1" width={48} height={48} variant="rounded" />
      <Image src="${demoSrc}" alt="2" width={48} height={48} variant="rounded" />
      <Image src="${demoSrc}" alt="3" width={48} height={48} variant="rounded" />
      <Image src="${demoSrc}" alt="4" width={48} height={48} variant="rounded" />
    </Image>
  );
}
`,
    snippet: (
      <Gallery pattern="compact" className="max-w-md">
        <Image src={demoSrc} alt="1" width={48} height={48} variant="rounded" />
        <Image src={demoSrc} alt="2" width={48} height={48} variant="rounded" />
        <Image src={demoSrc} alt="3" width={48} height={48} variant="rounded" />
        <Image src={demoSrc} alt="4" width={48} height={48} variant="rounded" />
      </Gallery>
    ),
  },
];
