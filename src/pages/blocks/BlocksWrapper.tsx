import { Button } from 'kalki-ui';
import { cn } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface BlocksWrapperProps extends PropsWithChildren {
  className?: string;
  BlockName: string;
}

const BlocksWrapper = ({ children, className, BlockName }: BlocksWrapperProps) => {
  const navigate = useNavigate();
  return (
    <div className={cn('container overflow-x-hidden py-2', className)}>
      <div className="flex w-full items-center gap-3 py-4 sm:gap-5">
        <Button variant="ghost" className="shrink-0 rounded-full" onClick={() => navigate('/blocks')}>
          <ArrowLeft className="h-4 w-4 text-muted-foreground" />
        </Button>
        <div className="truncate text-muted-foreground">{BlockName}</div>
      </div>
      <div className="columns-1 gap-4 space-y-4 md:columns-2">{children}</div>
    </div>
  );
};

export default BlocksWrapper;
