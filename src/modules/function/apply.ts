import { applyWithContext } from './applyWithContext';
import { applyNoContext } from './applyNoContext';

/**
 * # Apply
 *
 * turbo version of `Function::apply()`, optimized for 8 arguments or fewer.
 *
 * @param  subject   The function to apply.
 * @param  thisContext The context for the function, set to undefined or null if no context is required.
 * @param  args       The arguments for the function.
 * @return The result of the function invocation.
 */
export function turboApply<T extends (...args: any[]) => any>(
  subject: T,
  thisContext: any,
  args: Parameters<T>
): ReturnType<T> {
  return thisContext !== undefined ? applyWithContext(subject, thisContext, args) : applyNoContext(subject, args);
}
