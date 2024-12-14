'use strict';
// Explanation of Key Concepts:

// TypeScript Types:
// The function turboConcat takes a variable number of arguments, each of which can either be an array or a non-array value. The types are handled using TypeScript's union types: (Array<any> | any)[].
// The return type is an array of any type: any[], to account for different data types being concatenated.

// Spread Operator:
// The function uses ... (spread operator) to concatenate arrays efficiently. It flattens nested arrays when concatenating them.

// Array Check:
// Array.isArray(item) is used to check if the item is an array before attempting to push its individual elements into the result array.

/**
 * # turboConcat
 *
 * Concatenate multiple arrays or individual items into a single array.
 * This function is similar to `Array.prototype.concat()`, but it works with both arrays and non-array values.
 *
 * ## Parameters:
 * - `...item` (Array | mixed): The item(s) to concatenate. You can pass multiple arguments, and each can be an array or a single item.
 *
 * ## Return Value:
 * - The function returns a new array containing all concatenated items.
 *
 * @param  {...(Array<any> | any)} items The item(s) to concatenate.
 * @returns {Array<any>} The array containing the concatenated items.
 */
export function turboConcat(...items: (Array<any> | any)[]): any[] {
  const result: any[] = []; // The array to store the concatenated result

  items.forEach(item => {
    // If the item is an array, push all of its elements into the result array
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      // Otherwise, just push the item itself
      result.push(item);
    }
  });

  return result;
}

// Example use cases:

// 1. Concatenate two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(turboConcat(array1, array2)); 
// Output: [1, 2, 3, 4, 5, 6]

// 2. Concatenate a single item with an array
const array3 = [7, 8, 9];
console.log(turboConcat(array3, 10)); 
// Output: [7, 8, 9, 10]

// 3. Concatenate multiple arrays
const array4 = [11, 12];
const array5 = [13, 14];
const array6 = [15, 16];
console.log(turboConcat(array4, array5, array6)); 
// Output: [11, 12, 13, 14, 15, 16]

// 4. Concatenate multiple items (non-arrays)
console.log(turboConcat(1, 2, 3, 4)); 
// Output: [1, 2, 3, 4]

// 5. Concatenate an empty array
console.log(turboConcat([])); 
// Output: []

// 6. Concatenate an array and a string
console.log(turboConcat([1, 2], 'hello')); 
// Output: [1, 2, 'hello']

// 7. Concatenate mixed arrays and items
const array7 = ['a', 'b'];
console.log(turboConcat(array7, 3, 'hello', [4, 5])); 
// Output: ['a', 'b', 3, 'hello', 4, 5]

// 8. Concatenate an array with undefined values
const array8 = [undefined, 1, 2];
console.log(turboConcat(array8, 3, 4)); 
// Output: [undefined, 1, 2, 3, 4]

// 9. Concatenate an array with null values
const array9 = [null, 1, 2];
console.log(turboConcat(array9, 3, 4)); 
// Output: [null, 1, 2, 3, 4]

// 10. Concatenate a deep array with nested arrays
const array10 = [1, [2, 3]];
console.log(turboConcat(array10, 4)); 
// Output: [1, [2, 3], 4]

// Example Use Cases:
// Concatenating two arrays: The function combines two arrays into one by appending the second array to the first.
// Concatenating a single item with an array: The function can add a single element (like a number or string) to an existing array.
// Concatenating multiple arrays: The function can handle multiple arrays passed as arguments and concatenate them sequentially.
// Concatenating multiple non-array items: You can concatenate individual items (non-arrays), which will be treated as separate elements.
// Concatenating an empty array: An empty array is passed, and the function simply returns it without altering anything.
// Concatenating an array and a string: You can concatenate arrays with other data types, such as strings, without issue.
// Concatenating mixed arrays and items: The function can handle a mix of arrays and non-array items, flattening the arrays and appending non-array items.
// Concatenating arrays with undefined: Undefined values in arrays are handled without issue and are included in the final result.
// Concatenating arrays with null: Null values in arrays are treated as normal values and included in the result array.
// Concatenating deep arrays with nested arrays: The function will not flatten nested arrays; they are simply appended as-is, which can be useful in scenarios where nested structures need to be maintained.