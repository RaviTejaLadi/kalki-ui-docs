import React from 'react';
import { ErrorDetails, ErrorLocation } from './types';

interface ErrorFallbackProps {
  error: ErrorDetails;
  resetError: () => void;
}

function ErrorLocationInfo({ location }: { location: ErrorLocation }) {
  return (
    <div className="rounded-md border border-border/70 bg-muted/30 px-3 py-2 text-xs font-mono text-foreground">
      <span>{location.fileName}</span>
      <span>:{location.lineNumber}</span>
      <span>:{location.columnNumber}</span>
      {location.functionName ? <span> ({location.functionName})</span> : null}
    </div>
  );
}

export function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const errorLabel = `${error.name}: ${error.message}`;
  const capturedAt = new Date(error.timestamp).toISOString();

  const errorPayload = React.useMemo(
    () =>
      JSON.stringify(
        {
          name: error.name,
          message: error.message,
          stack: error.stack,
          componentStack: error.componentStack,
          timestamp: error.timestamp,
          url: error.url,
          userAgent: error.userAgent,
          firstLocation: error.firstLocation,
          locations: error.locations,
        },
        null,
        2
      ),
    [error]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(errorPayload);
    } catch {
      // Keep fallback stable if clipboard is not available.
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="mx-auto w-full max-w-5xl space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-foreground">Application Error</h2>
          <p className="text-sm text-muted-foreground">Exact runtime error details captured below.</p>
        </div>

        <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3">
          <p className="break-words font-mono text-sm text-red-400">{errorLabel}</p>
          {error.firstLocation ? (
            <div className="mt-3">
              <ErrorLocationInfo location={error.firstLocation} />
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
          <div className="rounded border border-border/70 px-3 py-2">Captured: {capturedAt}</div>
          <div className="rounded border border-border/70 px-3 py-2 break-all">URL: {error.url}</div>
        </div>

        {error.stack ? (
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Stack Trace</h3>
            <pre className="max-h-80 overflow-auto rounded-md border border-border/70 bg-muted/30 p-3 text-xs text-foreground">
              {error.stack}
            </pre>
          </section>
        ) : null}

        {error.componentStack ? (
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Component Stack</h3>
            <pre className="max-h-80 overflow-auto rounded-md border border-border/70 bg-muted/30 p-3 text-xs text-foreground">
              {error.componentStack}
            </pre>
          </section>
        ) : null}

        {error.locations.length > 0 ? (
          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Parsed Frames</h3>
            <div className="space-y-2">
              {error.locations.map((location, index) => (
                <ErrorLocationInfo key={`${location.fileName}-${location.lineNumber}-${index}`} location={location} />
              ))}
            </div>
          </section>
        ) : null}

        <details className="rounded-md border border-border/70 bg-muted/20 p-3">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">Raw Error Payload (JSON)</summary>
          <pre className="mt-3 max-h-80 overflow-auto text-xs text-foreground">{errorPayload}</pre>
        </details>

        <div className="flex flex-wrap justify-end gap-2 border-t border-border pt-4">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted"
          >
            Copy Error JSON
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted"
          >
            Reload Page
          </button>
          <button
            type="button"
            onClick={resetError}
            className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
          >
            Retry Application
          </button>
        </div>
      </div>
    </div>
  );
}
