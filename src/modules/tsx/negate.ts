/**
 * Returns a negated version of the passed-in predicate function.
 * The returned function will negate the result of the original predicate function.
 *
 * @param predicate - The predicate function to be negated.
 * @returns A new function that negates the result of the original predicate.
 *
 * @example
 * // Example 1: Negating a simple check for even numbers
 * const isEven = (num: number) => num % 2 === 0;
 * const isOdd = negate(isEven);
 * isOdd(1); // returns true
 * isOdd(2); // returns false
 *
 * @example
 * // Example 2: Negating a check for equality
 * const isEqualToFive = (num: number) => num === 5;
 * const isNotEqualToFive = negate(isEqualToFive);
 * isNotEqualToFive(4); // returns true
 * isNotEqualToFive(5); // returns false
 *
 * @example
 * // Example 3: Negating a check for truthy value
 * const isTruthy = (value: any) => !!value;
 * const isFalsy = negate(isTruthy);
 * isFalsy(false); // returns true
 * isFalsy(0); // returns true
 * isFalsy(''); // returns true
 * isFalsy(true); // returns false
 *
 * @example
 * // Example 4: Negating a string length check
 * const isShortString = (str: string) => str.length < 5;
 * const isLongString = negate(isShortString);
 * isLongString('hello'); // returns true
 * isLongString('hi'); // returns false
 *
 * @example
 * // Example 5: Negating a comparison for greater than
 * const isGreaterThanFive = (num: number) => num > 5;
 * const isLessThanOrEqualToFive = negate(isGreaterThanFive);
 * isLessThanOrEqualToFive(4); // returns true
 * isLessThanOrEqualToFive(6); // returns false
 *
 * @example
 * // Example 6: Negating a function that checks if a value is in a range
 * const isInRange = (num: number) => num >= 10 && num <= 20;
 * const isOutOfRange = negate(isInRange);
 * isOutOfRange(25); // returns true
 * isOutOfRange(15); // returns false
 *
 * @example
 * // Example 7: Negating a check for an empty array
 * const isEmpty = (arr: any[]) => arr.length === 0;
 * const isNotEmpty = negate(isEmpty);
 * isNotEmpty([]); // returns false
 * isNotEmpty([1, 2, 3]); // returns true
 *
 * @example
 * // Example 8: Negating a truthy check for an object
 * const hasProperty = (obj: object, key: string) => key in obj;
 * const doesNotHaveProperty = negate(hasProperty);
 * doesNotHaveProperty({ name: 'John' }, 'age'); // returns true
 * doesNotHaveProperty({ name: 'John' }, 'name'); // returns false
 *
 * @example
 * // Example 9: Negating a predicate for string inclusion
 * const includesHello = (str: string) => str.includes('hello');
 * const doesNotIncludeHello = negate(includesHello);
 * doesNotIncludeHello('world'); // returns true
 * doesNotIncludeHello('hello world'); // returns false
 *
 * @example
 * // Example 10: Negating a number check for negative
 * const isNegative = (num: number) => num < 0;
 * const isNotNegative = negate(isNegative);
 * isNotNegative(-5); // returns false
 * isNotNegative(5); // returns true
 */
export default function negate<T extends (...args: any[]) => boolean>(
  predicate: T
): (...args: Parameters<T>) => boolean {
  return function (this: any, ...args: Parameters<T>) {
    return !predicate.apply(this, args);
  };
}
