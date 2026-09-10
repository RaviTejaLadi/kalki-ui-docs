import { useState } from 'react';
import { CheckCircle2, Settings, ArrowRight } from 'lucide-react';
import { Button, ButtonIcon, ButtonText } from 'kalki-ui';
import PlaygroundShell, { BUTTON_VARIANTS, CheckboxGrid, OptionGroup, SIZES_XS_3XL } from './PlaygroundShell';

type Variant = (typeof BUTTON_VARIANTS)[number];
type Size = (typeof SIZES_XS_3XL)[number];

type ButtonSettings = {
  variant: Variant;
  size: Size;
  raised: boolean;
  rounded: boolean;
  disabled: boolean;
  isPending: boolean;
  withIcon: boolean;
  withText: boolean;
};

const ButtonPlayground = () => {
  const [settings, setSettings] = useState<ButtonSettings>({
    variant: 'primary',
    size: 'md',
    raised: false,
    rounded: false,
    disabled: false,
    isPending: false,
    withIcon: false,
    withText: true,
  });

  const generateCode = () => {
    let code = `<Button\n`;
    code += `  variant="${settings.variant}"\n`;
    code += `  size="${settings.size}"\n`;
    if (settings.raised) code += `  raised\n`;
    if (settings.rounded) code += `  rounded\n`;
    if (settings.disabled) code += `  disabled\n`;
    if (settings.isPending) code += `  isPending isPendingText="Loading..."\n`;
    code += `>\n`;

    if (settings.withIcon && !settings.isPending) {
      code += `  <ButtonIcon>\n`;
      code += `    ${
        settings.variant === 'success' ? '<CheckCircle2 className="size-4" />' : '<Settings className="size-4" />'
      }\n`;
      code += `  </ButtonIcon>\n`;
    }

    if (settings.withText) {
      code += `  <ButtonText>\n`;
      code += `    ${settings.variant.charAt(0).toUpperCase() + settings.variant.slice(1)} Button\n`;
      code += `  </ButtonText>\n`;
    }

    if (settings.withIcon && !settings.isPending) {
      code += `  <ButtonIcon className="ml-1">\n`;
      code += `    <ArrowRight className="size-4" />\n`;
      code += `  </ButtonIcon>\n`;
    }

    code += `</Button>`;
    return code;
  };

  return (
    <PlaygroundShell
      preview={
        <Button
          variant={settings.variant}
          size={settings.size}
          raised={settings.raised}
          rounded={settings.rounded}
          disabled={settings.disabled}
          isPending={settings.isPending}
          isPendingText="Loading..."
        >
          {settings.withIcon && !settings.isPending && (
            <ButtonIcon>
              {settings.variant === 'success' ? <CheckCircle2 className="size-4" /> : <Settings className="size-4" />}
            </ButtonIcon>
          )}
          {settings.withText && (
            <ButtonText>{settings.variant.charAt(0).toUpperCase() + settings.variant.slice(1)} Button</ButtonText>
          )}
          {settings.withIcon && !settings.isPending && (
            <ButtonIcon className="ml-1">
              <ArrowRight className="size-4" />
            </ButtonIcon>
          )}
        </Button>
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
                label: 'Disabled',
                checked: settings.disabled,
                onChange: (disabled) => setSettings((prev) => ({ ...prev, disabled })),
              },
              {
                label: 'Loading',
                checked: settings.isPending,
                onChange: (isPending) => setSettings((prev) => ({ ...prev, isPending })),
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

export default ButtonPlayground;
