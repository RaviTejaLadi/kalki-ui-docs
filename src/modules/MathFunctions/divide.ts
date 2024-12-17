/**
 * Divides two numbers
 * @param a Dividend
 * @param b Divisor
 * @returns The quotient of a and b
 * @throws {Error} When dividing by zero
 */

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
