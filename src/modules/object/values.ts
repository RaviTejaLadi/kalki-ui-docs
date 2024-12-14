'use strict';

/**
 * # Values
 * Return all the (enumerable) property values for an object.
 * Like Object.keys() but for values.
 *
 * @param  {T extends object} obj The object to retrieve values from.
 * @return {any[]} An array containing property values.
 *
 * @template T - The type of the input object.
 */
export function turboValues<T extends object>(obj: T): any[] {
  const keys = Object.keys(obj);
  const length = keys.length;
  const values = new Array(length);

  for (let i = 0; i < length; i++) {
    values[i] = (obj as any)[keys[i]];
  }
  return values;
}
