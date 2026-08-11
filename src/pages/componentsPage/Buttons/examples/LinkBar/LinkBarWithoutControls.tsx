import LinkBar from '@/components/common/LinkBar';
import { useState } from 'react';

const LinkBarWithoutControls = () => {
  const [activeUrl, setActiveUrl] = useState('/tab1');

  return (
    <LinkBar variant="default" size="sm" rounded="none" activeUrl={activeUrl} onUrlChange={setActiveUrl}>
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/tab1">Tab 1</LinkBar.Link>
        <LinkBar.Link to="/tab2">Tab 2</LinkBar.Link>
        <LinkBar.Link to="/tab3">Tab 3</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default LinkBarWithoutControls;
