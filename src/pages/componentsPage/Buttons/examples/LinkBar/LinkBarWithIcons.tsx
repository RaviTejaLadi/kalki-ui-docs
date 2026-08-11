import LinkBar from '@/components/common/LinkBar';
import { useState } from 'react';

const LinkBarWithIcons = () => {
  const [activeUrl, setActiveUrl] = useState('/settings');

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/home" icon="🏠">
          Home
        </LinkBar.Link>
        <LinkBar.Link to="/settings" icon="⚙️" iconPosition="end">
          Settings
        </LinkBar.Link>
        <LinkBar.Link to="/profile" icon="👤">
          Profile
        </LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default LinkBarWithIcons;
