import Button from '@/components/common/Button';
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
    <div className={cn('container', className)}>
      <div className="w-full py-4 flex gap-5 items-center">
        <Button variant="ghost" className="rounded-full" onClick={() => navigate('/blocks')}>
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
        </Button>
        <div className="text-muted-foreground">{BlockName}</div>
      </div>
      <div className="columns-1 md:columns-2 gap-1 space-y-2">{children}</div>
    </div>
  );
};

export default BlocksWrapper;
