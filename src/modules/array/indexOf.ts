/**
 * # Index Of
 *
 * A turbo `Array.prototype.indexOf()` implementation.
 *
 * @param  subject   The array (or array-like) to search within.
 * @param  target    The target item to search for.
 * @param  fromIndex The position to start searching from, if known.
 * @return The position of the target in the subject, or -1 if it does not exist.
 */
export function turboIndexOf<T>(
  subject: T[],
  target: T,
  fromIndex?: number
): number {
  const length = subject.length;
  let i = 0;

  if (typeof fromIndex === 'number') {
    i = fromIndex;
    if (i < 0) {
      i += length;
      if (i < 0) {
        i = 0;
      }
    }
  }

  for (; i < length; i++) {
    if (subject[i] === target) {
      return i;
    }
  }

  return -1;
}
