import React, { useState } from 'react';
import Form, { FormGroup, Textarea } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Textarea',
    desc: 'A multi-line textarea for capturing longer text input.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, Textarea } from "react-ui-essentials";

export const TextareaExample = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Message" labelFor="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={handleChange}
        />
      </FormGroup>
    </Form>
  );
};
    `,
    snippet: (() => {
      const TextareaExample = () => {
        const [message, setMessage] = useState('');

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setMessage(e.target.value);
        };

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Message" labelFor="message">
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        );
      };

      return <TextareaExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['name', 'string', '', 'Textarea name and id.'],
  ['size', '"sm" | "md" | "lg"', '"sm"', 'Predefined height and padding for the textarea.'],
  ['width', 'string', '', 'Custom width applied via inline styles.'],
  ['height', 'string', '', 'Custom height applied via inline styles.'],
  ['margin', 'string', '', 'Custom margin applied via inline styles.'],
  ['padding', 'string', '', 'Custom padding applied via inline styles.'],
  ['error', 'string', '', 'Error message displayed below the textarea.'],
];
