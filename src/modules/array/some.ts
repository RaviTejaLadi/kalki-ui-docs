'use strict';

import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Some
 *
 * A turbo `.some()` implementation.
 *
 * This function checks if at least one element in the array passes the truth test implemented by the provided function (`fn`).
 * The `fn` function will be called for each element in the array, and if any element returns `true`, `turboSome` will return `true`.
 * If no element passes the test, the function returns `false`.
 *
 * @param subject       The array (or array-like object) to iterate over.
 * @param fn            The visitor function. It takes the current value, index, and array.
 * @param thisContext   The context (`this`) for the visitor function.
 * @returns             `true` if at least one item in the array passes the truth test, otherwise `false`.
 */
export function turboSome<T>(
  subject: T[],
  fn: (currentValue: T, currentIndex: number, array: T[]) => boolean,
  thisContext?: any
): boolean {
  const length = subject.length;
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  // Iterate through the array and check if any item passes the test
  for (let i = 0; i < length; i++) {
    if (iterator(subject[i], i, subject)) {
      return true;
    }
  }

  return false;
}
