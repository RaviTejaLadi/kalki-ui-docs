import { LinkBar, LinkBarContent, LinkBarLink } from 'kalki-ui';
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
      <LinkBarContent className="px-2">
        <LinkBarLink to="/option1">Option 1</LinkBarLink>
        <LinkBarLink to="/option2">Option 2</LinkBarLink>
        <LinkBarLink to="/option3">Option 3</LinkBarLink>
      </LinkBarContent>
    </LinkBar>
  );
};

export default CustomSizedLinkBar;
