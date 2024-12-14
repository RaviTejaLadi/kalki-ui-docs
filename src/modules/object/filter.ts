'use strict';

import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Filter
 *
 * A turbo object `.filter()` implementation.
 *
 * @param  {T} subject The object to filter.
 * @param  {(value: any, key: string, subject: T) => boolean} fn The filter function.
 * @param  {any} thisContext The context for the filter.
 * @return {Partial<T>} The new object containing the filtered results.
 *
 * @template T - The type of the subject object.
 */

export function turboFilterObject<T extends object>(
  subject: T,
  fn: (value: any, key: string, subject: T) => boolean,
  thisContext?: any
): Partial<T> {
  const keys = Object.keys(subject);
  const result: Partial<T> = {};
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  keys.forEach((key) => {
    if (iterator((subject as any)[key], key, subject)) {
      (result as any)[key] = (subject as any)[key];
    }
  });

  return result;
}
