import { createContext, useContext, useState, forwardRef, ReactNode } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, FolderOpen, Sun, Moon, Clipboard } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { javascript } from '@codemirror/lang-javascript';

interface FileType {
  id: string;
  name: string;
  content?: string;
}

type Theme = 'light' | 'dark';

interface CodeViewerContextType {
  selectedFile: FileType | null;
  setSelectedFile: (file: FileType | null) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const codeViewerWrapper = cva('relative h-screen border rounded-md overflow-hidden', {
  variants: {
    theme: {
      light: 'bg-white border-gray-200',
      dark: 'bg-gray-900 border-gray-700',
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

// Context
const CodeViewerContext = createContext<CodeViewerContextType | undefined>(undefined);

// Hook
const useCodeViewer = () => {
  const context = useContext(CodeViewerContext);
  if (!context) {
    throw new Error('CodeViewer components must be used within a CodeViewer');
  }
  return context;
};

// CodeViewer
interface CodeViewerProps extends VariantProps<typeof codeViewerWrapper> {
  children: ReactNode;
  className?: string;
}

const CodeViewer = forwardRef<HTMLDivElement, CodeViewerProps>(({ children, className }, ref) => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <CodeViewerContext.Provider value={{ selectedFile, setSelectedFile, theme, toggleTheme }}>
      <div ref={ref} className={codeViewerWrapper({ theme, className })}>
        <div className="flex h-full">{children}</div>
      </div>
    </CodeViewerContext.Provider>
  );
});

CodeViewer.displayName = 'CodeViewer';

// Explorer
interface CodeViewerExplorerProps {
  children: ReactNode;
  className?: string;
}

const CodeViewerExplorer = forwardRef<HTMLDivElement, CodeViewerExplorerProps>(({ children, className }, ref) => {
  const { theme, toggleTheme } = useCodeViewer();

  return (
    <div
      ref={ref}
      className={cn(
        `w-64 min-w-64 border-r transition-colors duration-200 ${
          theme === 'light' ? 'border-gray-200 bg-white' : 'border-gray-700 bg-gray-900'
        }`,
        className
      )}
    >
      <div
        className={`px-4 py-2 h-10 border-b flex items-center justify-between transition-colors duration-200 ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-700'
        }`}
      >
        <h2 className={`text-xs font-medium ${theme === 'light' ? 'text-foreground' : 'text-gray-100'}`}>Files</h2>
        <button
          onClick={toggleTheme}
          className={`p-1.5 rounded-md transition-colors ${
            theme === 'light' ? 'text-foreground hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-800'
          }`}
        >
          {theme === 'light' ? (
            <Moon className={cn('mx-1.5 size-4 text-[var(--icon-color)]')} />
          ) : (
            <Sun className={cn('mx-1.5 size-4 text-[var(--icon-color-d)]')} />
          )}
        </button>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
});

CodeViewerExplorer.displayName = 'CodeViewerExplorer';

// Folder
interface CodeViewerFolderProps {
  name: string;
  children: ReactNode;
  className?: string;
}

const CodeViewerFolder = forwardRef<HTMLDivElement, CodeViewerFolderProps>(({ name, children, className }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useCodeViewer();

  return (
    <div ref={ref}>
      <div
        className={cn(
          `flex items-center px-3 py-1.5 cursor-pointer rounded-md transition-colors ${
            theme === 'light' ? 'hover:bg-gray-100 text-foreground' : 'hover:bg-gray-800 text-gray-200'
          }`,
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown
            className={cn('size-4', theme === 'light' ? 'text-[var(--icon-color)]' : 'text-[var(--icon-color-d)]')}
          />
        ) : (
          <ChevronRight
            className={cn('size-4', theme === 'light' ? 'text-[var(--icon-color)]' : 'text-[var(--icon-color-d)]')}
          />
        )}
        {isOpen ? (
          <FolderOpen
            className={cn(
              'mx-1.5 size-4',
              theme === 'light' ? 'text-[var(--icon-color)]' : 'text-[var(--icon-color-d)]'
            )}
          />
        ) : (
          <Folder
            className={cn(
              'mx-1.5 size-4',
              theme === 'light' ? 'text-[var(--icon-color)]' : 'text-[var(--icon-color-d)]'
            )}
          />
        )}
        <span className="text-xs">{name}</span>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
});

CodeViewerFolder.displayName = 'CodeViewerFolder';

// File
interface CodeViewerFileProps {
  id: string;
  name: string;
  children?: string;
  icon?: ReactNode;
  className?: string;
}

const CodeViewerFile = forwardRef<HTMLDivElement, CodeViewerFileProps>(
  ({ id, name, children, icon, className }, ref) => {
    const { selectedFile, setSelectedFile, theme } = useCodeViewer();
    const isSelected = selectedFile?.id === id;

    return (
      <div
        ref={ref}
        className={cn(
          `group flex items-center px-3 py-1.5 my-1 cursor-pointer rounded-md transition-colors ${
            isSelected
              ? theme === 'light'
                ? 'bg-blue-100'
                : 'bg-blue-900/50'
              : theme === 'light'
              ? 'hover:bg-gray-100'
              : 'hover:bg-gray-800'
          }`,
          className
        )}
        onClick={() => setSelectedFile({ id, name, content: children || '' })}
      >
        {icon ? (
          icon
        ) : (
          <FileText
            className={cn(
              'ml-6 mr-1.5 size-4',
              theme === 'light' ? 'text-[var(--icon-color)]' : 'text-[hsl(218,11%,65%)]'
            )}
          />
        )}
        <span className={`text-xs ${theme === 'light' ? 'text-foreground' : 'text-gray-200'}`}>{name}</span>
      </div>
    );
  }
);

CodeViewerFile.displayName = 'CodeViewerFile';

// Preview
interface CodeViewerPreviewProps {
  className?: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
}

const CodeViewerPreview = forwardRef<HTMLDivElement, CodeViewerPreviewProps>(
  ({ className, language = 'jsx', lineNumbers = false, title, ...rest }, ref) => {
    const { selectedFile, theme } = useCodeViewer();

    const getLanguageExtension = () => {
      if (['typescript', 'ts', 'jsx', 'tsx'].includes(language)) {
        return [javascript({ jsx: true, typescript: language.includes('ts') })];
      }
      return [javascript()];
    };
    const copyContent = () => {
      if (selectedFile?.content) {
        navigator.clipboard.writeText(selectedFile.content).then(() => {
          alert('Content copied to clipboard!');
        });
      }
    };
    return (
      <div ref={ref} className={cn('flex-1 overflow-hidden', className)}>
        {selectedFile ? (
          <div className="h-full flex flex-col">
            <div
              className={`px-4 py-2 h-10 border-b flex justify-between items-center transition-colors duration-200 ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-700'
              }`}
            >
              <span className={`text-xs ${theme === 'light' ? 'text-foreground' : 'text-gray-300'}`}>
                {selectedFile.name}
              </span>
              <button
                onClick={copyContent}
                className={`flex items-center gap-1 text-xs p-1  rounded ${
                  theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-800 text-gray-300'
                } hover:bg-opacity-75`}
              >
                <Clipboard className="size-4" />
              </button>
            </div>

            <div className="overflow-hidden w-full h-full">
              <CodeMirror
                value={selectedFile.content || 'No content available'}
                height="100%"
                editable={false}
                theme={andromedaInit({
                  settings: {
                    background: theme === 'light' ? 'bg-gray-50' : 'bg-gray-900',
                    fontFamily:
                      'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
                  },
                })}
                extensions={[getLanguageExtension()]}
                basicSetup={{
                  lineNumbers: false,
                  foldGutter: false,
                  highlightActiveLineGutter: false,
                  highlightActiveLine: false,
                  tabSize: 4,
                }}
                className="text-xs font-medium leading-6 h-full"
                {...rest}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground ">
            Select a file to view its content
          </div>
        )}
      </div>
    );
  }
);

CodeViewerPreview.displayName = 'CodeViewerPreview';

export default Object.assign(
  CodeViewer as React.ForwardRefExoticComponent<CodeViewerProps & React.RefAttributes<HTMLDivElement>>,
  {
    Explorer: CodeViewerExplorer,
    Folder: CodeViewerFolder,
    File: CodeViewerFile,
    Preview: CodeViewerPreview,
  }
);

export { CodeViewerExplorer, CodeViewerFolder, CodeViewerFile, CodeViewerPreview };
