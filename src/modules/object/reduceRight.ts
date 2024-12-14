'use strict';

/**
 * # Reduce Right
 *
 * A turbo object `.reduceRight()` implementation.
 *
 * @param  {T} subject The object to reduce over.
 * @param  {(accumulator: any, value: any, key: string, subject: T) => any} fn The reducer function.
 * @param  {any} [initialValue] The initial value for the reducer, defaults to subject[0].
 * @param  {any} [thisContext] The context for the reducer.
 * @return {any} The final result.
 *
 * @template T - The type of the subject object.
 */

export function turboReduceRightObject<T extends object>(
  subject: T,
  fn: (accumulator: any, value: any, index: number, subject: T) => any,
  initialValue?: any
): any {
  let result: any = initialValue;
  const keys = Object.keys(subject);
  let i = keys.length - 1;

  // Use initialValue if defined, otherwise start with the last element
  if (result === undefined) {
    result = (subject as any)[keys[i--]];
  }

  // Loop through the object properties from end to start
  while (i >= 0) {
    const key = keys[i];
    result = fn(result, (subject as any)[key], i, subject);
    i--;
  }

  return result;
}



