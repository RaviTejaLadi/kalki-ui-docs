import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { CloudOff, Home } from 'lucide-react';

const Gone410 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-gray-100 p-6 rounded-full">
            <CloudOff className="w-20 h-20 text-gray-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-muted-foreground mb-4">410</div>
          <EmptyTitle>Content Gone</EmptyTitle>
          <EmptyDescription>
            The content you&apos;re looking for has been permanently removed and is no longer available.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => alert('Navigate to home')} className="gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
            <Button variant="outline" onClick={() => alert('Browse archive')}>
              Browse Archive
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default Gone410;
