'use strict';

import { Bind4arguments } from '../function/Bind4arguments';

/**
 * # Reduce
 *
 * A turbo `.reduce()` implementation.
 * 
 * Iterates over the array and reduces it to a single value based on the reducer function (`fn`).
 * The reducer function is called with an accumulator (`result`), the current value, the current index, and the entire array.
 * The function supports an optional `initialValue` for the accumulator. If it's not provided, the first element of the array is used as the initial value.
 *
 * @param subject       The array (or array-like) to reduce.
 * @param fn            The reducer function.
 * @param initialValue  The initial value for the accumulator, defaults to `subject[0]` if not provided.
 * @param thisContext   The context for the reducer function.
 * @return              The final result of the reduction.
 */
export function turboReduce<T, R>(
  subject: T[],
  fn: (accumulator: R, currentValue: T, currentIndex: number, array: T[]) => R,
  initialValue?: R,
  thisContext?: any
): R {
  const length = subject.length;
  const iterator = thisContext !== undefined ? Bind4arguments(fn, thisContext) : fn;

  let i: number;
  let result: R;

  // If no initial value is provided, use the first element of the array as the initial value
  if (initialValue === undefined) {
    i = 1;
    // Narrow type to R explicitly, as we expect the first element to be compatible with R
    result = subject[0] as unknown as R; // First element of the array is assumed to be of type R
  } else {
    i = 0;
    result = initialValue;
  }

  // Iterate through the array and apply the reducer function
  for (; i < length; i++) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
}
