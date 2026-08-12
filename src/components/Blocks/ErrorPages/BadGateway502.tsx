import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from 'kalki-ui';
import { AlertCircle, RefreshCw } from 'lucide-react';

const BadGateway502 = () => {
  return (
    <div className="min-h-[28rem] sm:min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <Empty className="max-w-2xl">
        <EmptyMedia>
          <div className="bg-cyan-100 p-4 sm:p-6 rounded-full">
            <AlertCircle className="w-12 h-12 sm:w-20 sm:h-20 text-cyan-600" />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <div className="text-4xl sm:text-7xl font-bold text-muted-foreground mb-4">502</div>
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
