import { useState } from 'react';
import { InputField } from '@/components/common/Form/InputField';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Labeled Input Field',
    desc: 'An input field with a label, optional info tooltip, and error message handling.',
    code: `
import React, { useState } from 'react';
import { InputField } from "kalki-ui";

export const InputFieldExample = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>();

  const handleBlur = () => {
    setError(value ? undefined : "This field is required");
  };

  return (
    <InputField
      name="username"
      label="Username"
      info="This will be visible to other users."
      placeholder="Enter your username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      error={error}
    />
  );
};
    `,
    snippet: (() => {
      const InputFieldExample = () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | undefined>();

        const handleBlur = () => {
          setError(value ? undefined : 'This field is required');
        };

        return (
          <InputField
            name="username"
            label="Username"
            info="This will be visible to other users."
            placeholder="Enter your username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            error={error}
          />
        );
      };

      return <InputFieldExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['label', 'string', '', 'Label text displayed above the input.'],
  ['info', 'string', '', 'Optional tooltip content rendered next to the label.'],
  ['error', 'string', '', 'Error message shown below the input.'],
  ['labelProps', 'LabelProps', '{}', 'Additional props forwarded to the underlying label.'],
  ['size', '"xs" | "sm" | "md" | "lg"', '"sm"', 'Size applied to both label and input.'],
];
