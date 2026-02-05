import { docsData } from '@/types/docsData';
import { BasicTabsExample } from '../examples/BasicTabsExample';
import { DynamicTabsExample } from '../examples/DynamicTabsExample';

export const docs: docsData[] = [
  {
    title: 'Variants & Sizes',
    desc: 'Switch between all 9 variants (primary, secondary, success, danger, warning, help, info, dark, light) and 3 sizes (sm, md, lg) to see the Tabs update live.',
    code: `
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');

  return (
    <div className="space-y-4">
      {/* Variant and size controls */}
      <Tabs variant={variant} size={size}>
        <Tab label="Overview" value="overview">...</Tab>
        <Tab label="Details" value="details">...</Tab>
        <Tab label="Settings" value="settings">...</Tab>
        </Tabs>
        </div>
        );
        `,
    snippet: <DynamicTabsExample />,
  },
  {
    title: 'Basic Tabs',
    desc: 'A simple tabs component with customizable variants and sizes. Use Tab as children with label and value.',
    code: `
      const BasicTabsExample = () => {
        return (
          <Tabs variant="primary" size="md">
            <Tab label="Overview" value="overview">
              <p>Content for the overview tab.</p>
            </Tab>
            <Tab label="Details" value="details">
              <p>Content for the details tab.</p>
            </Tab>
            <Tab label="Settings" value="settings">
              <p>Content for the settings tab.</p>
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
