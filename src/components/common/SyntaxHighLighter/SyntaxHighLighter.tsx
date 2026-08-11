import React, { useCallback, useState, useEffect, useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { githubLightInit, githubDarkInit } from '@uiw/codemirror-theme-github';
import { Clipboard, Check } from 'lucide-react';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { cn } from '@/utils';
import Button from '../Button';
import Spinner from '../Spinner';
import { useToast } from 'kalki-ui-toast';
import { useTheme } from '@/context/ThemeContext';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
}

const sharedThemeSettings = {
  background: 'transparent',
  gutterBackground: 'transparent',
  fontSize: '14px',
  fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language = 'jsx',
  lineNumbers = false,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { addToast } = useToast();

  const showToast = useCallback(() => {
    addToast({
      message: 'copied to clipboard',
      variant: 'default',
    });
  }, [addToast]);

  const languageMap = {
    typescript: [javascript({ typescript: true })],
    ts: [javascript({ typescript: true })],
    jsx: [javascript({ jsx: true })],
    tsx: [javascript({ jsx: true })],
    html: [html()],
    css: [css()],
    javascript: [javascript()],
  };

  const getLanguageExtension = () => {
    return languageMap[language as keyof typeof languageMap] || [javascript()];
  };

  const codeTheme = useMemo(
    () =>
      isDark
        ? githubDarkInit({
            settings: {
              ...sharedThemeSettings,
              foreground: '#c9d1d9',
              caret: '#c9d1d9',
              selection: 'rgba(56, 139, 253, 0.35)',
              selectionMatch: 'rgba(56, 139, 253, 0.25)',
              gutterForeground: '#8b949e',
              lineHighlight: 'transparent',
            },
          })
        : githubLightInit({
            settings: {
              ...sharedThemeSettings,
              foreground: '#24292f',
              caret: '#24292f',
              selection: 'rgba(9, 105, 218, 0.2)',
              selectionMatch: 'rgba(9, 105, 218, 0.15)',
              gutterForeground: '#656d76',
              lineHighlight: 'transparent',
            },
          }),
    [isDark]
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [code]);

  const handleCopy = useCallback(async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.trim());
      setIsCopied(true);
      showToast();
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Failed to copy code:', err);
      setIsCopied(false);
    }
  }, [code, showToast]);

  return (
    <div
      className={`group relative  rounded-xl overflow-hidden backdrop-blur-xl backdrop-saturate-150 
      bg-background dark:border-gray-200/10 
      before:absolute before:inset-0 before:rounded-xl`}
    >
      <div className="relative">
        <div className="absolute right-4 top-4 z-10">
          <Button
            onClick={handleCopy}
            className="invisible group-hover:visible"
            variant="outline"
            title={isCopied ? 'Copied!' : 'Copy code'}
            aria-label={isCopied ? 'Copied!' : 'Copy code'}
          >
            {isCopied ? (
              <Check className={cn('text-[var(--icon-color)] transition-all duration-200 size-3')} />
            ) : (
              <Clipboard className={cn('text-[var(--icon-color)] transition-all duration-200 size-3')} />
            )}
          </Button>
        </div>

        <div className="relative">
          {isLoading ? (
            <div className="flex justify-center items-center h-24">
              <Spinner variant="secondary" />
            </div>
          ) : (
            <CodeMirror
              key={theme}
              value={code}
              height="auto"
              editable={false}
              theme={codeTheme}
              extensions={getLanguageExtension()}
              basicSetup={{
                lineNumbers,
                foldGutter: false,
                highlightActiveLineGutter: false,
                highlightActiveLine: false,
                tabSize: 2,
              }}
              className="text-sm p-4 font-normal"
              {...rest}
            />
          )}
        </div>
      </div>
    </div>
  );
};
