import React, { useState, useEffect, useRef, forwardRef, useId } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import Button from '../Button';
import { cn } from '@/utils';
import Div from '../Div';

// #region types
type JsonReplacer = ((key: string, value: unknown) => unknown) | (number | string)[] | null;

interface JsonViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  indentation?: number;
  replacer?: JsonReplacer;
  data: object | unknown[];
  className?: string;
}

// #endregion

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const highlightJson = (formattedJson: string): string =>
  formattedJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)|(\b(true|false|null|undefined)\b)|(\d+(\.\d+)?)|(\{|\}|\[|\])|(\/(\/|[^/])+\/)|(\[object (Object|Array|String|Number|Boolean|Symbol|Function)\])/g,
    (match) => {
      let classString = '';
      if (/^"/.test(match)) {
        classString = match.endsWith(':') ? 'text-muted-foreground font-semibold' : 'text-pink-500';
      } else if (/true|false|null|undefined/.test(match)) {
        classString = 'text-blue-400';
      } else if (/\d+(\.\d+)?/.test(match)) {
        classString = 'text-blue-500';
      } else if (/\{|\}/.test(match)) {
        classString = 'text-muted-foreground';
      } else if (/\[|\]/.test(match)) {
        classString = 'text-muted-foreground';
      } else if (/\/(\/|[^/])+\//.test(match)) {
        classString = 'text-red-500';
      } else if (/\[object (Object|Array)\]/.test(match)) {
        classString = 'text-green-500';
      } else if (/\[object String\]/.test(match)) {
        classString = 'text-pink-500';
      } else if (/\[object Number\]/.test(match)) {
        classString = 'text-blue-500';
      } else if (/\[object Boolean\]/.test(match)) {
        classString = 'text-blue-400';
      } else if (/\[object Symbol\]/.test(match)) {
        classString = 'text-purple-500';
      } else if (/\[object Function\]/.test(match)) {
        classString = 'text-blue-800';
      }
      return `<span class="${classString}">${escapeHtml(match)}</span>`;
    }
  );

// #region components
const JsonViewer = forwardRef<HTMLDivElement, JsonViewerProps>(
  ({ indentation = 4, replacer = null, data, className, style, ...rest }, ref) => {
    const [jsonData, setJsonData] = useState<string>('');
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLPreElement>(null);
    const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const labelId = useId();

    useEffect(() => {
      let formattedJsonData: string;

      try {
        if (Array.isArray(replacer)) {
          formattedJsonData = JSON.stringify(data, replacer as (string | number)[], indentation);
        } else if (typeof replacer === 'function') {
          formattedJsonData = JSON.stringify(data, replacer, indentation);
        } else {
          formattedJsonData = JSON.stringify(data, null, indentation);
        }
      } catch {
        formattedJsonData = 'Error formatting JSON data';
      }

      setJsonData(highlightJson(formattedJsonData || ''));
    }, [data, replacer, indentation]);

    useEffect(() => {
      return () => {
        if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      };
    }, []);

    const handleCopyToClipboard = () => {
      const container = containerRef.current;
      if (!container) return;

      const textContent = container.textContent || '';
      navigator.clipboard
        .writeText(textContent)
        .then(() => {
          setCopied(true);
          if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
          copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setCopied(false);
        });
    };

    return (
      <Div
        ref={ref}
        className={cn('border group dark:border-gray-200/10 relative rounded-lg overflow-auto', className)}
        style={{ ...style }}
        aria-labelledby={labelId}
        {...rest}
      >
        <span id={labelId} className="sr-only">
          JSON viewer
        </span>
        <Button
          variant="light"
          size="xs"
          className="invisible group-hover:visible focus-visible:visible right-2 top-2 absolute"
          onClick={handleCopyToClipboard}
          aria-label={copied ? 'Copied to clipboard' : 'Copy JSON to clipboard'}
        >
          {copied ? <ClipboardCheck className="size-3 text-[var(--icon-color)]" /> : <Clipboard className="size-3" />}
        </Button>
        <pre
          ref={containerRef}
          className={cn(
            'whitespace-pre-wrap p-2 bg-gray-50 dark:bg-gray-100/10 rounded max-h-[100vh] overflow-auto text-sm'
          )}
          dangerouslySetInnerHTML={{ __html: jsonData }}
        />
      </Div>
    );
  }
);

JsonViewer.displayName = 'JsonViewer';
// #endregion

// #region export
export default JsonViewer;

export type { JsonViewerProps, JsonReplacer };
// #endregion
