import { useRef } from 'react';
import { JsonViewerContentProps } from './interface';
import { useJsonViewer } from './JsonViewer';
import { cn } from '@/utils';

export const JsonViewerContent = ({
  className = '',
}: JsonViewerContentProps) => {
  const { jsonData } = useJsonViewer();
  const containerRef = useRef<HTMLPreElement>(null);

  return (
    <pre
      ref={containerRef}
      className={cn(
        'whitespace-pre-wrap p-2 bg-gray-50 rounded max-h-[100vh] overflow-auto text-sm',
        className
      )}
      dangerouslySetInnerHTML={{ __html: jsonData }}
    />
  );
};
