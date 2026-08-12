import { Stepper } from '@/components/common/Stepper';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['className', 'string', '-', 'Additional CSS classes applied to the Stepper root.'],
  ['children', 'ReactNode', '-', 'Stepper.Step children describing each step.'],
  ['step', 'string', '-', 'Optional step indicator label shown in the circle.'],
  ['title', 'string', '-', 'Title displayed for each Stepper.Step.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Stepper',
    desc: 'A vertical step list for guides, onboarding, or sequential instructions.',
    code: `
import { Stepper } from "kalki-ui";
export default function BasicStepper() {
  return (
    <Stepper>
      <Stepper.Step step="1" title="Install">
        Install the package with your preferred package manager.
      </Stepper.Step>
      <Stepper.Step step="2" title="Configure">
        Add theme and provider setup to your app entry.
      </Stepper.Step>
      <Stepper.Step step="3" title="Use">
        Import components and start building your UI.
      </Stepper.Step>
    </Stepper>
  );
}
`,
    snippet: (
      <Stepper className="w-full max-w-md p-0">
        <Stepper.Step step="1" title="Install">
          Install the package with your preferred package manager.
        </Stepper.Step>
        <Stepper.Step step="2" title="Configure">
          Add theme and provider setup to your app entry.
        </Stepper.Step>
        <Stepper.Step step="3" title="Use">
          Import components and start building your UI.
        </Stepper.Step>
      </Stepper>
    ),
  },
  {
    title: 'Stepper with Code Block',
    desc: 'Attach code snippets to a step using Stepper.CodeBlock.',
    code: `
import { Stepper } from "kalki-ui";

export default function StepperWithCode() {
  return (
    <Stepper>
      <Stepper.Step step="1" title="Install package">
        <Stepper.Description>Run the install command in your project.</Stepper.Description>
        <Stepper.CodeBlock code="npm install kalki-ui" language="bash" />
      </Stepper.Step>
    </Stepper>
  );
}
`,
    snippet: (
      <Stepper className="w-full max-w-md p-0">
        <Stepper.Step step="1" title="Install package">
          <Stepper.Description>Run the install command in your project.</Stepper.Description>
          <Stepper.CodeBlock code="npm install kalki-ui" language="bash" />
        </Stepper.Step>
      </Stepper>
    ),
  },
];
