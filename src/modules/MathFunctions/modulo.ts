/**
 * Calculates the remainder of division
 * @param a Dividend
 * @param b Divisor
 * @returns The remainder
 * @throws {Error} When dividing by zero
 */

export function modulo(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}
