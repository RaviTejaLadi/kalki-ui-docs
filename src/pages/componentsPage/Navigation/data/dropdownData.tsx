import { useState } from 'react';
import { Dropdown } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Dropdown',
    desc: 'A customizable dropdown for selecting one option from a menu.',
    code: `
import React, { useState } from 'react';
import { Dropdown } from "kalki-ui";
export default function DropdownExample() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Dropdown value={value} onValueChange={setValue} placeholder="Choose a framework">
      <Dropdown.Trigger>
        <Dropdown.Value />
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="react">React</Dropdown.Item>
        <Dropdown.Item value="vue">Vue</Dropdown.Item>
        <Dropdown.Item value="svelte">Svelte</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
    `,
    snippet: (() => {
      const DropdownExample = () => {
        const [value, setValue] = useState<string | undefined>(undefined);

        return (
          <Dropdown value={value} onValueChange={setValue} placeholder="Choose a framework">
            <Dropdown.Trigger>
              <Dropdown.Value />
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item value="react">React</Dropdown.Item>
              <Dropdown.Item value="vue">Vue</Dropdown.Item>
              <Dropdown.Item value="svelte">Svelte</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        );
      };

      return <DropdownExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['value', 'string', 'undefined', 'Controlled selected value.'],
  ['defaultValue', 'string', 'undefined', 'Initial selected value for uncontrolled usage.'],
  ['onValueChange', '(value: string) => void', '—', 'Callback fired when a new option is selected.'],
  ['placeholder', 'string', '"Select an option"', 'Placeholder text shown when no item is selected.'],
  ['disabled', 'boolean', 'false', 'Disables interaction with the dropdown.'],
];
