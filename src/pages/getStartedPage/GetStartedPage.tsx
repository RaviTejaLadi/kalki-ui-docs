import { SectionHeader } from '@/components/common/SectionHeader';
import { Stepper } from '@/components/common/Stepper/Stepper';
import { Tab, Tabs } from '@/components/common/Tabs';
import {
  tsconfigAppJson,
  tsconfigJson,
  usage,
  viteConfigTs,
  viteTailwindUsage,
  viteTypesUsage,
  viteUsage,
} from './tabsData';
import { compExampleCode, componentCode, setupSnippet } from './Snippet';
import { BoxIcon, Code, Terminal } from 'lucide-react';
import Button from '@/components/common/Button';
import Box from '@/components/common/Box';
import React from 'react';
import { useToast, ToastVariant } from 'kalki-ui-toast';

const GetStarted: React.FC = () => {
  const { addToast } = useToast();

  const showToast = (variant: ToastVariant) => {
    addToast({
      message: variant,
      variant: variant,
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    });
  };

  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="dark:text-foreground tracking-wide">Quick Start</SectionHeader.Title>
        <SectionHeader.SubTitle className="dark:text-muted-foreground tracking-wide">
          Getting Started with Kalki UI React
        </SectionHeader.SubTitle>
      </SectionHeader>
      <SectionHeader size="sm" variant="transparent">
        <SectionHeader.Title className="dark:text-foreground tracking-wide">Introduction</SectionHeader.Title>
        <SectionHeader.SubTitle className="dark:text-muted-foreground tracking-wide">
          To import a component from this package. you first need to ensure that the package is installed in your
          project. You can install it using npm or yarn or pnpm. Here’s how you can do it:
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Stepper>
        <Stepper.Step step="1" title="Create project">
          <Stepper.Description>
            Start by creating a new React project using vite. Select the React + TypeScript template:
          </Stepper.Description>
          <Tabs variant="secondary" size="sm">
            {viteUsage.map((item) => (
              <Tab label={item.label} key={item.label} value={item.label} leftIcon={item.icon}>
                <Stepper.CodeBlock code={item.content} language="jsx" />
              </Tab>
            ))}
          </Tabs>
        </Stepper.Step>
        <Stepper.Step step="2" title="Add Tailwind CSS">
          <Tabs variant="secondary" size="sm">
            {viteTailwindUsage.map((item) => (
              <Tab label={item.label} key={item.label} value={item.label} leftIcon={item.icon}>
                <Stepper.CodeBlock code={item.content} language="jsx" />
              </Tab>
            ))}
          </Tabs>
          <Stepper.Description className="my-2">
            Replace everything in src/index.css with the following:
          </Stepper.Description>
          <Stepper.Description className="my-2">src/index.css</Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={`@import "tailwindcss";`} language="jsx" />
          </div>
        </Stepper.Step>
        <Stepper.Step step="3" title="Edit tsconfig.json file">
          <Stepper.Description>
            The current version of Vite splits TypeScript configuration into three files, two of which need to be
            edited. Add the baseUrl and paths properties to the compilerOptions section of the tsconfig.json and
            tsconfig.app.json files:
          </Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={tsconfigJson} language="jsx" />
          </div>
        </Stepper.Step>{' '}
        <Stepper.Step step="4" title="Edit tsconfig.app.json file">
          <Stepper.Description>
            Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:
          </Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={tsconfigAppJson} language="jsx" />
          </div>
        </Stepper.Step>
        <Stepper.Step step="5" title="Update vite.config.ts">
          <Stepper.Description>
            Add the following code to the vite.config.ts so your app can resolve paths without error:
          </Stepper.Description>
          <Tabs variant="secondary" size="sm">
            {viteTypesUsage.map((item) => (
              <Tab label={item.label} key={item.label} value={item.label} leftIcon={item.icon}>
                <Stepper.CodeBlock code={item.content} language="jsx" />
              </Tab>
            ))}
          </Tabs>
          <Stepper.Description className="my-2">vite.config.ts</Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={viteConfigTs} language="jsx" />
          </div>
        </Stepper.Step>
        <Stepper.Step step="6" title="Install the Package">
          <Stepper.Description>Install the package in your project directory with:</Stepper.Description>
          <Tabs variant="secondary" size="sm">
            {usage.map((item) => (
              <Tab label={item.label} key={item.label} value={item.label} leftIcon={item.icon}>
                <Stepper.CodeBlock code={item.content} language="jsx" />
              </Tab>
            ))}
          </Tabs>
        </Stepper.Step>
        <Stepper.Step step="7" title="Getting setup">
          <Stepper.Description>To start using the components, please follow these steps:</Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={setupSnippet} />
          </div>
        </Stepper.Step>
        <Stepper.Step step="8" title="Import the Component">
          <Stepper.Description>
            Once the package is installed, you can import the components you need from kalki-ui. Suppose you want to
            import a component called Button. Here’s how you can do it:
          </Stepper.Description>
          <div className="h-auto overflow-auto mb-5  p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={componentCode} />
          </div>
        </Stepper.Step>
        <Stepper.Step step="9" title="Use the Component">
          <Stepper.Description>
            After importing the Button component, you can use it in your React component:
          </Stepper.Description>

          <Tabs variant="secondary">
            <Tab label="Preview" value="preview" leftIcon={<Terminal className="size-4" />}>
              <Box
                padding="10px"
                style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '10px' }}
              >
                {[
                  'primary' as const,
                  'secondary' as const,
                  'warning' as const,
                  'danger' as const,
                  'help' as const,
                  'success' as const,
                  'light' as const,
                  'dark' as const,
                ].map((item) => (
                  <Button size="xs" key={item} variant={item} onClick={() => showToast(item)}>
                    Click Me
                  </Button>
                ))}
              </Box>
            </Tab>
            <Tab label="Code" value="code" leftIcon={<Code className="size-4" />}>
              <Stepper.CodeBlock code={compExampleCode} />
            </Tab>
          </Tabs>
        </Stepper.Step>
        <Stepper.Step title="For more check Documentation :">
          <Stepper.Description>
            Make sure to check the documentation of kalki-ui for specific details on how to import and use the
            components. The documentation will provide detailed information about available components, their props, and
            examples. By following these steps, you can successfully import and use components from the kalki-ui package
            in your React application.
          </Stepper.Description>
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default GetStarted;
