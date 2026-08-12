import { Skeleton } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['className', 'string', '-', 'Additional CSS classes to control size, shape, and spacing of the skeleton.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Skeleton',
    desc: 'A pulsing placeholder used while content is loading.',
    code: `
import { Skeleton } from "kalki-ui";

export default function BasicSkeleton() {
  return <Skeleton className="w-40 h-4" />;
}
`,
    snippet: <Skeleton className="w-40 h-4" />,
  },
  {
    title: 'Skeleton Layout',
    desc: 'Compose multiple skeletons to mimic a content layout.',
    code: `
import { Skeleton } from "kalki-ui";

export default function SkeletonLayout() {
  return (
    <div className="space-y-2 w-full max-w-[240px]">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/2 h-4" />
      <Skeleton className="w-20 h-20 rounded-full" />
    </div>
  );
}
`,
    snippet: (
      <div className="space-y-2 w-full max-w-[240px]">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-20 h-20 rounded-full" />
      </div>
    ),
  },
];
