import { ListGroupItem, ListGroups } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import { BellIcon, LockIcon, UserIcon } from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Usage',
    desc: 'A simple ListGroups component with theme-aware styling.',
    code: `
import { ListGroups, ListGroupItem } from "kalki-ui";

export default function BasicListGroups() {
  return (
    <ListGroups size="md" width="300px" showDividers>
      <ListGroupItem label="Profile" onClick={() => console.log("Profile clicked")} />
      <ListGroupItem label="Settings" onClick={() => console.log("Settings clicked")} />
      <ListGroupItem label="Notifications" description="Manage your alerts" />
      <ListGroupItem label="Logout" disabled />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups size="md" width="300px" showDividers>
        <ListGroupItem label="Profile" onClick={() => console.log('Profile clicked')} />
        <ListGroupItem label="Settings" onClick={() => console.log('Settings clicked')} />
        <ListGroupItem label="Notifications" description="Manage your alerts" />
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
    <ListGroups showArrows>
      <ListGroupItem icon={<UserIcon size={16} />} label="Account" />
      <ListGroupItem icon={<LockIcon size={16} />} label="Security" description="Change password" />
      <ListGroupItem icon={<BellIcon size={16} />} label="Notifications" />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups showArrows>
        <ListGroupItem icon={<UserIcon size={16} />} label="Account" />
        <ListGroupItem icon={<LockIcon size={16} />} label="Security" description="Change password" />
        <ListGroupItem icon={<BellIcon size={16} />} label="Notifications" />
      </ListGroups>
    ),
  },
  {
    title: 'List Group with Descriptions',
    desc: 'A larger list group with descriptive items.',
    code: `
import { ListGroups, ListGroupItem } from "kalki-ui";

export default function DarkListGroups() {
  return (
    <ListGroups size="lg" width="400px">
      <ListGroupItem label="Dashboard" description="View your analytics" />
      <ListGroupItem label="Projects" description="Manage your work" />
      <ListGroupItem label="Team" description="View members" />
      <ListGroupItem label="Reports" description="Generate documents" disabled />
    </ListGroups>
  );
}
`,
    snippet: (
      <ListGroups size="lg" width="400px">
        <ListGroupItem label="Dashboard" description="View your analytics" />
        <ListGroupItem label="Projects" description="Manage your work" />
        <ListGroupItem label="Team" description="View members" />
        <ListGroupItem label="Reports" description="Generate documents" disabled />
      </ListGroups>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const ListGroupsRows = [
  ['size', 'sm | md | lg | xl | xxl', 'sm', 'Size of the text and spacing'],
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
