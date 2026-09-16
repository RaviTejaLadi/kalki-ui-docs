import { useState } from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { ListGroupItem, ListGroups } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const LIST_GROUP_SIZES = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;

type ListGroupSize = (typeof LIST_GROUP_SIZES)[number];

const ListGroupPlayground = () => {
  const [size, setSize] = useState<ListGroupSize>('md');
  const [showDividers, setShowDividers] = useState(true);
  const [showArrows, setShowArrows] = useState(true);
  const [withIcons, setWithIcons] = useState(true);
  const [selected, setSelected] = useState('Profile');

  const generateCode = () => {
    const props = [
      `size="${size}"`,
      showDividers && 'showDividers',
      showArrows && 'showArrows',
    ].filter(Boolean);

    return `<ListGroups ${props.join(' ')}>
  <ListGroupItem${
    withIcons ? ' icon={<User className="size-4" />}' : ''
  } label="Profile" description="View your account" onClick={() => {}} />
  <ListGroupItem${
    withIcons ? ' icon={<Settings className="size-4" />}' : ''
  } label="Settings" description="Manage preferences" onClick={() => {}} />
  <ListGroupItem${withIcons ? ' icon={<Bell className="size-4" />}' : ''} label="Notifications" disabled />
</ListGroups>`;
  };

  return (
    <PlaygroundShell
      preview={
        <div className="w-full max-w-sm space-y-2">
          <ListGroups size={size} width="100%" showDividers={showDividers} showArrows={showArrows}>
            <ListGroupItem
              icon={withIcons ? <User className="size-4" /> : undefined}
              label="Profile"
              description="View your account"
              onClick={() => setSelected('Profile')}
            />
            <ListGroupItem
              icon={withIcons ? <Settings className="size-4" /> : undefined}
              label="Settings"
              description="Manage preferences"
              onClick={() => setSelected('Settings')}
            />
            <ListGroupItem
              icon={withIcons ? <Bell className="size-4" /> : undefined}
              label="Notifications"
              description="Temporarily unavailable"
              disabled
            />
          </ListGroups>
          <p className="text-xs text-muted-foreground">Selected: {selected}</p>
        </div>
      }
      controls={
        <>
          <OptionGroup label="Size" options={LIST_GROUP_SIZES} value={size} onChange={setSize} />
          <CheckboxGrid
            options={[
              { label: 'Show dividers', checked: showDividers, onChange: setShowDividers },
              { label: 'Show arrows', checked: showArrows, onChange: setShowArrows },
              { label: 'With icons', checked: withIcons, onChange: setWithIcons },
            ]}
          />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default ListGroupPlayground;
