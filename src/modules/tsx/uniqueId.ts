/**
 * Generates a unique integer id that is unique within the entire client session.
 * This function is useful for creating temporary DOM IDs or for other cases
 * where you need a unique identifier that doesn't conflict with others.
 *
 * @param prefix - An optional string to prepend to the generated id.
 * @returns A unique string ID, optionally prefixed with the given string.
 *
 * @example
 * // Example 1: Generate a unique ID without a prefix
 * const id1 = uniqueId();
 * console.log(id1); // Output: "1"
 *
 * @example
 * // Example 2: Generate a unique ID with a prefix
 * const id2 = uniqueId('item-');
 * console.log(id2); // Output: "item-2"
 *
 * @example
 * // Example 3: Generate a unique ID multiple times
 * const id3 = uniqueId('user-');
 * const id4 = uniqueId('user-');
 * console.log(id3); // Output: "user-3"
 * console.log(id4); // Output: "user-4"
 *
 * @example
 * // Example 4: Using uniqueId for generating DOM IDs dynamically
 * const buttonId = uniqueId('btn-');
 * const inputId = uniqueId('input-');
 * console.log(buttonId); // Output: "btn-5"
 * console.log(inputId); // Output: "input-6"
 *
 * @example
 * // Example 5: Using uniqueId with a prefix to create unique form field IDs
 * const formId = uniqueId('form-');
 * const fieldId = uniqueId('field-');
 * console.log(formId); // Output: "form-7"
 * console.log(fieldId); // Output: "field-8"
 *
 * @example
 * // Example 6: Generating unique IDs for temporary objects in an application
 * const tempId1 = uniqueId('temp-');
 * const tempId2 = uniqueId('temp-');
 * console.log(tempId1); // Output: "temp-9"
 * console.log(tempId2); // Output: "temp-10"
 *
 * @example
 * // Example 7: Using uniqueId in a loop for generating multiple unique IDs
 * const ids = [];
 * for (let i = 0; i < 3; i++) {
 *   ids.push(uniqueId('loop-'));
 * }
 * console.log(ids); // Output: ["loop-11", "loop-12", "loop-13"]
 *
 * @example
 * // Example 8: Using uniqueId for dynamically generated element IDs
 * const cardId = uniqueId('card-');
 * const headerId = uniqueId('header-');
 * console.log(cardId); // Output: "card-14"
 * console.log(headerId); // Output: "header-15"
 *
 * @example
 * // Example 9: Using uniqueId for unique identifiers in a collection
 * const collection = [{ id: uniqueId() }, { id: uniqueId() }];
 * console.log(collection); // Output: [{ id: "16" }, { id: "17" }]
 *
 * @example
 * // Example 10: Generate unique IDs with different prefixes for different contexts
 * const modalId = uniqueId('modal-');
 * const navItemId = uniqueId('nav-');
 * console.log(modalId); // Output: "modal-18"
 * console.log(navItemId); // Output: "nav-19"
 */
let idCounter = 0;

export default function uniqueId(prefix?: string): string {
  const id = (++idCounter).toString();
  return prefix ? prefix + id : id;
}
