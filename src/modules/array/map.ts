'use strict';

import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Map
 *
 * A turbo `.map()` implementation.
 *
 * This function maps over an array and applies the provided function `fn` to each element.
 * It optionally allows setting the context (`thisContext`) for the function execution.
 *
 * @param  subject     The array (or array-like object) to map over.
 * @param  fn          The function to apply to each element of the array.
 * @param  thisContext The context (`this` value) for the mapper function. If not provided, the function will be executed with its default context.
 * @return An array containing the results of applying `fn` to each element of the subject array.
 */
export function turboMap<T, R>(subject: T[], fn: (value: T, index: number, array: T[]) => R, thisContext?: any): R[] {
  const length = subject.length;
  const result: R[] = new Array(length);
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  // Iterate through each element of the subject array and apply the function.
  for (let i = 0; i < length; i++) {
    result[i] = iterator(subject[i], i, subject);
  }

  return result;
}
