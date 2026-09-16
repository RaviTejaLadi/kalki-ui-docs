import { docsData } from '@/types/docsData';
import { BasicTabsExample } from '../examples/BasicTabsExample';
import { DynamicTabsExample } from '../examples/DynamicTabsExample';

export const docs: docsData[] = [
  {
    title: 'Interactive Tabs',
    desc: 'Control the active tab and size while keeping consistent light/dark adaptive styling.',
    code: `
import { useState } from "react";
import { Tabs, Tab } from "kalki-ui";

const SIZES = ["sm", "md", "lg"] as const;

type TabsSize = (typeof SIZES)[number];

export default function DynamicTabsExample() {
  const [size, setSize] = useState<TabsSize>("md");

  return (
    <div className="space-y-4">
      <Tabs size={size}>
        <Tab label="Overview" value="overview">Overview content</Tab>
        <Tab label="Details" value="details">Details content</Tab>
        <Tab label="Settings" value="settings">Settings content</Tab>
      </Tabs>
    </div>
  );
}
`,
    snippet: <DynamicTabsExample />,
  },
  {
    title: 'Basic Tabs',
    desc: 'A simple tabs component with three panels.',
    code: `
import { Tabs, Tab } from "kalki-ui";

export default function BasicTabsExample() {
  return (
    <Tabs size="md">
      <Tab label="Overview" value="overview">
        <p className="text-muted-foreground">Content for the overview tab.</p>
      </Tab>
      <Tab label="Details" value="details">
        <p className="text-muted-foreground">Content for the details tab.</p>
      </Tab>
      <Tab label="Settings" value="settings">
        <p className="text-muted-foreground">Content for the settings tab.</p>
      </Tab>
    </Tabs>
  );
}
`,
    snippet: <BasicTabsExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const tabsRows = [
  ['children', 'React.ReactNode', '-', 'Tab components to render.'],
  ['active', 'string', 'first tab value', 'Controlled active tab value.'],
  ['onTabChange', '(value: string) => void', '-', 'Callback when the active tab changes.'],
  ['size', "'sm' | 'md' | 'lg'", 'sm', 'Size of the tab buttons.'],
  ['headerStyles', 'CSSProperties', '-', 'Inline styles for the tab list header.'],
  ['bodyStyles', 'CSSProperties', '-', 'Inline styles for the tab panel container.'],
  ['className', 'string', '-', 'Additional CSS class for the root container.'],
  ['style', 'CSSProperties', '-', 'Inline styles for the root container.'],
  ['title', 'string', '-', 'Optional title (extends BoxProps).'],
];

export const tabRows = [
  ['label', 'string', '-', 'Text shown on the tab button.'],
  ['value', 'string', '-', 'Unique value used for active state and onTabChange.'],
  ['children', 'ReactNode', '-', 'Content rendered in the tab panel when active.'],
  ['leftIcon', 'ReactNode', '-', 'Optional icon rendered to the left of the label.'],
  ['rightIcon', 'ReactNode', '-', 'Optional icon rendered to the right of the label.'],
  ['disabled', 'boolean', 'false', 'When true, the tab is not selectable.'],
  ['className', 'string', '-', 'Additional CSS class for the tab panel content.'],
];
