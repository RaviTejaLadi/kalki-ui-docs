/**
 * Converts a hex color code to an RGB object.
 *
 * @param hex - The hex color code string (e.g., "#FFFFFF").
 * @returns An object with the properties `r`, `g`, and `b` representing the red, green, and blue components of the color.
 *
 * @example
 * ```typescript
 * const rgb1 = hexToRgb("#FFFFFF");
 * console.log(rgb1); // { r: 255, g: 255, b: 255 }
 *
 * const rgb2 = hexToRgb("#000000");
 * console.log(rgb2); // { r: 0, g: 0, b: 0 }
 *
 * const rgb3 = hexToRgb("#FF5733");
 * console.log(rgb3); // { r: 255, g: 87, b: 51 }
 *
 * const rgb4 = hexToRgb("#00FF00");
 * console.log(rgb4); // { r: 0, g: 255, b: 0 }
 *
 * const rgb5 = hexToRgb("#123456");
 * console.log(rgb5); // { r: 18, g: 52, b: 86 }
 * ```
 */
export const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};
