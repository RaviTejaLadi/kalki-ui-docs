import LinkBar from '@/components/common/LinkBar';
import { useState } from 'react';

const LinkBarWithCustomControlButtons = () => {
  const [activeUrl, setActiveUrl] = useState('/product-a');

  return (
    <LinkBar
      variant="default"
      size="sm"
      rounded="none"
      activeUrl={activeUrl}
      onUrlChange={setActiveUrl}
      className="w-[20rem]"
    >
      <LinkBar.Control position="left" size="md" variant="primary" />
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/product-a">Product A</LinkBar.Link>
        <LinkBar.Link to="/product-b">Product B</LinkBar.Link>
        <LinkBar.Link to="/product-c">Product C</LinkBar.Link>
        <LinkBar.Link to="/product-d">Product D</LinkBar.Link>
        <LinkBar.Link to="/product-e">Product E</LinkBar.Link>
      </LinkBar.Content>
      <LinkBar.Control position="right" size="md" variant="primary" />
    </LinkBar>
  );
};

export default LinkBarWithCustomControlButtons;
