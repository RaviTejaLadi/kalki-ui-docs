'use strict';
import { turboCloneArray } from './clone';

/**
 * Demonstrates the usage of `turboCloneArray` in various scenarios.
 */

// Example 1: Clone a simple array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
const clonedNumbers: number[] = turboCloneArray(numbers);
console.log('Cloned Numbers:', clonedNumbers); // Output: [1, 2, 3, 4, 5]

// Example 2: Clone a string array
const fruits: string[] = ['apple', 'banana', 'cherry'];
const clonedFruits: string[] = turboCloneArray(fruits);
console.log('Cloned Fruits:', clonedFruits); // Output: ['apple', 'banana', 'cherry']

// Example 4: Clone a typed array
const intArray: Int8Array = new Int8Array([10, 20, 30]);
const clonedIntArray: number[] = turboCloneArray(intArray);
console.log('Cloned Typed Array:', clonedIntArray); // Output: [10, 20, 30]

// Example 5: Clone an array of objects
interface User {
  name: string;
}
const users: User[] = [{ name: 'Alice' }, { name: 'Bob' }];
const clonedUsers: User[] = turboCloneArray(users);
console.log('Cloned Users:', clonedUsers); // Output: [{ name: 'Alice' }, { name: 'Bob' }]

// Example 6: Clone a mixed array (numbers, strings, booleans)
const mixedArray: (number | string | boolean)[] = [42, 'hello', false];
const clonedMixedArray: (number | string | boolean)[] = turboCloneArray(mixedArray);
console.log('Cloned Mixed Array:', clonedMixedArray); // Output: [42, 'hello', false]

// Example 7: Clone a large array for performance testing
const largeArray: number[] = Array.from({ length: 100000 }, (_, i) => i);
const clonedLargeArray: number[] = turboCloneArray(largeArray);
console.log('Large Array Clone Success:', clonedLargeArray.length === largeArray.length); // Output: true

// Example 8: Clone an empty array
const emptyArray: any[] = [];
const clonedEmptyArray: any[] = turboCloneArray(emptyArray);
console.log('Cloned Empty Array:', clonedEmptyArray); // Output: []

// Example 9: Clone an array-like object with custom properties
const arrayLike: { [key: number]: string; length: number } = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const clonedArrayLike: string[] = turboCloneArray(arrayLike);
console.log('Cloned Array-Like:', clonedArrayLike); // Output: ['a', 'b', 'c']

// Example 10: Use in combination with immutable transformations
const numbersToDouble: number[] = [1, 2, 3, 4];
const doubledNumbers: number[] = turboCloneArray(numbersToDouble).map((num) => num * 2);
console.log('Doubled Numbers:', doubledNumbers); // Output: [2, 4, 6, 8]

// Explanation of Use Cases:
// Simple Array of Numbers: Demonstrates cloning a basic array of numbers.
// String Array: Works for an array of strings, preserving all elements.
// Arguments Object: Converts arguments (array-like) into an actual array.
// Typed Array: Clones typed arrays such as Int8Array.
// Array of Objects: Shows that object references are preserved during cloning.
// Mixed Types: Handles arrays with mixed data types.
// Performance with Large Arrays: Verifies efficiency for large datasets.
// Empty Array: Clones an empty array without errors.
// Custom Array-Like Objects: Handles array-like objects with length.
// Chaining with Array Methods: Ensures compatibility with methods like map.
