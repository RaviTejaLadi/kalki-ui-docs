import LinkBar from '@/components/common/LinkBar';
import { useState } from 'react';

const BasicLinkBar = () => {
  const [activeUrl, setActiveUrl] = useState('/home');

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/home">Home</LinkBar.Link>
        <LinkBar.Link to="/about">About</LinkBar.Link>
        <LinkBar.Link to="/contact">Contact</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default BasicLinkBar;
