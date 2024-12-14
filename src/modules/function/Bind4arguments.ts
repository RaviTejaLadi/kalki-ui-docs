/**
 * Internal helper to bind a function with exactly 4 arguments
 * to a given context. This function ensures that the provided
 * function is invoked with the correct `this` context and
 * the arguments `(a, b, c, d)` are passed properly.
 *
 * @param func - The function to bind, which must accept 4 arguments.
 * @param thisContext - The context (`this`) to which the function should be bound.
 * @returns A new function that calls `func` with the provided `thisContext` and 4 arguments.
 */
export function Bind4arguments(
  func: (a: any, b: any, c: any, d: any) => any,
  thisContext: any
): (a: any, b: any, c: any, d: any) => any {
  return function (a: any, b: any, c: any, d: any): any {
    return func.call(thisContext, a, b, c, d);
  };
}

// Type Annotations:

// func: (a: any, b: any, c: any, d: any) => any defines the type of the func parameter, specifying that func is a function that accepts four arguments (a, b, c, d), with any type, and returns a value of any type.
// thisContext: any defines that the context can be of any type.
// The return type of the function is (a: any, b: any, c: any, d: any) => any, ensuring the returned function has the same signature as the one passed to bindInternal4.