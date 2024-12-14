import { Bind3arguments } from "../function/Bind3arguments";

/**
 * # For Each
 *
 * A turbo `.forEach()` implementation.
 *
 * @param  subject     The array (or array-like) to iterate over.
 * @param  fn          The visitor function.
 * @param  thisContext The context for the visitor.
 */
export function turboForEach<T>(
  subject: T[],
  fn: (value: T, index: number, array: T[]) => void,
  thisContext?: any
): void {
  const length = subject.length;
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  for (let i = 0; i < length; i++) {
    iterator(subject[i], i, subject);
  }
}
