/**
 * Returns a function that is the composition of a list of functions,
 * where each function consumes the return value of the function that follows.
 *
 * @param funcs - A list of functions to compose, executed from right to left.
 * @returns A composed function that represents the composition of the input functions.
 *
 * Example usage:
 * ```tsx
 * const add = (x: number) => x + 1;
 * const multiply = (x: number) => x * 2;
 * const composed = compose(multiply, add);
 * console.log(composed(5)); // Outputs: 12
 * ```
 */
export default function compose<R>(...funcs: Array<(arg: any) => any>): (arg: R) => R {
    return function (this: any, arg: R): R {
      let index = funcs.length - 1;
      let result = funcs[index].call(this, arg);
      while (index--) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  }
  

// Example Usages:

// 1. Basic composition
const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;
const composedBasic = compose(multiply, add);
console.log(composedBasic(5)); // Outputs: 12

// 2. Multiple functions
const subtract = (x: number) => x - 3;
const composedMultiple = compose(multiply, add, subtract);
console.log(composedMultiple(5)); // Outputs: 6 (5 - 3 = 2, 2 + 1 = 3, 3 * 2 = 6)

// 3. String transformations
const trim = (str: string) => str.trim();
const capitalize = (str: string) => str.toUpperCase();
const addExclamation = (str: string) => `${str}!`;
const composedString = compose(addExclamation, capitalize, trim);
console.log(composedString('  hello ')); // Outputs: "HELLO!"

// 4. Array transformations
const doubleArray = (arr: number[]) => arr.map((x) => x * 2);
const filterArray = (arr: number[]) => arr.filter((x) => x > 5);
const sumArray = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
const composedArray = compose(sumArray, filterArray, doubleArray);
console.log(composedArray([1, 2, 3, 4])); // Outputs: 14

// 5. Pipeline of functions
const pipeline = compose(
  (x: number) => x * 2,
  (x: number) => x + 5,
  (x: number) => x / 3
);
console.log(pipeline(9)); // Outputs: 11

// 6. Reversing words
const splitWords = (sentence: string) => sentence.split(' ');
const reverseWords = (words: string[]) => words.reverse();
const joinWords = (words: string[]) => words.join(' ');
const composedWords = compose(joinWords, reverseWords, splitWords);
console.log(composedWords('Hello World Compose')); // Outputs: "Compose World Hello"

// 7. Function chaining with date
const addDays = (date: Date, days: number) => new Date(date.setDate(date.getDate() + days));
const formatDate = (date: Date) => date.toISOString().split('T')[0];
const composedDate = compose(formatDate, (date: Date) => addDays(date, 5));
console.log(composedDate(new Date('2024-01-01'))); // Outputs: "2024-01-06"

// 8. Nested functions
const square = (x: number) => x * x;
const halve = (x: number) => x / 2;
const composedNested = compose(halve, square);
console.log(composedNested(4)); // Outputs: 8

// 9. Object transformations
const toPairs = (obj: Record<string, any>) => Object.entries(obj);
const toObject = (entries: [string, any][]) => Object.fromEntries(entries);
const composedObject = compose(toObject, toPairs);
console.log(composedObject({ a: 1, b: 2 })); // Outputs: { a: 1, b: 2 }

