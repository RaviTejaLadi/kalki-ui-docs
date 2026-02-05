import Image from '@/components/common/Image';

export const ImagePreviews = {
  basic: (
    <div className="flex gap-2 items-center">
      <Image
        src="https://github.com/github.png"
        alt="Preview"
        width={48}
        height={48}
        variant="rounded"
      />
      <Image
        src="https://github.com/github.png"
        alt="Circle"
        width={40}
        height={40}
        variant="circle"
      />
    </div>
  ),
};
