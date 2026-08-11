import * as React from 'react';
import { cn } from '@/utils';
import { useMergedRef } from '@/hooks/useMergedRef';
import { SelectContextValue, SelectProps } from './interfaces';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectSeparator } from './SelectSeparator';
import { SelectLabel } from './SelectLabel';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

const defaultSelectContext: SelectContextValue = {
  open: false,
  setOpen: () => undefined,
  registerTrigger: () => undefined,
};

export const SelectContext = React.createContext<SelectContextValue>(defaultSelectContext);

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      children,
      value,
      onValueChange,
      defaultValue,
      placeholder = 'Select an option',
      disabled,
      className,
      error,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const selectRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    const combinedRef = useMergedRef(selectRef, ref);
    const currentValue = value ?? internalValue;

    const registerTrigger = React.useCallback((node: HTMLButtonElement | null) => {
      triggerRef.current = node;
    }, []);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    React.useEffect(() => {
      if (!open) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false);
          triggerRef.current?.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open]);

    return (
      <SelectContext.Provider
        value={{
          value: currentValue,
          onValueChange: (newValue) => {
            setInternalValue(newValue);
            onValueChange?.(newValue);
            setOpen(false);
            triggerRef.current?.focus();
          },
          disabled,
          open,
          setOpen,
          placeholder,
          error,
          triggerRef,
          registerTrigger,
        }}
      >
        <div
          ref={combinedRef}
          className={cn('relative', error && '[&_button]:border-red-500', className)}
          style={{ width: props.style?.width }}
          {...props}
        >
          {children}
        </div>
      </SelectContext.Provider>
    );
  }
);
Select.displayName = 'Select';

export default Object.assign(
  Select as React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>,
  {
    Content: SelectContent,
    Item: SelectItem,
    Separator: SelectSeparator,
    label: SelectLabel,
    Trigger: SelectTrigger,
    Value: SelectValue,
  }
);

export { SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue };
