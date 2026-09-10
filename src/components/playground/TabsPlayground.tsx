import { useState } from 'react';
import { Tab, Tabs } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

type Variant = (typeof COLOR_VARIANTS)[number];
type Size = (typeof SIZES_SM_LG)[number];

const TabsPlayground = () => {
  const [variant, setVariant] = useState<Variant>('primary');
  const [size, setSize] = useState<Size>('md');
  const [activeTab, setActiveTab] = useState('overview');

  const generateCode = () => `<Tabs
  variant="${variant}"
  size="${size}"
  active={activeTab}
  onTabChange={setActiveTab}
>
  <Tab label="Overview" value="overview">Overview content</Tab>
  <Tab label="Details" value="details">Details content</Tab>
  <Tab label="Settings" value="settings">Settings content</Tab>
</Tabs>`;

  return (
    <PlaygroundShell
      preview={
        <Tabs variant={variant} size={size} active={activeTab} onTabChange={setActiveTab} className="w-full max-w-xl">
          <Tab label="Overview" value="overview">
            <p className="text-muted-foreground">Overview content for this component.</p>
          </Tab>
          <Tab label="Details" value="details">
            <p className="text-muted-foreground">Details about the selected configuration.</p>
          </Tab>
          <Tab label="Settings" value="settings">
            <p className="text-muted-foreground">Settings content for the active tab.</p>
          </Tab>
        </Tabs>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={COLOR_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_SM_LG} value={size} onChange={setSize} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default TabsPlayground;
