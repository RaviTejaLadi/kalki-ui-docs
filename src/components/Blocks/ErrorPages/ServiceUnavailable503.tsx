import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { RefreshCw, WifiOff } from 'lucide-react';

const ServiceUnavailable503 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-blue-100 p-6 rounded-full">
            <WifiOff className="w-20 h-20 text-blue-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">503</div>
          <EmptyTitle>Service Unavailable</EmptyTitle>
          <EmptyDescription>
            The service is temporarily unavailable. We&apos;re performing maintenance or experiencing high traffic.
            Please try again shortly.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={() => alert('Check status')}>
              Check Status
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default ServiceUnavailable503;
