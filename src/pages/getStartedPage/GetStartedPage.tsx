import { SectionHeader, Tab, Tabs, Button, Box, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { Stepper } from '@/components/common/Stepper';
import { usage } from './tabsData';
import { compExampleCode, componentCode, setupSnippet } from './Snippet';
import { BoxIcon, Code, Terminal } from 'lucide-react';
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
        <SectionHeaderTitle className="dark:text-foreground tracking-wide">Quick Start</SectionHeaderTitle>
        <SectionHeaderSubTitle className="dark:text-muted-foreground tracking-wide">
          Install kalki-ui and start using components in your React app.
        </SectionHeaderSubTitle>
      </SectionHeader>

      <Stepper>
        <Stepper.Step step="1" title="Install the package">
          <Stepper.Description>
            Peer dependencies: React / React DOM (^16.8–^19) and Tailwind CSS (^3.4 or ^4).
          </Stepper.Description>
          <Tabs variant="secondary" size="sm">
            {usage.map((item) => (
              <Tab label={item.label} key={item.label} value={item.label} leftIcon={item.icon}>
                <Stepper.CodeBlock code={item.content} language="jsx" />
              </Tab>
            ))}
          </Tabs>
        </Stepper.Step>

        <Stepper.Step step="2" title="Import styles">
          <Stepper.Description>Import the stylesheet once in your app entry file:</Stepper.Description>
          <div className="h-auto overflow-auto mb-5 p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={setupSnippet} />
          </div>
        </Stepper.Step>

        <Stepper.Step step="3" title="Import components">
          <Stepper.Description>
            Use named exports only. Prefer deep imports like <code>kalki-ui/button</code> for smaller bundles, or import
            from the root package.
          </Stepper.Description>
          <div className="h-auto overflow-auto mb-5 p-1 border rounded-lg dark:border-gray-200/10">
            <Stepper.CodeBlock code={componentCode} />
          </div>
        </Stepper.Step>

        <Stepper.Step step="4" title="Use a component">
          <Tabs variant="secondary">
            <Tab label="Preview" value="preview" leftIcon={<Terminal className="size-4" />}>
              <Box
                padding="10px"
                style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '10px' }}
              >
                {(['primary', 'secondary', 'warning', 'danger', 'help', 'success', 'light', 'dark'] as const).map(
                  (item) => (
                    <Button size="xs" key={item} variant={item} onClick={() => showToast(item)}>
                      Click Me
                    </Button>
                  )
                )}
              </Box>
            </Tab>
            <Tab label="Code" value="code" leftIcon={<Code className="size-4" />}>
              <Stepper.CodeBlock code={compExampleCode} />
            </Tab>
          </Tabs>
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default GetStarted;
