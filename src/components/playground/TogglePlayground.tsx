import { useState } from 'react';
import { Toggle } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

const TOGGLE_VARIANTS = ['default', 'outline'] as const;

type Variant = (typeof TOGGLE_VARIANTS)[number];
type Size = (typeof SIZES_SM_LG)[number];

type ToggleSettings = {
  variant: Variant;
  size: Size;
  pressed: boolean;
  disabled: boolean;
};

const TogglePlayground = () => {
  const [settings, setSettings] = useState<ToggleSettings>({
    variant: 'default',
    size: 'md',
    pressed: false,
    disabled: false,
  });

  const generateCode = () => {
    let code = `<Toggle\n`;
    code += `  variant="${settings.variant}"\n`;
    code += `  size="${settings.size}"\n`;
    if (settings.pressed) code += `  pressed\n`;
    if (settings.disabled) code += `  disabled\n`;
    code += `>\n`;
    code += `  Toggle\n`;
    code += `</Toggle>`;
    return code;
  };

  return (
    <PlaygroundShell
      preview={
        <Toggle
          variant={settings.variant}
          size={settings.size}
          pressed={settings.pressed}
          onPressedChange={(pressed) => setSettings((prev) => ({ ...prev, pressed }))}
          disabled={settings.disabled}
        >
          Toggle
        </Toggle>
      }
      controls={
        <>
          <OptionGroup
            label="Variant"
            options={TOGGLE_VARIANTS}
            value={settings.variant}
            onChange={(variant) => setSettings((prev) => ({ ...prev, variant }))}
          />
          <OptionGroup
            label="Size"
            options={SIZES_SM_LG}
            value={settings.size}
            onChange={(size) => setSettings((prev) => ({ ...prev, size }))}
          />
          <CheckboxGrid
            options={[
              {
                label: 'Pressed',
                checked: settings.pressed,
                onChange: (pressed) => setSettings((prev) => ({ ...prev, pressed })),
              },
              {
                label: 'Disabled',
                checked: settings.disabled,
                onChange: (disabled) => setSettings((prev) => ({ ...prev, disabled })),
              },
            ]}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default TogglePlayground;
