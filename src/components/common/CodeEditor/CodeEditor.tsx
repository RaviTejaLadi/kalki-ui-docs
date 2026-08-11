import React, { useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubLightInit, githubDarkInit } from '@uiw/codemirror-theme-github';
import { cn } from '@/utils';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getLanguageExtension = () => {
    if (['typescript', 'ts', 'jsx', 'tsx'].includes(language)) {
      return [javascript({ jsx: true, typescript: language.includes('ts') })];
    }
    return [javascript()];
  };

  const codeTheme = useMemo(
    () =>
      isDark
        ? githubDarkInit({
            settings: {
              fontFamily:
                'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
            },
          })
        : githubLightInit({
            settings: {
              fontFamily:
                'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
            },
          }),
    [isDark]
  );

  return (
    <div className={cn('w-full', height, className)}>
      <CodeMirror
        key={theme}
        value={value}
        height="100%"
        theme={codeTheme}
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
