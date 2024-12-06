/**
 * Checks if the given value is `undefined`.
 *
 * @param obj - The value to be checked.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 *
 * @example
 * // Example 1: Checking an undefined value
 * isUndefined(undefined); // returns true
 *
 * @example
 * // Example 2: Checking a null value
 * isUndefined(null); // returns false
 *
 * @example
 * // Example 3: Checking a number
 * isUndefined(42); // returns false
 *
 * @example
 * // Example 4: Checking a string
 * isUndefined('hello'); // returns false
 *
 * @example
 * // Example 5: Checking an empty string
 * isUndefined(''); // returns false
 *
 * @example
 * // Example 6: Checking a boolean
 * isUndefined(true); // returns false
 *
 * @example
 * // Example 7: Checking an object
 * isUndefined({}); // returns false
 *
 * @example
 * // Example 8: Checking an array
 * isUndefined([1, 2, 3]); // returns false
 *
 * @example
 * // Example 9: Checking a function
 * isUndefined(() => {}); // returns false
 *
 * @example
 * // Example 10: Checking an undeclared variable
 * let testVar;
 * isUndefined(testVar); // returns true
 */
export default function isUndefined(obj: unknown): boolean {
  return obj === void 0;
}
