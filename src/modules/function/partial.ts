import { applyWithContext } from './applyWithContext';

/**
 * # Partial Application
 *
 * Partially apply a function. This is similar to `.bind()`,
 * but with one important difference - the returned function is not bound
 * to a particular context. This makes it easy to add partially
 * applied methods to objects. If you need to bind to a context,
 * use `.bind()` instead.
 *
 * > Note: This function does not support partial application for
 * constructors, for that see `partialConstructor()`
 *
 * @param  fn          The function to partially apply.
 * @param  args, ...   Arguments to pre-bind.
 * @return The partially applied function.
 */
export function turboPartial<T extends (...args: any[]) => any>(
  fn: T, 
  ...args: Parameters<T>
): (...args: Parameters<T>) => ReturnType<T> {
  return function (this: any, ...newArgs: Parameters<T>): ReturnType<T> {
    // Combine the pre-bound arguments with the new ones
    const combinedArgs = [...args, ...newArgs];
    return applyWithContext(fn, this, combinedArgs);
  };
}
