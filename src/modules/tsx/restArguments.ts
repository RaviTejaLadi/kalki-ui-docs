/**
 * A helper function that accumulates all remaining arguments (after the initial expected ones)
 * into an array that becomes the last argument. This is similar to ES6's "rest parameter" feature.
 * It allows functions to accept a variable number of arguments, with the "rest" of the arguments
 * being grouped into an array for further processing.
 *
 * @param func - The function to be wrapped, which should expect one or more arguments and a variable
 * number of additional arguments.
 * @param startIndex - The index at which the "rest" of the arguments start. If not provided, defaults
 * to the last argument index of the function.
 * @returns A new function that wraps the provided `func` and collects all extra arguments into an array.
 *
 * @example
 * // Example 1: Using `restArguments` to collect all extra arguments
 * const sum = restArguments((a, b, rest) => {
 *   return a + b + rest.reduce((total, num) => total + num, 0);
 * });
 * console.log(sum(1, 2, 3, 4, 5)); // Output: 15
 *
 * @example
 * // Example 2: Using `restArguments` with the `startIndex` to start gathering arguments from index 1
 * const joinStrings = restArguments((prefix, rest) => {
 *   return prefix + ' ' + rest.join(' ');
 * });
 * console.log(joinStrings('Hello', 'world', 'from', 'TypeScript')); // Output: 'Hello world from TypeScript'
 *
 * @example
 * // Example 3: Using `restArguments` to collect all arguments after the second argument
 * const logArgs = restArguments((a, b, rest) => {
 *   console.log('First:', a);
 *   console.log('Second:', b);
 *   console.log('Rest:', rest);
 * });
 * logArgs(1, 2, 3, 4, 5); // Output: First: 1, Second: 2, Rest: [3, 4, 5]
 *
 * @example
 * // Example 4: Using `restArguments` without `startIndex`
 * const multiply = restArguments((a, b, rest) => {
 *   return a * b * rest.reduce((prod, num) => prod * num, 1);
 * });
 * console.log(multiply(2, 3, 4, 5)); // Output: 120
 *
 * @example
 * // Example 5: Using `restArguments` to modify arguments collection behavior
 * const maxOfFirstTwo = restArguments((a, b, rest) => {
 *   return Math.max(a, b, ...rest);
 * });
 * console.log(maxOfFirstTwo(1, 2, 3, 4)); // Output: 4
 *
 * @example
 * // Example 6: `restArguments` with a custom `startIndex` of 2
 * const subtract = restArguments((a, b, rest) => {
 *   return a - b - rest.reduce((diff, num) => diff - num, 0);
 * }, 2);
 * console.log(subtract(10, 5, 1, 1)); // Output: 3
 *
 * @example
 * // Example 7: Using `restArguments` to log all arguments
 * const logAllArguments = restArguments((...args) => {
 *   console.log(args);
 * });
 * logAllArguments(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
 *
 * @example
 * // Example 8: Using `restArguments` with a function that only takes `rest` arguments
 * const logRestOnly = restArguments((rest) => {
 *   console.log(rest);
 * });
 * logRestOnly(1, 2, 3, 4); // Output: [1, 2, 3, 4]
 *
 * @example
 * // Example 9: Using `restArguments` with a string concatenation function
 * const concatStrings = restArguments((first, rest) => {
 *   return first + rest.join('');
 * });
 * console.log(concatStrings('Hello', ' ', 'world', '!')); // Output: 'Hello world!'
 *
 * @example
 * // Example 10: Using `restArguments` to sum up arguments
 * const sumUp = restArguments((a, b, rest) => {
 *   return a + b + rest.reduce((sum, num) => sum + num, 0);
 * });
 * console.log(sumUp(1, 2, 3, 4, 5)); // Output: 15
 */
export default function restArguments(func: Function, startIndex: number = func.length - 1): Function {
  return function (this: any, ...args: any[]) {
    const length = Math.max(args.length - startIndex, 0);
    const rest = Array(length);
    let index = 0;
    for (; index < length; index++) {
      rest[index] = args[index + startIndex];
    }

    switch (startIndex) {
      case 0:
        return func.call(this, rest);
      case 1:
        return func.call(this, args[0], rest);
      case 2:
        return func.call(this, args[0], args[1], rest);
    }

    const allArgs = [...args.slice(0, startIndex), rest];
    return func.apply(this, allArgs);
  };
}
