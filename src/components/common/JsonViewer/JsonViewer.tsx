import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  createContext,
  useContext,
} from 'react';
import Box from '../Box';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { JsonViewerContextType, JsonViewerProps } from './interface';
import { JsonViewerHeader } from './JsonViewerHeader';
import { JsonViewerContent } from './JsonViewerContent';

export const JsonViewerContext = createContext<JsonViewerContextType | null>(
  null
);

export const useJsonViewer = () => {
  const context = useContext(JsonViewerContext);
  if (!context) {
    throw new Error(
      'JsonViewer compound components must be used within JsonViewer'
    );
  }
  return context;
};

const JsonViewerComponent = forwardRef<HTMLDivElement, JsonViewerProps>(
  (
    {
      width = 'auto',
      height = 'auto',
      indentation = 4,
      replacer = null,
      margin = '10px',
      padding = '5px',
      data,
      children,
      title,
      copy = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [jsonData, setJsonData] = useState<string>('');
    const [copyButtonText, setCopyButtonText] = useState(
      <Clipboard className="size-3" />
    );
    const containerRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
      let formattedJsonData: string;

      try {
        if (Array.isArray(replacer)) {
          formattedJsonData = JSON.stringify(
            data,
            replacer as (string | number)[],
            indentation
          );
        } else if (typeof replacer === 'function') {
          formattedJsonData = JSON.stringify(
            data,
            replacer as (key: string, value: any) => any,
            indentation
          );
        } else {
          formattedJsonData = JSON.stringify(data, null, indentation);
        }
      } catch (error) {
        console.error('Error stringifying JSON:', error);
        formattedJsonData = 'Error formatting JSON data';
      }
      const formattedData = formattedJsonData?.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)|(\b(true|false|null|undefined)\b)|(\d+(\.\d+)?)|(\{|\}|\[|\])|(\/(\/|[^/])+\/)|(\[object (Object|Array|String|Number|Boolean|Symbol|Function)\])/g,
        (match) => {
          let classString = '';
          if (/^"/.test(match)) {
            classString = match.endsWith(':')
              ? 'text-gray-800 font-semibold'
              : 'text-pink-500';
          } else if (/true|false|null|undefined/.test(match)) {
            classString = 'text-blue-400';
          } else if (/\d+(\.\d+)?/.test(match)) {
            classString = 'text-blue-500';
          } else if (/\{|\}/.test(match)) {
            classString = 'text-gray-700';
          } else if (/\[|\]/.test(match)) {
            classString = 'text-gray-700';
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
          return `<span class="${classString}">${match}</span>`;
        }
      );
      setJsonData(formattedData || '');
    }, [data, replacer, indentation]);

    const handleCopyToClipboard = () => {
      const container = containerRef.current;
      if (container) {
        const textContent = container.textContent || '';
        navigator.clipboard
          .writeText(textContent)
          .then(() => {
            setCopyButtonText(<ClipboardCheck className="size-3" />);
            setTimeout(() => {
              setCopyButtonText(<Clipboard className="size-3" />);
            }, 2000);
          })
          .catch((err) => {
            console.error('Failed to copy JSON data: ', err);
          });
      }
    };

    const contextValue: JsonViewerContextType = {
      jsonData,
      copyToClipboard: handleCopyToClipboard,
      copyButtonText,
    };

    // Handle legacy and modern usage
    const renderContent = () => {
      if (children) {
        return children;
      }
      return (
        <>
          {(title || copy) && <JsonViewerHeader>{title}</JsonViewerHeader>}
          <JsonViewerContent />
        </>
      );
    };

    return (
      <JsonViewerContext.Provider value={contextValue}>
        <Box
          ref={ref}
          className={`${className || ''} border rounded-lg overflow-auto`}
          style={{ margin, padding, width, height, ...style }}
          {...rest}
        >
          {renderContent()}
        </Box>
      </JsonViewerContext.Provider>
    );
  }
);

JsonViewerComponent.displayName = 'JsonViewer';

export default Object.assign(
  JsonViewerComponent as React.ForwardRefExoticComponent<
    JsonViewerProps & React.RefAttributes<HTMLDivElement>
  >,
  {
    Header: JsonViewerHeader,
    Content: JsonViewerContent,
  }
);

export { JsonViewerHeader, JsonViewerContent };
