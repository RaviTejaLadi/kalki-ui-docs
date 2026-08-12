import { useState } from 'react';
import Select from '@/components/common/Select';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Dropdown',
    desc: 'A customizable dropdown built with the Select primitives.',
    code: `
import React, { useState } from 'react';
import { Select } from "kalki-ui";
export default function DropdownExample() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Select value={value} onValueChange={setValue} placeholder="Select a framework">
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="react">React</Select.Item>
        <Select.Item value="vue">Vue</Select.Item>
        <Select.Item value="svelte">Svelte</Select.Item>
      </Select.Content>
    </Select>
  );
}
    `,
    snippet: (() => {
      const DropdownExample = () => {
        const [value, setValue] = useState<string | undefined>(undefined);

        return (
          <Select value={value} onValueChange={setValue} placeholder="Select a framework">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="react">React</Select.Item>
              <Select.Item value="vue">Vue</Select.Item>
              <Select.Item value="svelte">Svelte</Select.Item>
            </Select.Content>
          </Select>
        );
      };

      return <DropdownExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['value', 'string', 'undefined', 'Controlled value of the dropdown.'],
  ['defaultValue', 'string', 'undefined', 'Initial value for uncontrolled usage.'],
  ['onValueChange', '(value: string) => void', '—', 'Callback fired when a new option is selected.'],
  ['placeholder', 'string', '"Select an option"', 'Placeholder text shown when no value is selected.'],
  ['disabled', 'boolean', 'false', 'Disables interaction with the dropdown.'],
];
