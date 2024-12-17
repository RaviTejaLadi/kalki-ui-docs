import React, { forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { spinnerVariants } from './spinnerVariants';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
  className?: string;
}

/**
 * A customizable spinner component for loading states.
 *
 * @component
 * @example
 * ```tsx
 * <Spinner variant="primary" size="md" />
 * ```
 *
 * @param {SpinnerProps} props - The props for the Spinner component
 * @param {SpinnerVariant} [props.variant] - The visual style variant of the spinner
 * @param {SpinnerSize} [props.size] - The size of the spinner
 * @param {string} [props.className] - Additional CSS classes to apply to the spinner
 * @param {React.Ref<HTMLDivElement>} ref - The ref to attach to the spinner element
 *
 * @returns {JSX.Element} A spinning loader component
 */
const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ variant, size, className = '', ...rest }, ref) => {
  return (
    <div ref={ref} className={cn(spinnerVariants({ variant, size }), className)} {...rest}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
