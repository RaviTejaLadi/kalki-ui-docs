import Form, { Checkbox, FormGroup, Submit } from '@/components/common/Form';
import JsonViewer from '@/components/common/JsonViewer';
import { FormEvent, useState } from 'react';

type FormState = {
  folders: string[];
};

export const CheckBoxGroupEg = () => {
  const [formState, setFormState] = useState<FormState>({
    folders: [],
  });

  const folderOptions = [
    { id: 'recents', label: 'Recents' },
    { id: 'home', label: 'Home' },
    { id: 'applications', label: 'Applications' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'documents', label: 'Documents' },
  ] as const;

  const handleCheckboxGroupChange = (id: string) => {
    setFormState((prev) => {
      const folders = prev.folders.includes(id) ? prev.folders.filter((item) => item !== id) : [...prev.folders, id];
      return { ...prev, folders };
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formState);
  };
  return (
    <div className="flex gap-5 ">
      <Form onSubmit={handleSubmit}>
        <FormGroup label="Select Folders" size="lg">
          <div className="space-y-2">
            {folderOptions.map(({ id, label }) => (
              <Checkbox
                key={id}
                id={id}
                name="folders"
                label={label}
                checked={formState.folders.includes(id)}
                onChange={() => handleCheckboxGroupChange(id)}
              />
            ))}
          </div>
        </FormGroup>
        <Submit>Submit</Submit>
      </Form>
      <div className="p-4">
        <JsonViewer data={formState} />
      </div>
    </div>
  );
};
