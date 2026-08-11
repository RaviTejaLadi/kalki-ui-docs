import { useState } from 'react';
import Form, { FormGroup, Switch } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Switch',
    desc: 'A toggle switch for enabling or disabling a feature.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, Switch } from "kalki-ui";

export const SwitchExample = () => {
  const [notifications, setNotifications] = useState(false);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup>
        <Switch
          variant="help"
          size="sm"
          label="Enable notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </FormGroup>
    </Form>
  );
};
    `,
    snippet: (() => {
      const SwitchExample = () => {
        const [notifications, setNotifications] = useState(false);

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
              <Switch
                variant="help"
                size="sm"
                label="Enable notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </FormGroup>
          </Form>
        );
      };

      return <SwitchExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['variant', '"primary" | "secondary" | ...', '"primary"', 'Visual style of the switch.'],
  ['size', '"xs" | "sm" | "md" | "lg"', '"md"', 'Size of the switch and thumb.'],
  ['checked', 'boolean', 'false', 'Controlled checked state of the switch.'],
  ['onCheckedChange', '(checked: boolean) => void', '—', 'Callback fired when the switch is toggled.'],
  ['label', 'string', '', 'Optional label rendered next to the switch.'],
];
