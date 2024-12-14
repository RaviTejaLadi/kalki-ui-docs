import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Filter
 *
 * A turbo `.filter()` implementation.
 *
 * @param  subject     The array (or array-like) to filter.
 * @param  fn          The filter function.
 * @param  thisContext The context for the filter.
 * @return The array containing the results.
 */
export function turboFilter<T>(
  subject: T[],
  fn: (value: T, index: number, array: T[]) => boolean,
  thisContext?: any
): T[] {
  const length = subject.length;
  const result: T[] = [];
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  for (let i = 0; i < length; i++) {
    if (iterator(subject[i], i, subject)) {
      result.push(subject[i]);
    }
  }

  return result;
}
