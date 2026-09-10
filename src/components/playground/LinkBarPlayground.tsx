import { useState } from 'react';
import { Home, BookOpen, Info, Settings, Users, Package } from 'lucide-react';
import { LinkBar, LinkBarContent, LinkBarControl, LinkBarLink } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, COLOR_VARIANTS, OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

const LINK_BAR_VARIANTS = [...COLOR_VARIANTS, 'default', 'outline'] as const;
const ROUNDED_OPTIONS = ['xs', 'sm', 'md', 'lg', 'none'] as const;

type Variant = (typeof LINK_BAR_VARIANTS)[number];
type Size = (typeof SIZES_SM_LG)[number];
type Rounded = (typeof ROUNDED_OPTIONS)[number];

const LINKS = [
  { to: '/home', label: 'Home', icon: <Home className="size-3.5" /> },
  { to: '/docs', label: 'Docs', icon: <BookOpen className="size-3.5" /> },
  { to: '/about', label: 'About', icon: <Info className="size-3.5" /> },
  { to: '/team', label: 'Team', icon: <Users className="size-3.5" /> },
  { to: '/packages', label: 'Packages', icon: <Package className="size-3.5" /> },
  { to: '/settings', label: 'Settings', icon: <Settings className="size-3.5" /> },
];

const LinkBarPlayground = () => {
  const [variant, setVariant] = useState<Variant>('default');
  const [size, setSize] = useState<Size>('sm');
  const [rounded, setRounded] = useState<Rounded>('none');
  const [withControls, setWithControls] = useState(true);
  const [withIcons, setWithIcons] = useState(true);
  const [activeUrl, setActiveUrl] = useState('/home');

  const generateCode = () => `<LinkBar
  variant="${variant}"
  size="${size}"
  rounded="${rounded}"
  activeUrl={activeUrl}
  onUrlChange={setActiveUrl}
>
${withControls ? '  <LinkBarControl position="left" />\n' : ''}  <LinkBarContent className="px-2">
    <LinkBarLink to="/home"${withIcons ? ' icon={<Home className="size-3.5" />}' : ''}>Home</LinkBarLink>
    <LinkBarLink to="/docs"${withIcons ? ' icon={<BookOpen className="size-3.5" />}' : ''}>Docs</LinkBarLink>
    <LinkBarLink to="/about"${withIcons ? ' icon={<Info className="size-3.5" />}' : ''}>About</LinkBarLink>
    {/* more links... */}
  </LinkBarContent>
${withControls ? '  <LinkBarControl position="right" />\n' : ''}</LinkBar>`;

  return (
    <PlaygroundShell
      preview={
        <LinkBar
          variant={variant}
          size={size}
          rounded={rounded}
          activeUrl={activeUrl}
          onUrlChange={setActiveUrl}
          className="w-full max-w-md"
        >
          {withControls && <LinkBarControl position="left" />}
          <LinkBarContent className="px-2">
            {LINKS.map((link) => (
              <LinkBarLink key={link.to} to={link.to} icon={withIcons ? link.icon : undefined}>
                {link.label}
              </LinkBarLink>
            ))}
          </LinkBarContent>
          {withControls && <LinkBarControl position="right" />}
        </LinkBar>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={LINK_BAR_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_SM_LG} value={size} onChange={setSize} />
          <OptionGroup label="Rounded" options={ROUNDED_OPTIONS} value={rounded} onChange={setRounded} />
          <CheckboxGrid
            options={[
              { label: 'Scroll controls', checked: withControls, onChange: setWithControls },
              { label: 'With icons', checked: withIcons, onChange: setWithIcons },
            ]}
          />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default LinkBarPlayground;
