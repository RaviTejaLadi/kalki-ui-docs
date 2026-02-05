import LinkBar from '@/components/common/LinkBar';

export const LinkBarPreviews = {
  basic: (
    <LinkBar variant="default" size="md" rounded="md" activeUrl="/">
      <LinkBar.Link to="/">Home</LinkBar.Link>
      <LinkBar.Link to="/docs">Docs</LinkBar.Link>
      <LinkBar.Link to="/components">Components</LinkBar.Link>
    </LinkBar>
  ),
};
