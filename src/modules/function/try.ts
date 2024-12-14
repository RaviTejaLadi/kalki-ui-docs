/**
 * # Try
 *
 * Allows functions to be optimized by isolating `try {} catch (e) {}` blocks
 * outside the function declaration. Returns either the result of the function or an Error
 * object if one was thrown. The caller should then check for `result instanceof Error`.
 *
 * ```ts
 * const result = turboTry(myFunction);
 * if (result instanceof Error) {
 *    console.log('something went wrong');
 * } else {
 *   console.log('result:', result);
 * }
 * ```
 *
 * @param fn The function to invoke.
 * @return The result of the function, or an `Error` object.
 */
export function turboTry<T>(fn: () => T): T | Error {
  try {
    return fn();
  } catch (e) {
    if (!(e instanceof Error)) {
      return new Error(String(e)); // Ensure that non-Error objects are converted to Error
    } else {
      return e; // Return the caught Error
    }
  }
}
