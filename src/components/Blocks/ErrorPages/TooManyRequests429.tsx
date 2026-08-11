import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Ban, Clock, Home } from 'lucide-react';

const TooManyRequests429 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-pink-100 p-6 rounded-full">
            <Ban className="w-20 h-20 text-pink-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-muted-foreground mb-4">429</div>
          <EmptyTitle>Too Many Requests</EmptyTitle>
          <EmptyDescription>
            You&apos;ve made too many requests in a short period. Please wait a moment before trying again.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => setTimeout(() => window.location.reload(), 3000)} className="gap-2">
              <Clock className="w-4 h-4" />
              Wait and Retry
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

export default TooManyRequests429;
