import Form, { Checkbox, FormGroup, Submit } from '@/components/common/Form';
import JsonViewer from '@/components/common/JsonViewer';
import Separator from '@/components/common/Separator';
import { useToast } from 'kalki-ui-toast';
import { FormEvent, useState } from 'react';

type FormState = {
  folders: string[];
};

export const CheckBoxGroupEg = () => {
  const { addToast } = useToast();
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
    addToast({
      message: (
        <div className="p-2">
          <p className="text-muted-foreground">Form Data:</p>
          <Separator className="h-[0.5px] mt-2 bg-gray-200" />
          <JsonViewer data={formState} />
        </div>
      ),
    });
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
