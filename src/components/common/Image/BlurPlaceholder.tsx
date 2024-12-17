import { cn } from '@/utils';

export const BlurPlaceholder: React.FC<{
  dataURL: string;
  className?: string;
}> = ({ dataURL, className }) => (
  <div
    className={cn('absolute inset-0 filter blur-lg scale-110 transform', className)}
    style={{
      backgroundImage: `url(${dataURL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
);
