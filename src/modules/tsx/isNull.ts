/**
 * Checks if the given value is strictly equal to `null`.
 *
 * @param obj - The value to be checked.
 * @returns `true` if the value is `null`, otherwise `false`.
 *
 * @example
 * // Example 1: Checking a null value
 * isNull(null); // returns true
 *
 * @example
 * // Example 2: Checking an undefined value
 * isNull(undefined); // returns false
 *
 * @example
 * // Example 3: Checking a number value
 * isNull(42); // returns false
 *
 * @example
 * // Example 4: Checking a string value
 * isNull('hello'); // returns false
 *
 * @example
 * // Example 5: Checking an empty string
 * isNull(''); // returns false
 *
 * @example
 * // Example 6: Checking an array
 * isNull([1, 2, 3]); // returns false
 *
 * @example
 * // Example 7: Checking an object
 * isNull({}); // returns false
 *
 * @example
 * // Example 8: Checking a function
 * isNull(() => {}); // returns false
 *
 * @example
 * // Example 9: Checking a boolean value
 * isNull(true); // returns false
 *
 * @example
 * // Example 10: Checking a null value inside an object
 * const obj = { key: null };
 * isNull(obj.key); // returns true
 */
export default function isNull(obj: unknown): boolean {
  return obj === null;
}
