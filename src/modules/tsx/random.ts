/**
 * Returns a random integer between `min` and `max` (inclusive).
 * If only one argument is provided, it returns a random integer between 0 and `min` (inclusive).
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive). If not provided, `min` is treated as `max`, and the range is [0, min].
 * @returns A random integer between `min` and `max` (inclusive).
 *
 * @example
 * // Example 1: Random number between 0 and 10
 * const randomNumber = random(0, 10);
 * console.log(randomNumber); // Example output: 7 (varies)
 *
 * @example
 * // Example 2: Random number between 1 and 5
 * const randomNumber = random(1, 5);
 * console.log(randomNumber); // Example output: 3 (varies)
 *
 * @example
 * // Example 3: Random number between 0 and 100
 * const randomNumber = random(100);
 * console.log(randomNumber); // Example output: 42 (varies)
 *
 * @example
 * // Example 4: Random number between -10 and 10
 * const randomNumber = random(-10, 10);
 * console.log(randomNumber); // Example output: -3 (varies)
 *
 * @example
 * // Example 5: Random number between 0 and 0 (always 0)
 * const randomNumber = random(0, 0);
 * console.log(randomNumber); // Example output: 0
 *
 * @example
 * // Example 6: Generating a random roll of a 6-sided die (1 to 6)
 * const dieRoll = random(1, 6);
 * console.log(dieRoll); // Example output: 4 (varies)
 *
 * @example
 * // Example 7: Generating a random index for an array
 * const fruits = ['apple', 'banana', 'cherry'];
 * const randomIndex = random(0, fruits.length - 1);
 * console.log(fruits[randomIndex]); // Example output: "banana" (varies)
 *
 * @example
 * // Example 8: Random number between 10 and 20 (inclusive)
 * const randomNumber = random(10, 20);
 * console.log(randomNumber); // Example output: 15 (varies)
 *
 * @example
 * // Example 9: Random float between 0 and 1 (using a random min and max)
 * const randomFloat = random(0, 1);
 * console.log(randomFloat); // Example output: 0.57 (varies)
 *
 * @example
 * // Example 10: Random number between -5 and 5
 * const randomNumber = random(-5, 5);
 * console.log(randomNumber); // Example output: -2 (varies)
 */
export default function random(min: number, max?: number): number {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
