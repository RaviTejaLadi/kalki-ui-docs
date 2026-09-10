import { useState } from 'react';
import { CloseButton } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

type Variant = 'light' | 'dark';
type Size = (typeof SIZES_SM_LG)[number];

type ButtonSettings = {
  variant: Variant;
  size: Size;
  disabled: boolean;
};

const CloseButtonPlayground = () => {
  const [settings, setSettings] = useState<ButtonSettings>({
    variant: 'light',
    size: 'md',
    disabled: false,
  });

  const variants: Variant[] = ['light', 'dark'];

  const generateCode = () => {
    let code = `<CloseButton\n`;
    code += `  variant="${settings.variant}"\n`;
    code += `  size="${settings.size}"\n`;
    if (settings.disabled) code += `  disabled\n`;
    code += `/>\n`;
    return code;
  };

  return (
    <PlaygroundShell
      preview={<CloseButton variant={settings.variant} size={settings.size} disabled={settings.disabled} />}
      controls={
        <>
          <OptionGroup
            label="Variant"
            options={variants}
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

export default CloseButtonPlayground;
