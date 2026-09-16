import { Stepper } from 'kalki-ui';

export const StepperPreviews = {
  basic: (
    <Stepper className="w-full max-w-md">
      <Stepper.Step step="1" title="First step" status="complete">
        First step description.
      </Stepper.Step>
      <Stepper.Step step="2" title="Second step" status="current">
        Second step description.
      </Stepper.Step>
    </Stepper>
  ),
};
