import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { createProtectedContext } from '@/utils/createProtectedContext';

const fieldSetStyles = cva('border-2 rounded-md p-1 mx-2 mb-4', {
  variants: {
    borderType: {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
  },
  defaultVariants: {
    borderType: 'solid',
  },
});

const fieldSetLabelStyles = cva('px-2 font-medium border rounded-md', {
  variants: {
    variant: {
      primary: 'text-blue-600 border-blue-600',
      secondary: 'text-gray-600 border-gray-600',
      success: 'text-green-600 border-green-600',
      warning: 'text-yellow-600 border-yellow-600',
      danger: 'text-red-600 border-red-600',
      info: 'text-cyan-600 border-cyan-600',
      dark: 'text-black border-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const { Provider: FieldSetProvider, useProtectedContext: useFieldSetContext } = createProtectedContext(
  '`FieldSetLabel` and `FieldSetContent` must be used within `FieldSet`. Please refer to the documentation for more information.'
);

interface FieldSetProps extends VariantProps<typeof fieldSetStyles> {
  borderType?: 'solid' | 'dashed' | 'dotted';
  children: React.ReactNode;
  className?: string;
}

const FieldSet: React.FC<FieldSetProps> = ({ borderType, children, className, ...props }) => {
  return (
    <FieldSetProvider>
      <fieldset className={cn(fieldSetStyles({ borderType }), className)} {...props}>
        {children}
      </fieldset>
    </FieldSetProvider>
  );
};

interface FieldSetLabelProps extends VariantProps<typeof fieldSetLabelStyles> {
  children: React.ReactNode;
  className?: string;
}

const FieldSetLabel: React.FC<FieldSetLabelProps> = ({ variant, children, className, ...props }) => {
  useFieldSetContext();
  return (
    <legend className={cn(fieldSetLabelStyles({ variant }), className)} {...props}>
      {children}
    </legend>
  );
};

interface FieldSetContentProps {
  children: React.ReactNode;
  className?: string;
}

const FieldSetContent: React.FC<FieldSetContentProps> = ({ children, className, ...props }) => {
  useFieldSetContext();
  return (
    <div className={cn('p-2', className)} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(
  FieldSet as React.ForwardRefExoticComponent<FieldSetProps & React.RefAttributes<HTMLFieldSetElement>>,
  {
    Label: FieldSetLabel,
    Content: FieldSetContent,
  }
);

export { FieldSetLabel, FieldSetContent };
