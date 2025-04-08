import { useState } from 'react';
import { CheckCircle2, Settings, ArrowRight } from 'lucide-react';
import Card, { CardContent } from '../common/Card';
import Button from '../common/Button';
import { SyntaxHighlighter } from '../common/SyntaxHighLighter/SyntaxHighLighter';

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'help'
  | 'light'
  | 'dark'
  | 'outline'
  | 'ghost'
  | 'link';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

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

type SettingKey = keyof ButtonSettings;
type SettingValue = ButtonSettings[SettingKey];

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

  const variants: string[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'help',
    'light',
    'dark',
    'outline',
    'ghost',
    'link',
  ] as const;

  const sizes: string[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;

  const handleChange = (key: SettingKey, value: SettingValue): void => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

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
      code += `  <Button.Icon>\n`;
      code += `    ${
        settings.variant === 'success' ? '<CheckCircle2 className="size-4" />' : '<Settings className="size-4" />'
      }\n`;
      code += `  </Button.Icon>\n`;
    }

    if (settings.withText) {
      code += `  <Button.Text>\n`;
      code += `    ${settings.variant.charAt(0).toUpperCase() + settings.variant.slice(1)} Button\n`;
      code += `  </Button.Text>\n`;
    }

    if (settings.withIcon && !settings.isPending) {
      code += `  <Button.Icon className="ml-1">\n`;
      code += `    <ArrowRight className="size-4" />\n`;
      code += `  </Button.Icon>\n`;
    }

    code += `</Button>`;

    return code;
  };

  return (
    <div className="w-full my-3">
      <Card className="w-full mb-6">
        <CardContent className="flex flex-col gap-4">
          <div className="w-full">
            <h3 className="text-sm font-medium mb-4">Preview</h3>
            <div className="p-8 flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg">
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
                  <Button.Icon>
                    {settings.variant === 'success' ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      <Settings className="size-4" />
                    )}
                  </Button.Icon>
                )}
                {settings.withText && (
                  <Button.Text>
                    {settings.variant.charAt(0).toUpperCase() + settings.variant.slice(1)} Button
                  </Button.Text>
                )}
                {settings.withIcon && !settings.isPending && (
                  <Button.Icon className="ml-1">
                    <ArrowRight className="size-4" />
                  </Button.Icon>
                )}
              </Button>
            </div>
          </div>
          <hr className="dark:border-gray-200/10" />
          <div className="flex flex-col gap-10">
            {/* Controls */}
            <div className="flex flex-col gap-10">
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
                    checked={settings.raised}
                    onChange={(e) => handleChange('raised', e.target.checked)}
                    className="rounded"
                  />
                  <span>Raised</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.rounded}
                    onChange={(e) => handleChange('rounded', e.target.checked)}
                    className="rounded"
                  />
                  <span>Rounded</span>
                </label>
              </div>

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

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.isPending}
                    onChange={(e) => handleChange('isPending', e.target.checked)}
                    className="rounded"
                  />
                  <span>Loading</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.withIcon}
                    onChange={(e) => handleChange('withIcon', e.target.checked)}
                    className="rounded"
                  />
                  <span>With Icon</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.withText}
                    onChange={(e) => handleChange('withText', e.target.checked)}
                    className="rounded"
                  />
                  <span>With Text</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent>
          <SyntaxHighlighter code={generateCode()} language="jsx" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ButtonPlayground;
