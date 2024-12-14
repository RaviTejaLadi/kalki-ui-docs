'use strict';

/**
 * # Pluck
 * 
 * Extracts the property with the given name (`field`) from an array of objects (`input`).
 * Returns an array containing the values of the specified field for each object.
 *
 * @param  input   The array of objects from which to pluck the field values.
 * @param  field   The name of the field to pluck from each object.
 * @return         An array containing the values of the specified field for each object.
 */
export function turboPluck<T, K extends keyof T>(input: T[], field: K): T[K][] {
  const length = input.length;
  const plucked: T[K][] = [];
  let count = 0;
  let value: T;

  for (let i = 0; i < length; i++) {
    value = input[i];
    if (value != null && value[field] !== undefined) {
      plucked[count++] = value[field];
    }
  }
  return plucked;
}
