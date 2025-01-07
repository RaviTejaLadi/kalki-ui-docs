import React, { useState, ChangeEvent } from 'react';

export function handleChange<T>(setValue: React.Dispatch<React.SetStateAction<T>>) {
  return (val: T | ChangeEvent<HTMLInputElement>) => {
    if (!val) {
      setValue(val as T);
    } else if (val instanceof Event || (typeof val === 'object' && val !== null && 'nativeEvent' in val && val.nativeEvent instanceof Event)) {
      const { currentTarget } = val as ChangeEvent<HTMLInputElement>;

      if (currentTarget.type === 'checkbox') {
        setValue(currentTarget.checked as T);
      } else {
        setValue(currentTarget.value as T);
      }
    } else {
      setValue(val as T);
    }
  };
}

export function useInputValue<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);

  return [value, handleChange<T>(setValue)];
}
