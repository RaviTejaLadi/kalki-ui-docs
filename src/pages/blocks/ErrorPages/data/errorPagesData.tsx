import BadGateway502 from '@/components/Blocks/ErrorPages/BadGateway502';
import Forbidden403 from '@/components/Blocks/ErrorPages/Forbidden403';
import GatewayTimeout504 from '@/components/Blocks/ErrorPages/GatewayTimeout504';
import Gone410 from '@/components/Blocks/ErrorPages/Gone410';
import InternalServerError500 from '@/components/Blocks/ErrorPages/InternalServerError500';
import NotFound404 from '@/components/Blocks/ErrorPages/NotFound404';
import RequestTimeout408 from '@/components/Blocks/ErrorPages/RequestTimeout408';
import ServiceUnavailable503 from '@/components/Blocks/ErrorPages/ServiceUnavailable503';
import TooManyRequests429 from '@/components/Blocks/ErrorPages/TooManyRequests429';
import Unauthorized401 from '@/components/Blocks/ErrorPages/Unauthorized401';
import UnderMaintenance503 from '@/components/Blocks/ErrorPages/UnderMaintenance503';
import { docsData } from '@/types/docsData';

export const data: docsData[] = [
  {
    title: 'NotFound404',
    code: `
import { ArrowLeft, Home, Ghost } from 'lucide-react';
import { cn } from '@/utils';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import Button from '@/components/common/Button';

interface NotFound404Props {
  title?: string;
  description?: string;
  className?: string;
}

export default function NotFound404({
  title = 'Page Not Found',
  description = 'The page you’re looking for doesn’t exist. It may have been moved or deleted.',
  className,
}: NotFound404Props) {
  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div
      className={cn(
        'relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center px-6',
        className
      )}
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Ghost className="h-16 w-16 text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-blue-500 bg-clip-text text-transparent">
            404
          </EmptyTitle>
          <EmptyDescription className="text-lg">{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={handleHomeClick} className="btn-default group">
              <Home className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
              Go Home
            </Button>

            <Button onClick={handleBackClick} variant="outline" className="group">
              <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
          `,
    snippet: <NotFound404 />,
  },
  {
    title: 'InternalServerError500',
    code: `
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import Button from '@/components/common/Button';
import { Home, RefreshCw, ServerCrash } from 'lucide-react';

const InternalServerError500 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-red-100 p-6 rounded-full">
            <ServerCrash className="w-20 h-20 text-red-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">500</div>
          <EmptyTitle>Internal Server Error</EmptyTitle>
          <EmptyDescription>
            Something went wrong on our end. Our team has been notified and is working to fix the issue.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh Page
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

export default InternalServerError500;
          `,
    snippet: <InternalServerError500 />,
  },
  {
    title: 'Forbidden403',
    code: `
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
            You don't have permission to access this resource. Please contact your administrator if you believe this is
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
          `,
    snippet: <Forbidden403 />,
  },
  {
    title: 'ServiceUnavailable503',
    code: `
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

          `,
    snippet: <ServiceUnavailable503 />,
  },
  {
    title: 'Unauthorized401',
    code: `
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

          `,
    snippet: <Unauthorized401 />,
  },
  {
    title: 'UnderMaintenance503',
    code: `
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

          `,
    snippet: <UnderMaintenance503 />,
  },
  {
    title: 'RequestTimeout408',
    code: `
import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { Clock, Home, RefreshCw } from 'lucide-react';

const RequestTimeout408 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-indigo-100 p-6 rounded-full">
            <Clock className="w-20 h-20 text-indigo-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">408</div>
          <EmptyTitle>Request Timeout</EmptyTitle>
          <EmptyDescription>
            Your request took too long to process. This might be due to a slow connection or server load.
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

export default RequestTimeout408;

          `,
    snippet: <RequestTimeout408 />,
  },
  {
    title: 'TooManyRequests429',
    code: `
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
          <div className="text-7xl font-bold text-slate-800 mb-4">429</div>
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

          `,
    snippet: <TooManyRequests429 />,
  },
  {
    title: 'BadGateway502',
    code: `
import Button from '@/components/common/Button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/common/Empty';
import { AlertCircle, RefreshCw } from 'lucide-react';

const BadGateway502 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-cyan-100 p-6 rounded-full">
            <AlertCircle className="w-20 h-20 text-cyan-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-7xl font-bold text-slate-800 mb-4">502</div>
          <EmptyTitle>Bad Gateway</EmptyTitle>
          <EmptyDescription>
            The server received an invalid response from an upstream server. Please try again in a few moments.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={() => window.location.reload()} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button variant="outline" onClick={() => alert('Report issue')}>
              Report Issue
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default BadGateway502;

          `,
    snippet: <BadGateway502 />,
  },
  {
    title: 'Gone410',
    code: `
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
          <div className="text-7xl font-bold text-slate-800 mb-4">410</div>
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

          `,
    snippet: <Gone410 />,
  },
  {
    title: 'GatewayTimeout504',
    code: `
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
          <div className="text-7xl font-bold text-slate-800 mb-4">504</div>
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

          `,
    snippet: <GatewayTimeout504 />,
  },
];
