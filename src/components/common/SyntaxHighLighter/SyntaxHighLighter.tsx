import React, { useCallback, useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { Clipboard, Check } from 'lucide-react';

// Import language extensions
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

interface SyntaxHighLighterProps {
  code: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
}

export const SyntaxHighLighter: React.FC<SyntaxHighLighterProps> = ({
  code,
  language = 'jsx',
  lineNumbers = false,
  title,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const getLanguageExtension = () => {
    switch (language) {
      case 'typescript':
      case 'ts':
        return [javascript({ typescript: true })];
      case 'jsx':
      case 'tsx':
        return [javascript({ jsx: true })];
      case 'html':
        return [html()];
      case 'css':
        return [css()];
      default:
        return [javascript()];
    }
  };

  const [buttonIcon, setButtonIcon] = useState(<Clipboard className="text-white" size={16} />);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [code]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code?.trim() || '');
      setButtonIcon(<Check className="text-white" size={16} />);
      setTimeout(() => {
        setButtonIcon(<Clipboard className="text-white" size={16} />);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }, [code]);

  return (
    <div className="border border-transparent rounded-lg overflow-hidden shadow-inner mb-4">
      <div className="flex justify-between items-center px-4 py-2 bg-[#1d2429] border-b border-transparent">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* <span className="text-xs font-semibold text-gray-300 ml-5">{title ? title : language}</span> */}
        </div>
        <button
          className="bg-transparent border-none cursor-pointer p-1 rounded hover:bg-gray-700"
          onClick={handleCopy}
        >
          {buttonIcon}
        </button>
      </div>
      <div className="p-0">
        {isLoading ? (
          <div className="flex justify-center items-center h-24 bg-[#1d2429]">loading...</div>
        ) : (
          <CodeMirror
            value={code}
            height="auto"
            editable={false}
            theme={andromedaInit({
              settings: {
                background: '#1d2429',
                fontFamily:
                  'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
              },
            })}
            extensions={[getLanguageExtension()]}
            basicSetup={{
              lineNumbers: lineNumbers,
              foldGutter: false,
              highlightActiveLineGutter: false,
              highlightActiveLine: false,
              tabSize: 2,
            }}
            className="text-sm font-medium leading-6"
            {...rest}
          />
        )}
      </div>
    </div>
  );
};
