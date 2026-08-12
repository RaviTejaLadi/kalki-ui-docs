import { LinkBar, LinkBarContent, LinkBarControl, LinkBarLink } from 'kalki-ui';
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
      className="w-full max-w-[20rem]"
    >
      <LinkBarControl position="left" size="md" variant="primary" />
      <LinkBarContent className="px-2">
        <LinkBarLink to="/product-a">Product A</LinkBarLink>
        <LinkBarLink to="/product-b">Product B</LinkBarLink>
        <LinkBarLink to="/product-c">Product C</LinkBarLink>
        <LinkBarLink to="/product-d">Product D</LinkBarLink>
        <LinkBarLink to="/product-e">Product E</LinkBarLink>
      </LinkBarContent>
      <LinkBarControl position="right" size="md" variant="primary" />
    </LinkBar>
  );
};

export default LinkBarWithCustomControlButtons;
