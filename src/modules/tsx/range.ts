/**
 * Generates an integer array containing an arithmetic progression.
 * This is a port of the native Python `range()` function.
 * It returns an array of integers starting from `start`, up to (but not including) `stop`,
 * and progresses by the given `step` (which can be negative to generate a reverse range).
 *
 * @param start - The starting value of the range (inclusive).
 * @param stop - The stopping value of the range (exclusive).
 * @param step - The step between consecutive values in the range. If not provided, defaults to 1 or -1 based on the direction.
 * @returns An array of integers in the arithmetic progression defined by the parameters.
 *
 * @example
 * // Example 1: Range from 0 to 5 with a step of 1
 * const rangeArray = range(5);
 * console.log(rangeArray); // Example output: [0, 1, 2, 3, 4]
 *
 * @example
 * // Example 2: Range from 2 to 10 with a step of 2
 * const rangeArray = range(2, 10, 2);
 * console.log(rangeArray); // Example output: [2, 4, 6, 8]
 *
 * @example
 * // Example 3: Range from 10 to 0 with a step of -1 (reverse range)
 * const rangeArray = range(10, 0, -1);
 * console.log(rangeArray); // Example output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 *
 * @example
 * // Example 4: Range from 1 to 5 with a step of 1
 * const rangeArray = range(1, 5);
 * console.log(rangeArray); // Example output: [1, 2, 3, 4]
 *
 * @example
 * // Example 5: Range from 0 to -5 with a step of -1
 * const rangeArray = range(0, -5, -1);
 * console.log(rangeArray); // Example output: [0, -1, -2, -3, -4]
 *
 * @example
 * // Example 6: Range from 5 to 15 with a step of 3
 * const rangeArray = range(5, 15, 3);
 * console.log(rangeArray); // Example output: [5, 8, 11, 14]
 *
 * @example
 * // Example 7: Range from 0 to 5 with a negative step, which results in an empty array
 * const rangeArray = range(0, 5, -1);
 * console.log(rangeArray); // Example output: []
 *
 * @example
 * // Example 8: Range from 10 to 0 with a step of -2
 * const rangeArray = range(10, 0, -2);
 * console.log(rangeArray); // Example output: [10, 8, 6, 4, 2]
 *
 * @example
 * // Example 9: Range with no parameters, defaults to [0]
 * const rangeArray = range();
 * console.log(rangeArray); // Example output: [0]
 *
 * @example
 * // Example 10: Range from -5 to 5 with a step of 1
 * const rangeArray = range(-5, 5, 1);
 * console.log(rangeArray); // Example output: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
 */
export default function range(start: number = 0, stop?: number, step: number = 1): number[] {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  const length = Math.max(Math.ceil((stop - start) / step), 0);
  const rangeArr: number[] = [];

  for (let idx = 0; idx < length; idx++, start += step) {
    rangeArr[idx] = start;
  }

  return rangeArr;
}
