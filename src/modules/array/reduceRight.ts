'use strict';

import { Bind4arguments } from '../function/Bind4arguments';

/**
 * # Reduce Right
 *
 * A turbo `.reduceRight()` implementation.
 *
 * This function iterates through an array in reverse order and applies a reducer function (`fn`) to reduce the array to a single value.
 * It supports an optional `initialValue`. If no initial value is provided, the last element of the array is used.
 *
 * @param subject       The array (or array-like object) to reduce.
 * @param fn            The reducer function. It receives the accumulator, current value, current index, and the array.
 * @param initialValue  The initial value for the accumulator, defaults to `subject[subject.length - 1]` if not provided.
 * @param thisContext   The context (`this`) for the reducer function.
 * @returns             The final result after applying the reducer function across the array.
 */
export function turboReduceRight<T, R>(
  subject: T[],
  fn: (accumulator: R, currentValue: T, currentIndex: number, array: T[]) => R,
  initialValue?: R,
  thisContext?: any
): R {
  const length = subject.length;
  const iterator = thisContext !== undefined ? Bind4arguments(fn, thisContext) : fn;

  let i: number;
  let result: R;

  // If no initial value is provided, use the last element of the array as the initial value
  if (initialValue === undefined) {
    i = length - 2; // Start from the second-to-last element
    result = subject[length - 1] as unknown as R; // Last element used as the initial value
  } else {
    i = length - 1;
    result = initialValue;
  }

  // Iterate over the array in reverse order and apply the reducer function
  for (; i >= 0; i--) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
}
