/**
 * Internal helper to bind a function with exactly 3 arguments
 * to a given context. This function ensures that the provided 
 * function is invoked with the correct `this` context and 
 * the arguments `(a, b, c)` are passed properly.
 *
 * @param func - The function to bind, which must accept 3 arguments.
 * @param thisContext - The context (`this`) to which the function should be bound.
 * @returns A new function that calls `func` with the provided `thisContext` and 3 arguments.
 */
export function Bind3arguments(func: (a: any, b: any, c: any) => any, thisContext: any): (a: any, b: any, c: any) => any {
  return function (a: any, b: any, c: any): any {
    return func.call(thisContext, a, b, c);
  };
}

// Type Annotations:

// func: (a: any, b: any, c: any) => any defines the type of the func parameter, specifying that func is a function that accepts three arguments (a, b, c), with any type, and returns a value of any type.
// thisContext: any defines that the context can be of any type.
// The return type of the function is (a: any, b: any, c: any) => any, ensuring the returned function has the same signature as the one passed to bindInternal3.