/**
 * Invokes the `interceptor` with the `obj` and then returns the `obj`. 
 * The primary purpose of this method is to "tap into" a method chain, 
 * allowing you to perform operations on intermediate results within the chain 
 * without modifying the flow of the chain itself.
 * 
 * @param obj - The object to be passed to the interceptor.
 * @param interceptor - The function to invoke with the `obj`. This function can perform any operation on the object.
 * @returns The original `obj` after invoking the `interceptor` with it.
 * 
 * @example
 * // Example 1: Using `tap` to log an object while chaining
 * const result = tap({ a: 1, b: 2 }, (obj) => {
 *   console.log('Before:', obj);
 * });
 * console.log('After:', result); // Logs: { a: 1, b: 2 }
 * 
 * @example
 * // Example 2: Using `tap` to modify an object inside a method chain
 * const result = _.chain([1, 2, 3])
 *   .map((num) => num * 2)
 *   .tap((arr) => console.log('Modified Array:', arr))
 *   .reverse()
 *   .value(); // Logs: Modified Array: [2, 4, 6]
 * console.log(result); // Output: [6, 4, 2]
 * 
 * @example
 * // Example 3: Using `tap` to intercept an object and add a custom property
 * const result = tap({ a: 1 }, (obj) => {
 *   obj.b = 2;
 * });
 * console.log(result); // Output: { a: 1, b: 2 }
 * 
 * @example
 * // Example 4: Using `tap` in a function chain to debug intermediate results
 * const result = _.chain([10, 20, 30])
 *   .map((num) => num / 2)
 *   .tap((arr) => console.log('Half of numbers:', arr)) // Logs: Half of numbers: [5, 10, 15]
 *   .reduce((sum, num) => sum + num, 0)
 *   .value(); 
 * console.log(result); // Output: 30
 * 
 * @example
 * // Example 5: Using `tap` to inspect a nested object without modifying it
 * const nestedObj = { user: { name: 'Alice', age: 25 } };
 * tap(nestedObj, (obj) => {
 *   console.log('User Name:', obj.user.name); // Logs: User Name: Alice
 * });
 * console.log(nestedObj); // Output: { user: { name: 'Alice', age: 25 } }
 * 
 * @example
 * // Example 6: Using `tap` to test an object in a larger processing chain
 * const result = _.chain([5, 10, 15])
 *   .map((num) => num + 1)
 *   .tap((arr) => console.log('Mapped Array:', arr)) // Logs: Mapped Array: [6, 11, 16]
 *   .filter((num) => num > 10)
 *   .value(); 
 * console.log(result); // Output: [11, 16]
 * 
 * @example
 * // Example 7: Using `tap` to log an object and return it unchanged
 * const result = tap({ a: 3, b: 4 }, (obj) => {
 *   console.log('Before operation:', obj); // Logs: Before operation: { a: 3, b: 4 }
 * });
 * console.log('After operation:', result); // Logs: After operation: { a: 3, b: 4 }
 * 
 * @example
 * // Example 8: Using `tap` to perform validation inside a chain
 * const result = _.chain([1, 2, 3])
 *   .map((num) => num * 2)
 *   .tap((arr) => {
 *     if (arr[0] !== 2) {
 *       console.log('Validation failed');
 *     }
   })
   .reverse()
   .value();
 * console.log(result); // Output: [6, 4, 2]
 * 
 * @example
 * // Example 9: Using `tap` to adjust a value without interrupting the flow
 * const result = tap([10, 20, 30], (arr) => {
 *   arr.push(40); 
 * });
 * console.log(result); // Output: [10, 20, 30, 40]
 * 
 * @example
 * // Example 10: Using `tap` to test an array during a transformation
 * const result = _.chain([2, 4, 6])
 *   .tap((arr) => console.log('Original Array:', arr)) // Logs: Original Array: [2, 4, 6]
 *   .map((num) => num * 2)
 *   .value();
 * console.log(result); // Output: [4, 8, 12]
 */
export default function tap<T>(obj: T, interceptor: (obj: T) => void): T {
  interceptor(obj);
  return obj;
}
