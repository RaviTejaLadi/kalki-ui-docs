'use strict';
/**
 * # For Each
 *
 * A turbo object `.forEach()` implementation.
 *
 * @param  {T} subject The object to iterate over.
 * @param  {(value: any, key: string, subject: T) => void} fn The visitor function.
 * @param  {any} [thisContext] The context for the visitor.
 *
 * @template T - The type of the subject object.
 */

export function turboForEachObject<T extends object>(
  subject: T,
  fn: (value: any, key: string, subject: T) => void,
  thisContext?: any
): void {
  const keys = Object.keys(subject);
  const length = keys.length;

  if (thisContext !== undefined) {
    // Use a for loop to avoid extra overhead
    for (let i = 0; i < length; i++) {
      const key = keys[i];
      fn.call(thisContext, (subject as any)[key], key, subject);
    }
  } else {
    // Direct function call without context binding
    for (let i = 0; i < length; i++) {
      const key = keys[i];
      fn((subject as any)[key], key, subject);
    }
  }
}
