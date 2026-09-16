import React, { type ReactNode } from 'react';

interface SnippetDisplayProps {
  snippet: ReactNode;
  highlighter: ReactNode;
}

const SnippetDisplay: React.FC<SnippetDisplayProps> = ({ snippet, highlighter }) => {
  return (
    <div className="flex h-auto w-full max-w-full flex-col overflow-hidden rounded-lg border bg-background dark:border-gray-200/10">
      <div className="flex h-auto w-full min-w-0">
        <div
          className="relative flex w-full min-w-0 items-center justify-center overflow-x-auto bg-[radial-gradient(circle,_rgba(148,163,184,0.35)_1px,_transparent_1px)] [background-size:16px_16px]"
        >
          <div className="flex min-h-[120px] w-full min-w-0 items-center justify-center overflow-x-auto p-4 sm:p-6 md:p-8">
            <div className="w-full min-w-0 max-w-full">{snippet}</div>
          </div>
        </div>
      </div>
      <div className="h-auto overflow-x-auto border-t p-1.5 dark:border-gray-200/10">
        <div className="rounded border dark:border-gray-200/10">{highlighter}</div>
      </div>
    </div>
  );
};

export default SnippetDisplay;
