import React, { createContext, ReactNode } from 'react';
import { SyntaxHighLighter } from '../SyntaxHighLighter/SyntaxHighLighter';
import { cn } from '@/utils';

// Types and Interfaces
interface StepperContextType {
  // Add context properties if needed
}

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

// Context
const StepperContext = createContext<StepperContextType>({});

// Root Stepper Component
export const Stepper: StepperComponent = ({ children }) => {
  return (
    <StepperContext.Provider value={{}}>
      <div className="w-full mx-auto p-6 bg-white text-black">
        <div className="relative">{children}</div>
      </div>
    </StepperContext.Provider>
  );
};

const StepperStep: React.FC<StepProps> = ({ step, title, children }) => {
  return (
    <div className="relative flex items-start gap-8 mb-10 group">
      {step && (
        <div className="relative flex-shrink-0 w-8 h-8 text-center bg-gray-100 border rounded-full  flex items-center justify-center text-sm font-bold">
          {step}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-md text-foreground font-semibold mb-3">{title}</h3>
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
};

const StepperCodeBlock: React.FC<CodeBlockProps> = ({ code, language, ...rest }) => {
  return (
    <div className="rounded-md font-mono text-sm text-gray-200 mt-2">
      <SyntaxHighLighter code={code} language={language} {...rest} />
    </div>
  );
};

const StepperDescription: React.FC<DescriptionProps> = ({ children, className }) => {
  return <p className={cn('text-muted-foreground mb-4', className)}>{children}</p>;
};

Stepper.Step = StepperStep;
Stepper.CodeBlock = StepperCodeBlock;
Stepper.Description = StepperDescription;
