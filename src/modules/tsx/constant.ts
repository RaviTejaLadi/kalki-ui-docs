/**
 * Returns a function that always returns the specified value.
 * Often useful as a utility function for functional programming or testing.
 *
 * @template T - The type of the value to be returned.
 * @param value - The value to be returned by the generated function.
 * @returns A function that always returns `value`.
 */
export default function constant<T>(value: T): () => T {
  return function () {
    return value;
  };
}

// 10 Example Usages
const examples = () => {
  // Example 1: Returning a string constant
  const alwaysHello = constant('Hello, World!');
  console.log(alwaysHello()); // Output: "Hello, World!"

  // Example 2: Returning a number constant
  const always42 = constant(42);
  console.log(always42()); // Output: 42

  // Example 3: Returning a boolean constant
  const alwaysTrue = constant(true);
  console.log(alwaysTrue()); // Output: true

  // Example 4: Returning an array
  const alwaysArray = constant([1, 2, 3]);
  console.log(alwaysArray()); // Output: [1, 2, 3]

  // Example 5: Returning an object
  const alwaysObject = constant({ key: 'value' });
  console.log(alwaysObject()); // Output: { key: "value" }

  // Example 6: Returning a function reference
  const alwaysFunction = constant(() => "I'm a function!");
  console.log(alwaysFunction()()); // Output: "I'm a function!"

  // Example 7: Using with React state setter
  const initialValue = constant('Initial State');
  console.log(initialValue()); // Output: "Initial State"

  // Example 8: Default error message generator
  const defaultError = constant('An error occurred. Please try again.');
  console.log(defaultError()); // Output: "An error occurred. Please try again."

  // Example 9: Immutable value holder
  const pi = constant(3.14159);
  console.log(pi()); // Output: 3.14159

  // Example 10: Returning a deeply nested structure
  const deepValue = constant({ a: { b: { c: 42 } } });
  console.log(deepValue()); // Output: { a: { b: { c: 42 } } }
};
examples();
