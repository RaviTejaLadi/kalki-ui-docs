import React from 'react';
import { AlertTriangle, RefreshCw, ChevronDown, ChevronUp, FileCode, XCircle, Terminal, Layers } from 'lucide-react';
import { ErrorDetails, ErrorLocation } from './types';
import Button, { ButtonIcon, ButtonText } from '../common/Button';

interface ErrorFallbackProps {
  error: ErrorDetails;
  resetError: () => void;
}

function ErrorLocationInfo({ location }: { location: ErrorLocation }) {
  return (
    <div className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
      <FileCode className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
      <span className="font-medium text-muted-foreground group-hover:text-foreground">{location.fileName}</span>
      <span className="text-gray-400">:</span>
      <span className="font-mono text-blue-600 group-hover:text-blue-700">{location.lineNumber}</span>
      <span className="text-gray-400">:</span>
      <span className="font-mono text-purple-600 group-hover:text-purple-700">{location.columnNumber}</span>
      {location.functionName && (
        <div className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-sm text-gray-600 group-hover:bg-gray-200">
          {location.functionName}
        </div>
      )}
    </div>
  );
}

export function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div className="min-h-screen flex items-start justify-center p-4">
      <div className="w-full space-y-6 p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 rounded-full p-2">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">Application Error</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              An unexpected error has occurred. Our team has been notified.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-50/50 border border-red-100 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 font-medium leading-relaxed">{error.message}</p>
          </div>

          {error.firstLocation && (
            <div className="mt-4 pt-4 border-t border-red-100/50">
              <ErrorLocationInfo location={error.firstLocation} />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <button
            onClick={toggleExpanded}
            className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            <Terminal className="h-4 w-4" />
            <span className="font-medium">Technical Details</span>
            {isExpanded ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
          </button>

          <div
            className={`space-y-6 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {error.locations.length > 1 && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Layers className="h-4 w-4" />
                  <h3 className="font-medium">Error Trace</h3>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-100">
                  {error.locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0">
                      <ErrorLocationInfo location={location} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {error.componentStack && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Terminal className="h-4 w-4" />
                  <h3 className="font-medium text-foreground">Component Stack</h3>
                </div>
                <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-muted-foreground border border-gray-100 overflow-x-auto">
                  {error.componentStack}
                </pre>
              </div>
            )}

            {error.stack && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Terminal className="h-4 w-4" />
                  <h3 className="font-medium text-foreground">Stack Trace</h3>
                </div>
                <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-muted-foreground border border-gray-100 overflow-x-auto">
                  {error.stack}
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <Button onClick={resetError} variant='ghost'>
            <ButtonIcon>
              <RefreshCw className="h-4 w-4 mr-2" />
            </ButtonIcon>
            <ButtonText>Retry Application</ButtonText>
          </Button>
        </div>
      </div>
    </div>
  );
}
