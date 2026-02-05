import ImageViewer from '@/components/common/ImageViewer/ImageViewer';
import Image from '@/components/common/Image';

export const ImageViewerPreviews = {
  basic: (
    <ImageViewer>
      <Image src="https://github.com/github.png" alt="Preview" width={64} height={64} variant="rounded" />
    </ImageViewer>
  ),
};
