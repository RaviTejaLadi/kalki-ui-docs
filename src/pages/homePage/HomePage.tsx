import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Div from '@/components/common/Div';
import CodeViewer from '@/components/common/CodeViewer/CodeViewer';
// import Usage from '@/components/common/Usage';

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

const filesAndFolders: FileSystemItem[] = [
  {
    type: 'folder',
    name: 'src',
    children: [
      {
        type: 'file',
        id: '1',
        name: 'index.js',
        content: `console.log('Hello, world!');`,
      },
      {
        type: 'file',
        id: '2',
        name: 'App.js',
        content: `import React from 'react';

const App = () => <div>Hello, App!</div>;
export default App;`,
      },
      {
        type: 'folder',
        name: 'components',
        children: [
          {
            type: 'file',
            id: '3',
            name: 'Button.js',
            content: `export const Button = () => <button>Click me!</button>;`,
          },
          {
            type: 'file',
            id: '4',
            name: 'Input.js',
            content: `export const Input = () => <input placeholder="Type here" />;`,
          },
        ],
      },
      {
        type: 'folder',
        name: 'utils',
        children: [
          {
            type: 'file',
            id: '5',
            name: 'helpers.js',
            content: `export const add = (a, b) => a + b;`,
          },
          {
            type: 'file',
            id: '6',
            name: 'format.js',
            content: `export const format = (value) => value.trim();`,
          },
        ],
      },
    ],
  },
  {
    type: 'folder',
    name: 'public',
    children: [
      {
        type: 'file',
        id: '7',
        name: 'index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Code Viewer</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,
      },
    ],
  },
];

const renderExplorer = (items: FileSystemItem[]): React.ReactNode =>
  items.map((item) => {
    if (item.type === 'folder') {
      return (
        <CodeViewer.Folder key={item.name} name={item.name}>
          {renderExplorer(item.children)}
        </CodeViewer.Folder>
      );
    }
    return <CodeViewer.File key={item.id} id={item.id} name={item.name} children={item.content} />;
  });

export default function Home() {
  return (
    <Div>
      {/* <Usage /> */}
      <CodeViewer className="h-screen" items={filesAndFolders} defaultFileOpen='1'>
        <CodeViewer.Explorer>{renderExplorer(filesAndFolders)}</CodeViewer.Explorer>
        <CodeViewer.Preview />
      </CodeViewer>
      <Head title="Home" />
      <HeroSection />
      <FeaturesSection />
      <ComponentCategoriesSection />
      <FooterSection />
    </Div>
  );
}
