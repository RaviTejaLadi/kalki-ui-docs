'use strict';

/**
 * # Clone Array
 *
 * Clone an array or array-like object (e.g., `arguments`).
 * This is the equivalent of calling `Array.prototype.slice.call(arguments)`,
 * but significantly faster.
 *
 * @param  {ArrayLike<T>} input The array or array-like object to clone.
 * @return {T[]}                The cloned array.
 * @template T
 */
export function turboCloneArray<T>(input: ArrayLike<T>): T[] {
  const length = input.length;
  const sliced = new Array<T>(length);
  for (let i = 0; i < length; i++) {
    sliced[i] = input[i];
  }
  return sliced;
}
