import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { cn } from '@/utils';

interface CodeEditorProps {
  language?: 'javascript' | 'typescript' | 'jsx' | 'tsx' | 'ts' | 'js';
  value?: string;
  onChange?: (value: string) => void;
  height?: string;
  className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language = 'jsx',
  value = '',
  onChange,
  height = 'h-96',
  className = '',
}) => {
  const getLanguageExtension = () => {
    if (['typescript', 'ts', 'jsx', 'tsx'].includes(language)) {
      return [javascript({ jsx: true, typescript: language.includes('ts') })];
    }
    return [javascript()];
  };

  return (
    <div className={cn('w-full', height, className)}>
      <CodeMirror
        value={value}
        height="100%"
        theme={andromedaInit({
          settings: {
            background: '#1e293b',
            fontFamily:
              'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
          },
        })}
        extensions={[getLanguageExtension()]}
        onChange={(value) => onChange?.(value)}
        className="h-full rounded-lg overflow-hidden"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          history: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
