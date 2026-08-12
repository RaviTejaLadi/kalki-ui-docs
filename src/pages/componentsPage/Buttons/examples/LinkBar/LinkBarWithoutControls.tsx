import { LinkBar, LinkBarContent, LinkBarLink } from 'kalki-ui';
import { useState } from 'react';

const LinkBarWithoutControls = () => {
  const [activeUrl, setActiveUrl] = useState('/tab1');

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBarContent className="px-2">
        <LinkBarLink to="/tab1">Tab 1</LinkBarLink>
        <LinkBarLink to="/tab2">Tab 2</LinkBarLink>
        <LinkBarLink to="/tab3">Tab 3</LinkBarLink>
      </LinkBarContent>
    </LinkBar>
  );
};

export default LinkBarWithoutControls;
