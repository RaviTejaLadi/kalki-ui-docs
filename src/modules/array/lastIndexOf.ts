/**
 * # Last Index Of
 *
 * A turbo `Array.prototype.lastIndexOf()` implementation.
 *
 * @param  subject The array (or array-like) to search within.
 * @param  target  The target item to search for.
 * @param  fromIndex The position to start searching backwards from, if known.
 * @return The last position of the target in the subject, or -1 if it does not exist.
 */
export function turboLastIndexOf<T>(subject: T[], target: T, fromIndex?: number): number {
  let length = subject.length;
  let i = length - 1;

  if (typeof fromIndex === 'number') {
    i = fromIndex;
    if (i < 0) {
      i += length;
    }
  }

  for (; i >= 0; i--) {
    if (subject[i] === target) {
      return i;
    }
  }

  return -1;
}
