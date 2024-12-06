/**
 * Generates a UUID (Universally Unique Identifier) following the version 4 standard.
 *
 * @returns A string representing a UUID.
 */
export default function generateUUID(): string {
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string): string =>
    (parseInt(c, 10) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c, 10) / 4)))).toString(16)
  );
}

// Example Usage
const examples = () => {
  console.log('UUID Example 1:', generateUUID());
  console.log('UUID Example 2:', generateUUID());
  console.log('UUID Example 3:', generateUUID());
};
examples();
