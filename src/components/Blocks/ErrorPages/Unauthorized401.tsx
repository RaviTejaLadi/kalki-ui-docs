import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Home, Lock } from 'lucide-react';

const Unauthorized401 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-purple-100 p-6 rounded-full">
            <Lock className="w-20 h-20 text-purple-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">401</div>
          <EmptyTitle>Unauthorized Access</EmptyTitle>
          <EmptyDescription>You need to be logged in to access this page. Please sign in to continue.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => alert('Navigate to login')} className="gap-2">
              <Lock className="w-4 h-4" />
              Sign In
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

export default Unauthorized401;
