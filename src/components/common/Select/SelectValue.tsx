import React from 'react';
import { SelectValueProps } from './interfaces';
import { SelectContext } from './Select';
import { cn } from '@/utils';

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(({ placeholder, className }, ref) => {
  const { value, placeholder: contextPlaceholder } = React.useContext(SelectContext);
  const resolvedPlaceholder = placeholder ?? contextPlaceholder ?? 'Select an option';

  return (
    <span ref={ref} className={cn('block truncate', value ? '' : 'text-muted-foreground', className)}>
      {value || resolvedPlaceholder}
    </span>
  );
});
SelectValue.displayName = 'SelectValue';
