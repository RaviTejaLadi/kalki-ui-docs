import { docsData } from '@/types/docsData';
import { BasicTabsExample } from '../examples/BasicTabsExample';
import { DynamicTabsExample } from '../examples/DynamicTabsExample';

export const docs: docsData[] = [
  {
    title: 'Variants & Sizes',
    desc: 'Switch between all 9 variants (primary, secondary, success, danger, warning, help, info, dark, light) and 3 sizes (sm, md, lg) to see the Tabs update live.',
    code: `
import { useState } from "react";
import { Tabs, Tab } from "kalki-ui";

const VARIANTS = ["primary", "secondary", "success", "danger", "warning", "help", "info", "dark", "light"] as const;
const SIZES = ["sm", "md", "lg"] as const;

type TabsVariant = (typeof VARIANTS)[number];
type TabsSize = (typeof SIZES)[number];

export default function DynamicTabsExample() {
  const [variant, setVariant] = useState<TabsVariant>("primary");
  const [size, setSize] = useState<TabsSize>("md");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {VARIANTS.map((v) => (
          <button key={v} type="button" onClick={() => setVariant(v)}>
            {v}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {SIZES.map((s) => (
          <button key={s} type="button" onClick={() => setSize(s)}>
            {s}
          </button>
        ))}
      </div>
      <Tabs variant={variant} size={size}>
        <Tab label="Overview" value="overview">
          <p className="text-muted-foreground">
            Active variant: <span className="font-medium text-foreground">{variant}</span>, size:{" "}
            <span className="font-medium text-foreground">{size}</span>.
          </p>
        </Tab>
        <Tab label="Details" value="details">
          <p className="text-muted-foreground">Switch variant and size above to see the tabs update.</p>
        </Tab>
        <Tab label="Settings" value="settings">
          <p className="text-muted-foreground">All 9 variants and 3 sizes are available to try.</p>
        </Tab>
      </Tabs>
    </div>
  );
}
`,
    snippet: <DynamicTabsExample />,
  },
  {
    title: 'Basic Tabs',
    desc: 'A simple tabs component with customizable variants and sizes. Use Tab as children with label and value.',
    code: `
import { Tabs, Tab } from "kalki-ui";

export default function BasicTabsExample() {
  return (
    <Tabs variant="primary" size="md">
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
  [
    'variant',
    "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light'",
    'primary',
    'Visual variant of the tab buttons.',
  ],
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
