import React, { useState } from 'react';
import Form, { FormGroup, FileInput } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic File Input',
    desc: 'A file input for selecting a single file, with simple preview of the file name.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, FileInput } from "kalki-ui";

export const FileInputExample = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Profile Picture" labelFor="avatar">
        <FileInput id="avatar" name="avatar" onChange={handleChange} />
      </FormGroup>
      {fileName && <p className="text-xs text-muted-foreground mt-2">Selected: {fileName}</p>}
    </Form>
  );
};
    `,
    snippet: (() => {
      const FileInputExample = () => {
        const [fileName, setFileName] = useState<string | null>(null);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          setFileName(file ? file.name : null);
        };

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Profile Picture" labelFor="avatar">
              <FileInput id="avatar" name="avatar" onChange={handleChange} />
            </FormGroup>
            {fileName && <p className="text-xs text-muted-foreground mt-2">Selected: {fileName}</p>}
          </Form>
        );
      };

      return <FileInputExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['name', 'string', '', 'Input name used when submitting the form.'],
  ['multiple', 'boolean', 'false', 'Allow selection of multiple files.'],
  ['accept', 'string', '', 'Comma-separated list of accepted file types.'],
  ['error', 'string', '', 'Error message displayed below the input.'],
  ['onChange', '(event) => void', '—', 'Callback fired when files are selected.'],
];
