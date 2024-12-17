import { ReactNode } from 'react';

interface StepProps {
  step?: string;
  title: string;
  children: ReactNode;
}

interface CodeBlockProps {
  code: string;
  language?: string;
}

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

interface StepperProps {
  children: ReactNode;
}

interface StepperComponent extends React.FC<StepperProps> {
  Step: React.FC<StepProps>;
  CodeBlock: React.FC<CodeBlockProps>;
  Description: React.FC<DescriptionProps>;
}
export type { StepProps, CodeBlockProps, DescriptionProps, StepperProps, StepperComponent };
