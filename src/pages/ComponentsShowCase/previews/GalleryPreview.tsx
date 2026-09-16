import { Gallery, Image } from 'kalki-ui';
import { sampleDog1, sampleDog2, sampleDog3 } from '@/assets/samples';
export const GalleryPreviews = {
  basic: (
    <Gallery pattern="grid" className="max-w-[180px]">
      <Image src={sampleDog1} alt="1" width={48} height={48} variant="rounded" />
      <Image src={sampleDog2} alt="2" width={48} height={48} variant="rounded" />
      <Image src={sampleDog3} alt="3" width={48} height={48} variant="rounded" />
    </Gallery>
  ),
};
