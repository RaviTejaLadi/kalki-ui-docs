import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Home, RefreshCw, Zap } from 'lucide-react';

const GatewayTimeout504 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-emerald-100 p-6 rounded-full">
            <Zap className="w-20 h-20 text-emerald-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-muted-foreground mb-4">504</div>
          <EmptyTitle>Gateway Timeout</EmptyTitle>
          <EmptyDescription>
            The server didn&apos;t receive a timely response from another server it needed to access. Please try again.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={() => alert('Navigate to home')} className="gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default GatewayTimeout504;
