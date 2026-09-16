import { useState } from 'react';
import { Dropdown } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid } from './PlaygroundShell';

const DropdownPlayground = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [disabled, setDisabled] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const placeholder = showPlaceholder ? 'Choose a framework' : '';

  const generateCode = () => `<Dropdown
  value={value}
  onValueChange={setValue}
  placeholder="${placeholder}"
${disabled ? '  disabled\n' : ''}>
  <Dropdown.Trigger>
    <Dropdown.Value />
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item value="react">React</Dropdown.Item>
    <Dropdown.Item value="vue">Vue</Dropdown.Item>
    <Dropdown.Item value="svelte">Svelte</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>`;

  return (
    <PlaygroundShell
      preview={
        <Dropdown
          value={value}
          onValueChange={setValue}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full max-w-xs"
        >
          <Dropdown.Trigger>
            <Dropdown.Value />
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item value="react">React</Dropdown.Item>
            <Dropdown.Item value="vue">Vue</Dropdown.Item>
            <Dropdown.Item value="svelte">Svelte</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
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
