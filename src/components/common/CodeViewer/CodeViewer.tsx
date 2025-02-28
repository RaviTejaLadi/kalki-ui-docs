import React, { createContext, useContext, useState, forwardRef, ReactNode, useEffect } from 'react';
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  Clipboard,
  Search,
  GitBranch,
  Settings,
} from 'lucide-react';
import { cn } from '@/utils';
import CodeMirror from '@uiw/react-codemirror';
import { andromedaInit } from '@uiw/codemirror-theme-andromeda';
import { javascript } from '@codemirror/lang-javascript';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background text-gray-600">
      {/* Main content */}
      <div className="flex flex-col items-center space-y-6 max-w-lg text-center p-8">
        {/* Icon Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer group">
            <FileText className="size-8 mb-2 text-blue-500 group-hover:text-blue-600" />
            <span className="text-sm font-medium">New File</span>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer group">
            <FolderOpen className="size-8 mb-2 text-orange-500 group-hover:text-orange-600" />
            <span className="text-sm font-medium">Open Folder</span>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer group">
            <GitBranch className="size-8 mb-2 text-purple-500 group-hover:text-purple-600" />
            <span className="text-sm font-medium">Clone Git Repository</span>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer group">
            <Search className="size-8 mb-2 text-green-500 group-hover:text-green-600" />
            <span className="text-sm font-medium">Find in Files</span>
          </div>
        </div>

        {/* Recent Files Section */}
        <div className="w-full">
          <h2 className="text-sm font-semibold mb-3 text-gray-700">Recent Files</h2>
          <div className="space-y-2">
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
              <FileText className="size-4 mr-2 text-gray-500" />
              <span className="text-sm">index.tsx</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
              <FileText className="size-4 mr-2 text-gray-500" />
              <span className="text-sm">styles.css</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
              <FileText className="size-4 mr-2 text-gray-500" />
              <span className="text-sm">package.json</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-5 py-3 px-4 border-t border-gray-200 bg-background dark:border-gray-200/10">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Settings className="size-3 mr-1" />
            <span>Settings</span>
          </div>
          <span>Version 1.0.0</span>
        </div>
      </div>
    </div>
  );
};

interface FileType {
  type: 'file';
  id: string;
  name: string;
  content: string;
}

interface FolderType {
  type: 'folder';
  name: string;
  children: (FileType | FolderType)[];
}

type FileSystemItem = FileType | FolderType;

interface CodeViewerContextType {
  selectedFile: FileType | null;
  setSelectedFile: (file: FileType | null) => void;
  allFiles: FileType[];
}

const CodeViewerContext = createContext<CodeViewerContextType | undefined>(undefined);

const useCodeViewer = () => {
  const context = useContext(CodeViewerContext);
  if (!context) {
    throw new Error('CodeViewer components must be used within a CodeViewer');
  }
  return context;
};

// Helper function to extract all files from the nested structure
const getAllFiles = (items: FileSystemItem[]): FileType[] => {
  const files: FileType[] = [];

  const traverse = (items: FileSystemItem[]) => {
    items.forEach((item) => {
      if (item.type === 'file') {
        files.push(item);
      } else {
        traverse(item.children);
      }
    });
  };

  traverse(items);
  return files;
};

interface CodeViewerProps {
  children: ReactNode;
  className?: string;
  defaultFileOpen?: string;
  items?: FileSystemItem[];
}

const CodeViewer = forwardRef<HTMLDivElement, CodeViewerProps>(
  ({ children, className, defaultFileOpen, items = [] }, ref) => {
    const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
    const allFiles = getAllFiles(items);

    useEffect(() => {
      if (!selectedFile && allFiles.length > 0) {
        if (defaultFileOpen) {
          const defaultFile = allFiles.find((file) => file.id === defaultFileOpen);
          if (defaultFile) {
            setSelectedFile(defaultFile);
            return;
          }
        }
        setSelectedFile(allFiles[0]);
      }
    }, [defaultFileOpen, allFiles, selectedFile]);

    return (
      <CodeViewerContext.Provider value={{ selectedFile, setSelectedFile, allFiles }}>
        <div
          ref={ref}
          className={cn(
            'relative h-screen m-4 border rounded-md overflow-hidden bg-background border-gray-200 dark:border-gray-200/10',
            className
          )}
        >
          <div className="flex h-full">{children}</div>
        </div>
      </CodeViewerContext.Provider>
    );
  }
);

