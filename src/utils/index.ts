import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that merges class names using twMerge and clsx
 * @param inputs - Array of class values to be merged
 * @returns A string containing the merged class names
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
