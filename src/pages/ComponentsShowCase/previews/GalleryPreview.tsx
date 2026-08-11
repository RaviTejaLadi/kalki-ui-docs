import Gallery from '@/components/common/Gallery';
import Image from '@/components/common/Image';

export const GalleryPreviews = {
  basic: (
    <Gallery pattern="grid" className="max-w-[180px]">
      <Image src="https://github.com/github.png" alt="1" width={48} height={48} variant="rounded" />
      <Image src="https://github.com/github.png" alt="2" width={48} height={48} variant="rounded" />
      <Image src="https://github.com/github.png" alt="3" width={48} height={48} variant="rounded" />
    </Gallery>
  ),
};
