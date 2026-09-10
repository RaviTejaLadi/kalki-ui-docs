import { useState } from 'react';
import { Link } from 'lucide-react';
import { LinkButton, LinkIcon, LinkText } from 'kalki-ui';
import PlaygroundShell, { BUTTON_VARIANTS, CheckboxGrid, OptionGroup, SIZES_XS_3XL } from './PlaygroundShell';

type Variant = (typeof BUTTON_VARIANTS)[number];
type Size = (typeof SIZES_XS_3XL)[number];

type LinkButtonSettings = {
  variant: Variant;
  size: Size;
  raised: boolean;
  rounded: boolean;
  withIcon: boolean;
  withText: boolean;
};

const LinkButtonPlayground = () => {
  const [settings, setSettings] = useState<LinkButtonSettings>({
    variant: 'primary',
    size: 'md',
    raised: false,
    rounded: false,
    withIcon: true,
    withText: true,
  });

  const generateCode = () => {
    let code = `<LinkButton\n`;
    code += `  to="#"\n`;
    code += `  variant="${settings.variant}"\n`;
    code += `  size="${settings.size}"\n`;
    if (settings.raised) code += `  raised\n`;
    if (settings.rounded) code += `  rounded\n`;
    code += `>\n`;

    if (settings.withIcon) {
      code += `  <LinkIcon>\n`;
      code += `    <Link className="size-4" />\n`;
      code += `  </LinkIcon>\n`;
    }

    if (settings.withText) {
      code += `  <LinkText>Link Button</LinkText>\n`;
    }

    code += `</LinkButton>`;
    return code;
  };

  return (
    <PlaygroundShell
      preview={
        <LinkButton
          to="#"
          variant={settings.variant}
          size={settings.size}
          raised={settings.raised}
          rounded={settings.rounded}
        >
          {settings.withIcon && (
            <LinkIcon>
              <Link className="size-4" />
            </LinkIcon>
          )}
          {settings.withText && <LinkText>Link Button</LinkText>}
        </LinkButton>
      }
      controls={
        <>
          <OptionGroup
            label="Variant"
            options={BUTTON_VARIANTS}
            value={settings.variant}
            onChange={(variant) => setSettings((prev) => ({ ...prev, variant }))}
          />
          <OptionGroup
            label="Size"
            options={SIZES_XS_3XL}
            value={settings.size}
            onChange={(size) => setSettings((prev) => ({ ...prev, size }))}
          />
          <CheckboxGrid
            options={[
              {
                label: 'Raised',
                checked: settings.raised,
                onChange: (raised) => setSettings((prev) => ({ ...prev, raised })),
              },
              {
                label: 'Rounded',
                checked: settings.rounded,
                onChange: (rounded) => setSettings((prev) => ({ ...prev, rounded })),
              },
              {
                label: 'With Icon',
                checked: settings.withIcon,
                onChange: (withIcon) => setSettings((prev) => ({ ...prev, withIcon })),
              },
              {
                label: 'With Text',
                checked: settings.withText,
                onChange: (withText) => setSettings((prev) => ({ ...prev, withText })),
              },
            ]}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default LinkButtonPlayground;
