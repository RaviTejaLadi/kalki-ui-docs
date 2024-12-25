import React, { createContext } from 'react';
import { SyntaxHighLighter } from '../SyntaxHighLighter/SyntaxHighLighter';
import { cn } from '@/utils';
import { CodeBlockProps, DescriptionProps, StepperComponent, StepProps } from './types';

const StepperContext = createContext({});

export const Stepper: StepperComponent = ({ children, className }) => {
  return (
    <StepperContext.Provider value={{}}>
      <div className={cn('w-full mx-auto p-6 bg-white text-foreground dark:bg-inherit dark:text-gray-100', className)}>
        <div className="relative">{children}</div>
      </div>
    </StepperContext.Provider>
  );
};

const StepperStep: React.FC<StepProps> = ({ step, title, children }) => {
  return (
    <div className="relative flex items-start gap-8 mb-10 group">
      {step && (
        <div className="relative flex-shrink-0 w-8 h-8 text-center bg-gray-100 border rounded-full flex items-center justify-center text-sm font-bold dark:bg-gray-700 dark:border-gray-600">
          {step}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-md text-foreground font-semibold mb-3 dark:text-gray-200">{title}</h3>
        <div className="text-base dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
};

const StepperCodeBlock: React.FC<CodeBlockProps> = ({ code, language, ...rest }) => {
  return (
    <div className="rounded-md font-mono text-sm text-gray-800 mt-2 dark:text-gray-300">
      <SyntaxHighLighter code={code} language={language} {...rest} />
    </div>
  );
};

const StepperDescription: React.FC<DescriptionProps> = ({ children, className }) => {
  return <p className={cn('text-muted-foreground mb-4 dark:text-gray-400', className)}>{children}</p>;
};

Stepper.Step = StepperStep;
Stepper.CodeBlock = StepperCodeBlock;
Stepper.Description = StepperDescription;
