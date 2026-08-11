import LinkBar from '@/components/common/LinkBar';
import { useState } from 'react';

const CustomSizedLinkBar = () => {
  const [activeUrl, setActiveUrl] = useState('/option1');

  return (
    <LinkBar
      variant="outline"
      size="md"
      rounded="md"
      activeUrl={activeUrl}
      onUrlChange={setActiveUrl}
      className="w-[300px]"
    >
      <LinkBar.Content className="px-2">
        <LinkBar.Link to="/option1">Option 1</LinkBar.Link>
        <LinkBar.Link to="/option2">Option 2</LinkBar.Link>
        <LinkBar.Link to="/option3">Option 3</LinkBar.Link>
      </LinkBar.Content>
    </LinkBar>
  );
};

export default CustomSizedLinkBar;
