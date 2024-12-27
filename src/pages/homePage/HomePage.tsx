import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Div from '@/components/common/Div';
import CodeViewer from '@/components/common/CodeViewer/CodeViewer';
// import Usage from '@/components/common/Usage';

export default function Home() {
  const files = [
    { id: '1', name: 'File1.js', content: 'console.log("File 1 content");' },
    { id: '2', name: 'File2.js', content: 'console.log("File 2 content");' },
  ];
  return (
    <Div>
      {/* <Usage /> */}
      <CodeViewer className="h-screen">
      <CodeViewer.Explorer>
        <CodeViewer.Folder name="src">
          <CodeViewer.File id="1" name="index.js" children={`console.log('Hello, world!');`} />
          <CodeViewer.File id="2" name="App.js" children={`import React from 'react';\n\nconst App = () => <div>Hello, App!</div>;\nexport default App;`} />
          <CodeViewer.Folder name="components">
            <CodeViewer.File id="3" name="Button.js" children={`export const Button = () => <button>Click me!</button>;`} />
            <CodeViewer.File id="4" name="Input.js" children={`export const Input = () => <input placeholder="Type here" />;`} />
          </CodeViewer.Folder>
          <CodeViewer.Folder name="utils">
            <CodeViewer.File id="5" name="helpers.js" children={`export const add = (a, b) => a + b;`} />
            <CodeViewer.File id="6" name="format.js" children={`export const format = (value) => value.trim();`} />
          </CodeViewer.Folder>
        </CodeViewer.Folder>
        <CodeViewer.Folder name="public">
          <CodeViewer.File id="7" name="index.html" children={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>Code Viewer</title>\n</head>\n<body>\n<div id="root"></div>\n</body>\n</html>`} />
        </CodeViewer.Folder>
      </CodeViewer.Explorer>
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
