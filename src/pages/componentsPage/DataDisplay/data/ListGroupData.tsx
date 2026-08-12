import { ListGroups, ListGroupItem } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import { BellIcon, LockIcon, UserIcon } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple ListGroups component with default styling.',
    code: `
import { ListGroups, ListGroupItem } from "kalki-ui";

export default function BasicListGroups() {
  return (
    <ListGroups variant="primary" size="md" width="300px" showDividers>
      <ListGroupItem label="Profile" onClick={() => console.log("Profile clicked")} />
      <ListGroupItem label="Settings" onClick={() => console.log("Settings clicked")} />
      <ListGroupItem
        label="Notifications"
        description="Manage your alerts"
        onClick={() => console.log("Notifications clicked")}
      />
      <ListGroupItem label="Logout" disabled />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups variant="primary" size="md" width="300px" showDividers>
        <ListGroupItem label="Profile" onClick={() => console.log('Profile clicked')} />
        <ListGroupItem label="Settings" onClick={() => console.log('Settings clicked')} />
        <ListGroupItem
          label="Notifications"
          description="Manage your alerts"
          onClick={() => console.log('Notifications clicked')}
        />
        <ListGroupItem label="Logout" disabled />
      </ListGroups>
    ),
  },
  {
    title: 'With Icons and Arrows',
    desc: 'List group items with leading icons and trailing arrows.',
    code: `
import { ListGroups, ListGroupItem } from "kalki-ui";
import { BellIcon, LockIcon, UserIcon } from "lucide-react";

export default function ListGroupsWithIcons() {
  return (
    <ListGroups variant="secondary" showArrows>
      <ListGroupItem
        icon={<UserIcon size={16} />}
        label="Account"
        onClick={() => console.log("Account clicked")}
      />
      <ListGroupItem
        icon={<LockIcon size={16} />}
        label="Security"
        description="Change password"
        onClick={() => console.log("Security clicked")}
      />
      <ListGroupItem
        icon={<BellIcon size={16} />}
        label="Notifications"
        onClick={() => console.log("Notifications clicked")}
      />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups variant="secondary" showArrows>
        <ListGroupItem icon={<UserIcon size={16} />} label="Account" onClick={() => console.log('Account clicked')} />
        <ListGroupItem
          icon={<LockIcon size={16} />}
          label="Security"
          description="Change password"
          onClick={() => console.log('Security clicked')}
        />
        <ListGroupItem
          icon={<BellIcon size={16} />}
          label="Notifications"
          onClick={() => console.log('Notifications clicked')}
        />
      </ListGroups>
    ),
  },
  {
    title: 'Dark Theme with Descriptions',
    desc: 'A dark-themed list group with item descriptions.',
    code: `
import { ListGroups, ListGroupItem } from "kalki-ui";

export default function DarkListGroups() {
  return (
    <ListGroups variant="dark" size="lg" width="400px">
      <ListGroupItem
        label="Dashboard"
        description="View your analytics"
        onClick={() => console.log("Dashboard clicked")}
      />
      <ListGroupItem
        label="Projects"
        description="Manage your works"
        onClick={() => console.log("Projects clicked")}
      />
      <ListGroupItem label="Team" description="View members" onClick={() => console.log("Team clicked")} />
      <ListGroupItem label="Reports" description="Generate documents" disabled />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups variant="dark" size="lg" width="400px">
        <ListGroupItem
          label="Dashboard"
          description="View your analytics"
          onClick={() => console.log('Dashboard clicked')}
        />
        <ListGroupItem
          label="Projects"
          description="Manage your works"
          onClick={() => console.log('Projects clicked')}
        />
        <ListGroupItem label="Team" description="View members" onClick={() => console.log('Team clicked')} />
        <ListGroupItem label="Reports" description="Generate documents" disabled />
      </ListGroups>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const ListGroupsRows = [
  ['variant', 'VariantType', 'primary', 'Color variant of the list group'],
  ['size', 'sm | md | lg | xl | xxl', 'sm', 'Size of the text and padding'],
  ['width', 'string', 'auto', 'Custom width of the list group'],
  ['className', 'string', '', 'Additional CSS classes'],
  ['style', 'React.CSSProperties', '{}', 'Inline styles'],
  ['showDividers', 'boolean', 'true', 'Whether to show dividers between items'],
  ['showArrows', 'boolean', 'false', 'Whether to show arrow icons on items'],
  ['children', 'React.ReactNode', 'null', 'ListGroupItem components'],
];

export const ListGroupsItemRows = [
  ['label', 'string', 'required', 'Main text of the item'],
  ['description', 'string', '', 'Secondary text below the label'],
  ['icon', 'React.ReactNode', '', 'Icon to display before the label'],
  ['disabled', 'boolean', 'false', 'Whether the item is disabled'],
  ['onClick', 'function', '', 'Click handler for the item'],
  ['className', 'string', '', 'Additional CSS classes'],
];
