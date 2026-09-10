import { useState } from 'react';
import { Stepper } from '@/components/common/Stepper';
import PlaygroundShell, { CheckboxGrid } from './PlaygroundShell';

const StepperPlayground = () => {
  const [showStepNumbers, setShowStepNumbers] = useState(true);

  const generateCode = () => `<Stepper>
  <Stepper.Step${showStepNumbers ? ' step="1"' : ''} title="Install">
    Install the package with your preferred package manager.
  </Stepper.Step>
  <Stepper.Step${showStepNumbers ? ' step="2"' : ''} title="Configure">
    Add theme and provider setup to your app entry.
  </Stepper.Step>
  <Stepper.Step${showStepNumbers ? ' step="3"' : ''} title="Build">
    Import components and start building your UI.
  </Stepper.Step>
</Stepper>`;

  return (
    <PlaygroundShell
      preview={
        <Stepper className="w-full max-w-md p-0">
          <Stepper.Step step={showStepNumbers ? '1' : undefined} title="Install">
            Install the package with your preferred package manager.
          </Stepper.Step>
          <Stepper.Step step={showStepNumbers ? '2' : undefined} title="Configure">
            Add theme and provider setup to your app entry.
          </Stepper.Step>
          <Stepper.Step step={showStepNumbers ? '3' : undefined} title="Build">
            Import components and start building your UI.
          </Stepper.Step>
        </Stepper>
      }
      controls={
        <CheckboxGrid
          options={[{ label: 'Show step numbers', checked: showStepNumbers, onChange: setShowStepNumbers }]}
        />
      }
      code={generateCode()}
      previewClassName="items-start"
    />
  );
};

export default StepperPlayground;
