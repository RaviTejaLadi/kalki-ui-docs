import { LinkBar, LinkBarContent, LinkBarLink } from 'kalki-ui';
import { useState } from 'react';

const BasicLinkBar = () => {
  const [activeUrl, setActiveUrl] = useState('/home');

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBarContent className="px-2">
        <LinkBarLink to="/home">Home</LinkBarLink>
        <LinkBarLink to="/about">About</LinkBarLink>
        <LinkBarLink to="/contact">Contact</LinkBarLink>
      </LinkBarContent>
    </LinkBar>
  );
};

export default BasicLinkBar;
