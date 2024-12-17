'use strict';

import { Bind4arguments } from '../function/Bind4arguments';

/**
 * # Reduce
 *
 * A turbo object `.reduce()` implementation.
 *
 * @param  {T} subject The object to reduce over.
 * @param  {(accumulator: any, value: any, key: string, subject: T) => any} fn The reducer function.
 * @param  {any} [initialValue] The initial value for the reducer, defaults to subject[0].
 * @param  {any} [thisContext] The context for the reducer.
 * @return {any} The final result.
 *
 * @template T - The type of the subject object.
 */
export function turboReduceObject<T extends object>(
  subject: T,
  fn: (accumulator: any, value: any, key: string, subject: T) => any,
  initialValue?: any,
  thisContext?: any
): any {
  // Get the object keys
  const keys = Object.keys(subject);
  const length = keys.length;

  // Bind the function to `thisContext` if provided, otherwise use the original function
  const iterator = thisContext !== undefined ? Bind4arguments(fn, thisContext) : fn;

  let result: any;
  let startIndex: number;

  // Determine starting index and initial result value based on whether initialValue is provided
  if (initialValue === undefined) {
    startIndex = 1; // Skip the first element if no initial value is provided
    result = (subject as any)[keys[0]]; // Initialize with the first value
  } else {
    startIndex = 0; // Start from the first element if initialValue is provided
    result = initialValue; // Use the provided initial value
  }

  // Use a `for` loop to iterate through the keys of the object
  for (let i = startIndex; i < length; i++) {
    const key = keys[i];
    result = iterator(result, (subject as any)[key], key, subject); // Apply the iterator function
  }

  return result;
}
