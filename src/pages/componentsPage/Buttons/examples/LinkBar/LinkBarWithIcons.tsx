import { LinkBar, LinkBarContent, LinkBarLink } from 'kalki-ui';
import { useState } from 'react';

const LinkBarWithIcons = () => {
  const [activeUrl, setActiveUrl] = useState('/settings');

  return (
    <LinkBar size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBarContent className="px-2">
        <LinkBarLink to="/home" icon="🏠">
          Home
        </LinkBarLink>
        <LinkBarLink to="/settings" icon="⚙️" iconPosition="end">
          Settings
        </LinkBarLink>
        <LinkBarLink to="/profile" icon="👤">
          Profile
        </LinkBarLink>
      </LinkBarContent>
    </LinkBar>
  );
};

export default LinkBarWithIcons;