CodeViewer.displayName = 'CodeViewer';
interface CodeViewerExplorerProps {
  children: ReactNode;
  className?: string;
}

const CodeViewerExplorer = forwardRef<HTMLDivElement, CodeViewerExplorerProps>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(' w-64 min-w-64 border-r border-gray-200 dark:border-gray-200/10 bg-background', className)}
    >
      <div className="px-4  py-2  h-10 border-b border-gray-200 dark:border-gray-200/10 flex items-center">
        <h2 className="text-xs font-medium text-muted-foreground">Files</h2>
      </div>
      <div className="p-2 h-full overflow-y-auto">{children}</div>
    </div>
  );
});

CodeViewerExplorer.displayName = 'CodeViewerExplorer';

// Update Folder component
interface CodeViewerFolderProps {
  name: string;
  children: ReactNode;
  className?: string;
}

const CodeViewerFolder = forwardRef<HTMLDivElement, CodeViewerFolderProps>(({ name, children, className }, ref) => {
  const [isOpen, setIsOpen] = useState(true); // Changed to true by default for better UX

  return (
    <div ref={ref}>
      <div
        className={cn(
          'flex items-center px-3 py-1.5 cursor-pointer rounded-md hover:bg-gray-100/10 text-muted-foreground',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="size-4 text-[var(--icon-color)]" />
        ) : (
          <ChevronRight className="size-4 text-[var(--icon-color)]" />
        )}
        {isOpen ? (
          <FolderOpen className="mx-1.5 size-4 text-[var(--icon-color)]" />
        ) : (
          <Folder className="mx-1.5 size-4 text-[var(--icon-color)]" />
        )}
        <span className="text-xs">{name}</span>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
});
CodeViewerFolder.displayName = 'CodeViewerFolder';

// File component remains mostly the same, but uses the new FileType
interface CodeViewerFileProps {
  id: string;
  name: string;
  children?: string;
  icon?: ReactNode;
  className?: string;
}

const CodeViewerFile = forwardRef<HTMLDivElement, CodeViewerFileProps>(
  ({ id, name, children, icon, className }, ref) => {
    const { selectedFile, setSelectedFile } = useCodeViewer();
    const isSelected = selectedFile?.id === id;

    return (
      <div
        ref={ref}
        className={cn(
          `group flex items-center px-3 py-1.5 my-1 cursor-pointer rounded-md transition-colors`,
          isSelected ? 'bg-blue-100/10' : 'hover:bg-gray-100/10',
          className
        )}
        onClick={() =>
          setSelectedFile({
            type: 'file',
            id,
            name,
            content: children || '',
          })
        }
      >
        {icon || <FileText className="ml-6 mr-1.5 size-4 text-[var(--icon-color)]" />}
        <span className="text-xs text-muted-foreground">{name}</span>
      </div>
    );
  }
);
CodeViewerFile.displayName = 'CodeViewerFile';

interface CodeViewerPreviewProps {
  className?: string;
  language?: string;
  lineNumbers?: boolean;
  title?: string;
}

const CodeViewerPreview = forwardRef<HTMLDivElement, CodeViewerPreviewProps>(
  ({ className, language = 'jsx', lineNumbers = false, ...rest }, ref) => {
    const { selectedFile } = useCodeViewer();

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
            <div className="px-4 py-2 h-10 border-b border-gray-200 dark:border-gray-200/10 flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{selectedFile.name}</span>
              <button
                onClick={copyContent}
                className="flex items-center gap-1 text-xs p-1 hover:bg-gray-200/10 rounded border-gray-200 dark:border-gray-200/10 bg-background hover:bg-opacity-75"
              >
                <Clipboard className="size-4 text-[var(--icon-color)]" />
              </button>
            </div>

            <div className="overflow-hidden w-full h-full">
              <CodeMirror
                value={selectedFile.content || 'No content available'}
                height="100%"
                editable={false}
                theme={andromedaInit({
                  settings: {
                    background: 'bg-gray-50',
                    fontFamily:
                      'Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
                  },
                })}
                extensions={[getLanguageExtension()]}
                basicSetup={{
                  lineNumbers: lineNumbers,
                  foldGutter: true,
                  highlightActiveLineGutter: true,
                  highlightActiveLine: true,
                  tabSize: 2,
                  autocompletion: true,
                }}
                className="text-xs font-medium leading-6 tracking-wide h-full px-5 py-4"
                {...rest}
              />
            </div>
          </div>
        ) : (
          <EmptyState />
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
