import { LinkBar, LinkBarLink } from 'kalki-ui';
export const LinkBarPreviews = {
  basic: (
    <LinkBar variant="default" size="md" rounded="md" activeUrl="/">
      <LinkBarLink to="/">Home</LinkBarLink>
      <LinkBarLink to="/docs">Docs</LinkBarLink>
      <LinkBarLink to="/components">Components</LinkBarLink>
    </LinkBar>
  ),
};
