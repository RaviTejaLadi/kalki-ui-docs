import { useState } from 'react';
import { Card, CardContent, CloseButton } from 'kalki-ui';
import { SyntaxHighlighter } from '../shared/SyntaxHighLighter/SyntaxHighLighter';
type Variant = 'light' | 'dark';

type Size = 'sm' | 'md' | 'lg';

type ButtonSettings = {
  variant: Variant;
  size: Size;
  disabled: boolean;
};

type SettingKey = keyof ButtonSettings;
type SettingValue = ButtonSettings[SettingKey];

const CloseButtonPlayground = () => {
  const [settings, setSettings] = useState<ButtonSettings>({
    variant: 'light',
    size: 'md',
    disabled: false,
  });

  const variants: string[] = ['light', 'dark'] as const;

  const sizes: Size[] = ['sm', 'md', 'lg'];

  const handleChange = (key: SettingKey, value: SettingValue): void => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    let code = `<CloseButton\n`;
    code += `  variant="${settings.variant}"\n`;
    code += `  size="${settings.size}"\n`;
    if (settings.disabled) code += `  disabled\n`;
    code += `/>\n`;
    return code;
  };

  return (
    <div className="w-full my-3">
      <Card className="w-full mb-6">
        <CardContent className="flex flex-col gap-3 !p-3">
          <div className="w-full">
            <h3 className="mb-3 text-sm font-medium">Preview</h3>
            <div className="flex items-center justify-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
              <CloseButton variant={settings.variant} size={settings.size} disabled={settings.disabled} />
            </div>
          </div>
          <hr className="dark:border-gray-200/10" />
          <div className="flex flex-col gap-4">
            {/* Controls */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Variant</label>
                <div className="flex flex-wrap gap-2">
                  {variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => handleChange('variant', variant as Variant)}
                      className={`px-3 py-1 text-xs  rounded ${
                        settings.variant === variant
                          ? 'bg-blue-100 border border-blue-500 text-blue-700'
                          : 'border text-muted-foreground dark:border-gray-200/10 hover:bg-gray-100/10'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleChange('size', size as Size)}
                      className={`px-3 py-1 text-xs rounded ${
                        settings.size === size
                          ? 'bg-blue-100 border border-blue-500 text-blue-700'
                          : 'border text-muted-foreground dark:border-gray-200/10 hover:bg-gray-100/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.disabled}
                    onChange={(e) => handleChange('disabled', e.target.checked)}
                    className="rounded"
                  />
                  <span>Disabled</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="!p-3">
          <SyntaxHighlighter code={generateCode()} language="jsx" />
        </CardContent>
      </Card>
    </div>
  );
};

export default CloseButtonPlayground;
