import { Image } from 'kalki-ui';
import { sampleDog1, sampleDog4 } from '@/assets/samples';
export const ImagePreviews = {
  basic: (
    <div className="flex gap-2 items-center">
      <Image src={sampleDog1} alt="Preview" width={48} height={48} variant="rounded" />
      <Image src={sampleDog4} alt="Circle" width={40} height={40} variant="circle" />
    </div>
  ),
};
