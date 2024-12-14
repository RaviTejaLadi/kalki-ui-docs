/**
 * Internal helper for applying a function with a specified context (`this`).
 * This function allows you to call the `subject` function with varying
 * numbers of arguments, from 0 to 8, and fall back to using `.apply` 
 * for more than 8 arguments, while ensuring the function is executed 
 * with the provided `thisContext`.
 *
 * @param subject - The function to apply, which can accept 0 to 8 arguments.
 * @param thisContext - The context (`this`) to bind to when calling the `subject` function.
 * @param args - An array of arguments to pass to the function.
 * @returns The result of calling the `subject` function with the provided `thisContext` and arguments.
 */
export function applyWithContext(subject: (...args: any[]) => any, thisContext: any, args: any[]): any {
  switch (args.length) {
    case 0:
      return subject.call(thisContext);
    case 1:
      return subject.call(thisContext, args[0]);
    case 2:
      return subject.call(thisContext, args[0], args[1]);
    case 3:
      return subject.call(thisContext, args[0], args[1], args[2]);
    case 4:
      return subject.call(thisContext, args[0], args[1], args[2], args[3]);
    case 5:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4]);
    case 6:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5]);
    case 7:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    case 8:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    default:
      return subject.apply(thisContext, args);
  }
}

// Type Annotations:

// subject: (...args: any[]) => any defines that subject is a function that accepts any number of arguments (...args is a rest parameter) and returns a value of any type.
// thisContext: any defines that the thisContext parameter can be of any type (the context to bind to).
// args: any[] specifies that args is an array of arguments where each element can be of any type.
// The return type of the function is any, since the result of calling subject can be of any type.