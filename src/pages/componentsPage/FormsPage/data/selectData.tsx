import React, { useState } from 'react';
import Form, { FormGroup, Select } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Select',
    desc: 'A native select input for choosing a single option.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, Select } from "kalki-ui";

type Country = "us" | "ca" | "uk" | "au";

export const SelectExample = () => {
  const [country, setCountry] = useState<Country | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value as Country | "");
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Country" labelFor="country">
        <Select id="country" name="country" value={country} onChange={handleChange}>
          <Select.Option value="">Select your country</Select.Option>
          <Select.Option value="us">United States</Select.Option>
          <Select.Option value="ca">Canada</Select.Option>
          <Select.Option value="uk">United Kingdom</Select.Option>
          <Select.Option value="au">Australia</Select.Option>
        </Select>
      </FormGroup>
    </Form>
  );
};
    `,
    snippet: (() => {
      type Country = 'us' | 'ca' | 'uk' | 'au';

      const SelectExample = () => {
        const [country, setCountry] = useState<Country | ''>('');

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setCountry(e.target.value as Country | '');
        };

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Country" labelFor="country">
              <Select id="country" name="country" value={country} onChange={handleChange}>
                <Select.Option value="">Select your country</Select.Option>
                <Select.Option value="us">United States</Select.Option>
                <Select.Option value="ca">Canada</Select.Option>
                <Select.Option value="uk">United Kingdom</Select.Option>
                <Select.Option value="au">Australia</Select.Option>
              </Select>
            </FormGroup>
          </Form>
        );
      };

      return <SelectExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['name', 'string', '', 'Select name and id.'],
  ['value', 'string', '', 'Currently selected option value.'],
  ['onChange', '(event) => void', '—', 'Callback fired when the selected option changes.'],
  ['error', 'string', '', 'Error message displayed below the select input.'],
  ['children', 'ReactNode', '—', 'Select.Option elements rendered as choices.'],
];
