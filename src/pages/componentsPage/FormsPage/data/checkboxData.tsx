import { Checkbox } from '@/components/common/Form';
import { docsData } from '@/types/docsData';
import { CheckBoxGroupEg } from '../examples/CheckBoxGroupEg';

export const docs: docsData[] = [
  {
    title: 'Basic',
    desc: 'A checkbox for agreeing to terms and conditions.',
    code: `
        <Checkbox id="agreeTerms" name="agreeTerms" label="I agree to the terms and conditions" />
      `,
    snippet: <Checkbox id="agreeTerms" name="agreeTerms" label="I agree to the terms and conditions" />,
  },
  {
    title: 'With text',
    code: `
      <div className="grid gap-1.5 leading-none">
        <Checkbox id="terms1" label="Accept terms and conditions" />
        <p className="text-xs ml-5 text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
      `,
    snippet: (
      <div className="grid gap-1.5 leading-none">
        <Checkbox id="terms1" label="Accept terms and conditions" />
        <p className="text-xs ml-5 text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    ),
  },
  {
    title: 'Multiple Selection',
    desc: 'A group of checkboxes for selecting multiple options.',
    code: `
type FormState = {
  folders: string[];
};

export const CheckBoxGroup = () => {
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
        <FormGroup label="Select Folders">
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
      `,
    snippet: <CheckBoxGroupEg />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['name', 'string', '', 'Checkbox name'],
  ['label', 'string', '', 'Label text for the checkbox'],
  ['size', 'string', 'md', "Checkbox size ('sm', 'md', 'lg')"],
  ['checked', 'boolean', 'false', 'Whether the checkbox is checked'],
];
