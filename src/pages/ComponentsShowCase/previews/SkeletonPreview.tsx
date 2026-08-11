import { Skeleton } from '@/components/common/Skeleton';

export const SkeletonPreviews = {
  basic: (
    <div className="space-y-2 w-full max-w-[200px]">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/2 h-4" />
      <Skeleton className="w-20 h-20 rounded-full" />
    </div>
  ),
};
