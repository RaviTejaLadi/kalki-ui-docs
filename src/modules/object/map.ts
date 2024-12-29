'use strict';

/**
 * # Map
 *
 * A turbo object `.map()` implementation.
 *
 * @param  {T} subject The object to map over.
 * @param  {(value: any, key: string, subject: T) => any} fn The mapper function.
 * @param  {any} [thisContext] The context for the mapper.
 * @return {Partial<T>} The new object containing the results.
 *
 * @template T - The type of the subject object.
 */

export function turboMapObject<T extends object>(
  subject: T,
  fn: (value: any, key: string, subject: T) => any,
  thisContext?: any
): Partial<T> {
  const result: Partial<T> = {};

  const keys = Object.keys(subject); // Get keys once, no need for repeated operations

  // Using a traditional for loop for better performance
  if (thisContext !== undefined) {
    // Binding `thisContext` to the function and iterating
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      (result as any)[key] = fn.call(thisContext, (subject as any)[key], key, subject);
    }
  } else {
    // No context binding needed, directly apply the function
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      (result as any)[key] = fn((subject as any)[key], key, subject);
    }
  }

  return result;
}
