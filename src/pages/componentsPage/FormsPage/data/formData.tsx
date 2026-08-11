import React, { FormEvent, useState } from 'react';
import Form, { FormGroup, Input, Textarea, Submit } from '@/components/common/Form';
import { FormDescription } from '@/components/common/Form/FormDescription';
import { InputField } from '@/components/common/Form/InputField';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Form',
    desc: 'A simple contact form using the Form component with grouped inputs.',
    code: `
import React, { FormEvent, useState } from 'react';
import Form, { FormGroup, Input, Textarea, Submit } from "kalki-ui";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const BasicForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Name" labelFor="name">
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formState.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup label="Email" labelFor="email">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formState.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup label="Message" labelFor="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formState.message}
          onChange={handleChange}
        />
      </FormGroup>

      <Submit>Submit</Submit>
    </Form>
  );
};
    `,
    snippet: (() => {
      type FormState = {
        name: string;
        email: string;
        message: string;
      };

      const BasicForm = () => {
        const [formState, setFormState] = useState<FormState>({
          name: '',
          email: '',
          message: '',
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setFormState((prev) => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // eslint-disable-next-line no-console
          console.log(formState);
        };

        return (
          <Form onSubmit={handleSubmit}>
            <FormGroup label="Name" labelFor="name">
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formState.name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup label="Email" labelFor="email">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup label="Message" labelFor="message">
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formState.message}
                onChange={handleChange}
              />
            </FormGroup>

            <Submit>Submit</Submit>
          </Form>
        );
      };

      return <BasicForm />;
    })(),
  },
  {
    title: 'Form with Description',
    desc: 'Use FormDescription to provide contextual help or guidance beneath a field group.',
    code: `
import React from "react";
import Form, { FormGroup, Input } from "kalki-ui";
import { FormDescription } from "kalki-ui";

export const FormWithDescription = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Email" labelFor="email">
        <Input id="email" name="email" type="email" placeholder="you@example.com" />
        <FormDescription variant="muted" size="xs">
          We&apos;ll never share your email with anyone else.
        </FormDescription>
      </FormGroup>
    </Form>
  );
};
    `,
    snippet: (() => {
      const FormWithDescription = () => {
        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Email" labelFor="email">
              <Input id="email" name="email" type="email" placeholder="you@example.com" />
              <FormDescription variant="muted" size="xs">
                We&apos;ll never share your email with anyone else.
              </FormDescription>
            </FormGroup>
          </Form>
        );
      };

      return <FormWithDescription />;
    })(),
  },
  {
    title: 'InputField with Tooltip and Error',
    desc: 'InputField composes LabelExt, Input, Tooltip, and FormErrorMessage into a single reusable field.',
    code: `
import React, { useState } from "react";
import { InputField } from "kalki-ui";

export const InputFieldWithError = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>();

  const handleBlur = () => {
    setError(value ? undefined : "Display name is required");
  };

  return (
    <InputField
      name="displayName"
      label="Display name"
      info="This name will be shown publicly."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      error={error}
    />
  );
};
    `,
    snippet: (() => {
      const InputFieldWithError = () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | undefined>();

        const handleBlur = () => {
          setError(value ? undefined : 'Display name is required');
        };

        return (
          <InputField
            name="displayName"
            label="Display name"
            info="This name will be shown publicly."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            error={error}
          />
        );
      };

      return <InputFieldWithError />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['onSubmit', '(event) => void', '—', 'Callback fired when the form is submitted.'],
  ['children', 'ReactNode', '—', 'Form fields and groups rendered inside the form.'],
  ['className', 'string', '""', 'Additional CSS classes applied to the form element.'],
  ['style', 'CSSProperties', '{}', 'Inline styles applied to the form element.'],
];
