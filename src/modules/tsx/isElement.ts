/**
 * Checks if a given value is a DOM element.
 *
 * @param obj - The value to check.
 * @returns `true` if the value is a DOM element; otherwise, `false`.
 */
export default function isElement(obj: unknown): obj is Element {
  return !!(obj && (obj as Element).nodeType === 1);
}

// 10 Example Usages
const examples = () => {
  // Example 1: Checking an actual DOM element
  const divElement = document.createElement('div');
  console.log(isElement(divElement)); // Output: true

  // Example 2: Checking a text node
  const textNode = document.createTextNode('Hello');
  console.log(isElement(textNode)); // Output: false

  // Example 3: Checking null
  console.log(isElement(null)); // Output: false

  // Example 4: Checking undefined
  console.log(isElement(undefined)); // Output: false

  // Example 5: Checking a plain object
  console.log(isElement({ nodeType: 1 })); // Output: false

  // Example 6: Checking a string
  console.log(isElement('Not an element')); // Output: false

  // Example 7: Checking a number
  console.log(isElement(42)); // Output: false

  // Example 8: Checking a document object
  console.log(isElement(document)); // Output: false

  // Example 9: Checking a nested DOM element
  const spanElement = document.createElement('span');
  const parentDiv = document.createElement('div');
  parentDiv.appendChild(spanElement);
  console.log(isElement(parentDiv.firstChild)); // Output: true

  // Example 10: Using in a conditional
  const possibleElement = document.querySelector('#nonexistent');
  if (isElement(possibleElement)) {
    console.log('Found an element:', possibleElement.tagName);
  } else {
    console.log('No element found'); // Likely output if element doesn't exist
  }
};
examples();
