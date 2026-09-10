import { useState } from 'react';
import Select from '@/components/common/Select';
import PlaygroundShell, { CheckboxGrid } from './PlaygroundShell';

const DropdownPlayground = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [disabled, setDisabled] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const placeholder = showPlaceholder ? 'Select a framework' : '';

  const generateCode = () => `<Select
  value={value}
  onValueChange={setValue}
  placeholder="${placeholder}"
${disabled ? '  disabled\n' : ''}>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="react">React</Select.Item>
    <Select.Item value="vue">Vue</Select.Item>
    <Select.Item value="svelte">Svelte</Select.Item>
  </Select.Content>
</Select>`;

  return (
    <PlaygroundShell
      preview={
        <Select
          value={value}
          onValueChange={setValue}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full max-w-xs"
        >
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="react">React</Select.Item>
            <Select.Item value="vue">Vue</Select.Item>
            <Select.Item value="svelte">Svelte</Select.Item>
          </Select.Content>
        </Select>
      }
      controls={
        <CheckboxGrid
          options={[
            { label: 'Disabled', checked: disabled, onChange: setDisabled },
            {
              label: 'Show placeholder',
              checked: showPlaceholder,
              onChange: (checked) => {
                setShowPlaceholder(checked);
                setValue(undefined);
              },
            },
          ]}
        />
      }
      code={generateCode()}
      previewClassName="min-h-40"
    />
  );
};

export default DropdownPlayground;
