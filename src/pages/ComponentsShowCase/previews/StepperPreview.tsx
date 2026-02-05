import { Stepper } from '@/components/common/Stepper/Stepper';

export const StepperPreviews = {
  basic: (
    <Stepper className="w-full max-w-md">
      <Stepper.Step step="1" title="First step">First step description.</Stepper.Step>
      <Stepper.Step step="2" title="Second step">Second step description.</Stepper.Step>
    </Stepper>
  ),
};
