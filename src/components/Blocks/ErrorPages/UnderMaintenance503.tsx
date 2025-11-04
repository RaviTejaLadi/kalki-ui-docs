import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Construction, RefreshCw } from 'lucide-react';

const UnderMaintenance503 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-orange-100 p-6 rounded-full">
            <Construction className="w-20 h-20 text-orange-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">503</div>
          <EmptyTitle>Under Maintenance</EmptyTitle>
          <EmptyDescription>
            We&apos;re currently performing scheduled maintenance to improve your experience. We&apos;ll be back online soon!
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button variant="outline" onClick={() => alert('Subscribe')}>
              Subscribe for Updates
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default UnderMaintenance503;
