import React, { createContext, ReactNode } from 'react';
import { SyntaxHighlighter } from '../SyntaxHighLighter/SyntaxHighLighter';
import { cn } from '@/utils';

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
  className?: string;
}

// interface StepperComponent extends StepperProps {
//   Step: React.FC<StepProps>;
//   CodeBlock: React.FC<CodeBlockProps>;
//   Description: React.FC<DescriptionProps>;
// }

const StepperContext = createContext({});

export const Stepper = ({ children, className }: StepperProps) => {
  return (
    <StepperContext.Provider value={{}}>
      <div className={cn('w-full mx-auto p-6 bg-background text-foreground ', className)}>
        <div className="relative">{children}</div>
      </div>
    </StepperContext.Provider>
  );
};

const StepperStep: React.FC<StepProps> = ({ step, title, children }) => {
  return (
    <div className="relative flex items-start gap-8 mb-10 group">
      {step && (
        <div className="relative flex-shrink-0 w-8 h-8 text-center bg-background border rounded-full flex items-center justify-center text-sm font-bold dark:border-gray-200/10">
          {step}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-md text-foreground font-semibold mb-3">{title}</h3>
        <div className="text-base text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

const StepperCodeBlock: React.FC<CodeBlockProps> = ({ code, language, ...rest }) => {
  return (
    <div className="rounded-md font-mono text-sm text-foreground mt-2 ">
      <SyntaxHighlighter code={code} language={language} {...rest} />
    </div>
  );
};

const StepperDescription: React.FC<DescriptionProps> = ({ children, className }) => {
  return <p className={cn('text-muted-foreground mb-4', className)}>{children}</p>;
};

Stepper.Step = StepperStep;
Stepper.CodeBlock = StepperCodeBlock;
Stepper.Description = StepperDescription;
