// Explanation of the Code:
// TypeScript Syntax: We define the turboFill function with a generic type <T>, so it can be used with any array type (numbers, strings, objects, etc.).
// Parameters:
// subject: The array that needs to be filled.
// value: The value to insert at each position.
// start: The start index where filling begins. Defaults to 0.
// end: The end index where filling stops. Defaults to the length of the array.
// Function Logic:
// We ensure that start and end are within valid bounds. If start or end is out of bounds (negative or too large), we adjust them.
// A for loop is used to fill the array starting from the start index to the end index with the specified value.
// Return Value: The function returns the updated array.
/**
 * # turboFill
 * This function fills an array with a specified value from a given start index to an end index.
 * Unlike the native Array.prototype.fill(), this version does not support negative indices.
 * 
 * @param subject - The array to fill.
 * @param value - The value to insert into the array.
 * @param start - The start index to begin filling (inclusive), defaults to 0.
 * @param end - The end index to stop filling (exclusive), defaults to subject.length.
 * 
 * @returns The array filled with the specified value.
 */
export function turboFill<T>(subject: T[], value: T, start: number = 0, end: number = subject.length): T[] {
  const length = subject.length;

  // If start and end are outside bounds, adjust them
  if (start < 0) start = 0;
  if (end > length) end = length;

  for (let i = start; i < end; i++) {
    subject[i] = value;
  }

  return subject;
}

// Example use cases:

// 1. Fill an array with zeros from the start
const arr1 = [1, 2, 3, 4, 5];
console.log(turboFill(arr1, 0));  // [0, 0, 0, 0, 0]

// 2. Fill from index 2 to the end
const arr2 = [1, 2, 3, 4, 5];
console.log(turboFill(arr2, 9, 2));  // [1, 2, 9, 9, 9]

// 3. Fill only a part of the array (from index 1 to index 3)
const arr3 = [1, 2, 3, 4, 5];
console.log(turboFill(arr3, 2, 1, 3));  // [1, 'X', 'X', 'X', 5]

// 4. Fill with an object
const arr4 = [{}, {}, {}];
console.log(turboFill(arr4, { filled: true }));  // [{ filled: true }, { filled: true }, { filled: true }]

// 5. Fill with a boolean value
const arr5 = [false, false, false];
console.log(turboFill(arr5, true));  // [true, true, true]

// 6. Fill a larger array partially
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(turboFill(arr6, 0, 3, 7));  // [1, 2, 3, 0, 0, 0, 0, 8, 9, 10]

// 7. Using negative indices, which will be clamped to 0
const arr7 = [10, 20, 30, 40, 50];
console.log(turboFill(arr7, 223, -1, 4));  // [ 'A', 'A', 'A', 'A', 50]

// 8. Filling an empty array
const arr8: number[] = [];
console.log(turboFill(arr8, 100));  // []

// 9. Fill from index 0 to index 2 in a string array
const arr9 = ['apple', 'banana', 'cherry', 'date'];
console.log(turboFill(arr9, 'fruit', 0, 2));  // ['fruit', 'fruit', 'cherry', 'date']

// 10. Fill with null values (this could be useful for clearing an array)
const arr10 = [1, 2, 3, 4];
console.log(turboFill(arr10, null));  // [null, null, null, null]
