'use strict';
/**
 * Object.keys() shim for ES3 environments.
 *
 * @param  {T extends object} obj The object to get keys for.
 * @return {string[]} The array of keys.
 *
 * @template T - The type of the input object.
 */
export const turboKeys =
  typeof Object.keys === 'function'
    ? Object.keys
    : function turboKeys<T extends object>(obj: T): string[] {
        // Fast path for null/undefined
        if (obj == null) return [];

        // Direct low-level property enumeration
        const keys: string[] = [];

        // Highly optimized key extraction
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Fastest possible array push alternative
            keys[keys.length] = key;
          }
        }

        return keys;
      };
