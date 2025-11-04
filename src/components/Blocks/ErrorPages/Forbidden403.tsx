import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Home, ShieldAlert } from 'lucide-react';

const Forbidden403 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-amber-100 p-6 rounded-full">
            <ShieldAlert className="w-20 h-20 text-amber-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">403</div>
          <EmptyTitle>Access Forbidden</EmptyTitle>
          <EmptyDescription>
            You don&apos;t have permission to access this resource. Please contact your administrator if you believe this is
            a mistake.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => alert('Navigate to home')} className="gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
            <Button variant="outline" onClick={() => alert('Contact support')}>
              Contact Support
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default Forbidden403;
