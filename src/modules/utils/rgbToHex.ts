export const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (c: number): string => c.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
