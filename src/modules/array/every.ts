import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Every
 *
 * A turbo `.every()` implementation.
 *
 * @param  subject     The array (or array-like) to iterate over.
 * @param  fn          The visitor function.
 * @param  thisContext The context for the visitor.
 * @return true if all items in the array pass the truth test.
 */
export function turboEvery<T>(
  subject: T[],
  fn: (value: T, index: number, array: T[]) => boolean,
  thisContext?: any
): boolean {
  const length = subject.length;
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  for (let i = 0; i < length; i++) {
    if (!iterator(subject[i], i, subject)) {
      return false;
    }
  }

  return true;
}
