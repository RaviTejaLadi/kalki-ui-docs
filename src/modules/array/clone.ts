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
/**
 * Creates a shallow copy of an array-like object.
 * 
 * @template T - The type of elements in the array
 * @param {ArrayLike<T>} input - The array-like object to clone
 * @returns {T[]} A new array containing the same elements as the input
 * 
 * @example
 * //! Clone a regular array
 * const arr = [1, 2, 3];
 * const cloned = turboCloneArray(arr);
 * // Result: [1, 2, 3]
 * 
 * @example
 * //! Clone array-like objects
 * const htmlCollection = document.getElementsByTagName('div');
 * const clonedCollection = turboCloneArray(htmlCollection);
 * 
 * @example
 * //! Clone typed arrays
 * const typedArray = new Uint8Array([1, 2, 3]);
 * const clonedTyped = turboCloneArray(typedArray);
 * 
 * @remarks
 * - Performance optimized for large arrays
 * - Creates a shallow copy (nested objects share references)
 * - Works with any ArrayLike object including Arrays, TypedArrays, and DOM collections
 */
export function turboCloneArray<T>(input: ArrayLike<T>): T[] {
  const length = input.length;
  const sliced = new Array<T>(length);
  for (let i = 0; i < length; i++) {
    sliced[i] = input[i];
  }
  return sliced;
}
