/**
 * A function that returns the input value unchanged.
 * Useful for default iteratees or as a placeholder function.
 *
 * @template T - The type of the input value.
 * @param value - The value to be returned unchanged.
 * @returns The same value that was passed as an argument.
 */
export default function identity<T>(value: T): T {
  return value;
}

// 10 Example Usages
const examples = () => {
  // Example 1: Passing a string
  const inputString = 'Hello, World!';
  console.log(identity(inputString)); // Output: "Hello, World!"

  // Example 2: Passing a number
  const inputNumber = 42;
  console.log(identity(inputNumber)); // Output: 42

  // Example 3: Passing a boolean
  const inputBoolean = true;
  console.log(identity(inputBoolean)); // Output: true

  // Example 4: Passing an array
  const inputArray = [1, 2, 3];
  console.log(identity(inputArray)); // Output: [1, 2, 3]

  // Example 5: Passing an object
  const inputObject = { key: 'value' };
  console.log(identity(inputObject)); // Output: { key: "value" }

  // Example 6: Passing a function
  const inputFunction = () => "I'm a function!";
  console.log(identity(inputFunction)()); // Output: "I'm a function!"

  // Example 7: Using in a map function
  const numbers = [1, 2, 3, 4];
  console.log(numbers.map(identity)); // Output: [1, 2, 3, 4]

  // Example 8: Default iteratee for reduce
  const sum = [1, 2, 3].reduce((acc, val) => acc + identity(val), 0);
  console.log(sum); // Output: 6

  // Example 9: Passing null or undefined
  console.log(identity(null)); // Output: null
  console.log(identity(undefined)); // Output: undefined

  // Example 10: Passing a nested structure
  const inputNested = { a: { b: { c: [1, 2, 3] } } };
  console.log(identity(inputNested)); // Output: { a: { b: { c: [1, 2, 3] } } }
};
examples();
