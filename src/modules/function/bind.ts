import { applyWithContext } from './applyWithContext';
import { applyNoContext } from './applyNoContext';

/**
 * # Bind
 * Analogue of `Function::bind()`.
 *
 * ```ts
 * const bound = bind(myfunc, this, 1, 2, 3);
 *
 * bound(4);
 * ```
 *
 * This function mimics `Function::bind()`, allowing you to pre-bind 
 * a function with a specific `this` context and additional arguments.
 *
 * @param fn The function to bind.
 * @param thisContext The context (`this`) to bind the function to.
 * @param args Additional arguments to pre-bind.
 * @returns A new function that, when called, applies the original function
 *          with the pre-bound arguments and context.
 */
export function turboBind<T extends (...args: any[]) => any>(fn: T, thisContext?: any, ...args: Parameters<T>): (...args: Parameters<T>) => ReturnType<T> {
  const boundLength = args.length;
  let boundArgs: any[];

  if (boundLength > 0) {
    boundArgs = new Array(boundLength);
    for (let i = 0; i < boundLength; i++) {
      boundArgs[i] = args[i];
    }

    if (thisContext !== undefined) {
      return function (...restArgs: any[]) {
        const totalArgs = [...boundArgs, ...restArgs];
        return applyWithContext(fn, thisContext, totalArgs);
      };
    } else {
      return function (...restArgs: any[]) {
        const totalArgs = [...boundArgs, ...restArgs];
        return applyNoContext(fn, totalArgs);
      };
    }
  }

  if (thisContext !== undefined) {
    return function (...restArgs: any[]) {
      return applyWithContext(fn, thisContext, restArgs);
    };
  } else {
    return function (...restArgs: any[]) {
      return applyNoContext(fn, restArgs);
    };
  }
}
