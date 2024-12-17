/**
 * Checks if the given value is an object.
 * It returns `true` for objects (including arrays, functions, and non-null objects)
 * and `false` for non-object values such as primitives.
 *
 * @param obj - The value to be checked.
 * @returns `true` if the value is an object, otherwise `false`.
 *
 * @example
 * // Example 1: Checking an object
 * isObject({}); // returns true
 *
 * @example
 * // Example 2: Checking an array
 * isObject([1, 2, 3]); // returns true
 *
 * @example
 * // Example 3: Checking a function
 * isObject(() => {}); // returns true
 *
 * @example
 * // Example 4: Checking null
 * isObject(null); // returns false
 *
 * @example
 * // Example 5: Checking a number
 * isObject(42); // returns false
 *
 * @example
 * // Example 6: Checking a string
 * isObject('hello'); // returns false
 *
 * @example
 * // Example 7: Checking a boolean
 * isObject(true); // returns false
 *
 * @example
 * // Example 8: Checking undefined
 * isObject(undefined); // returns false
 *
 * @example
 * // Example 9: Checking a symbol
 * isObject(Symbol('sym')); // returns false
 *
 * @example
 * // Example 10: Checking a Date object
 * isObject(new Date()); // returns true
 */
export default function isObject(obj: unknown): boolean {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && obj !== null);
}
