import React, { useState } from 'react';
import Form, { FormGroup, Radio } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Radio Group',
    desc: 'A group of radio buttons for selecting a single option.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, Radio } from "kalki-ui";

type Subscription = "free" | "pro" | "enterprise";

export default function RadioGroupExample() {
  const [subscription, setSubscription] = useState<Subscription>("free");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscription(e.target.value as Subscription);
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Subscription Type">
        {(["free", "pro", "enterprise"] as const).map((type) => (
          <Radio
            key={type}
            id={type}
            name="subscription"
            value={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
            checked={subscription === type}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
    </Form>
  );
}
    `,
    snippet: (() => {
      type Subscription = 'free' | 'pro' | 'enterprise';

      const RadioGroupExample = () => {
        const [subscription, setSubscription] = useState<Subscription>('free');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSubscription(e.target.value as Subscription);
        };

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Subscription Type">
              {(['free', 'pro', 'enterprise'] as const).map((type) => (
                <Radio
                  key={type}
                  id={type}
                  name="subscription"
                  value={type}
                  label={type.charAt(0).toUpperCase() + type.slice(1)}
                  checked={subscription === type}
                  onChange={handleChange}
                />
              ))}
            </FormGroup>
          </Form>
        );
      };

      return <RadioGroupExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['name', 'string', '', 'Name attribute used to group related radio buttons.'],
  ['label', 'string', '', 'Label text displayed next to the radio button.'],
  ['value', 'string', '', 'Value submitted when the radio button is selected.'],
  ['checked', 'boolean', 'false', 'Whether the radio button is selected.'],
  ['onChange', '(event) => void', '—', 'Callback fired when the selected radio changes.'],
];
