import { hasOwnProperty } from './_setup';

// Internal function to check whether `key` is an own property name of `obj`.
export default function has(obj: Record<string, any> | null, key: string): boolean {
  // Check if the object is not null and if it contains the own property `key`
  return obj != null && hasOwnProperty.call(obj, key);
}

// Example 1: Checking if an object has a specific property
const obj1 = { name: 'John', age: 30 };
console.log(has(obj1, 'name')); // true
console.log(has(obj1, 'address')); // false

// Example 2: Handling `null` values
const obj2 = null;
console.log(has(obj2, 'name')); // false

// Example 3: Checking for inherited properties
const obj3 = Object.create({ inheritedProp: 'inherited' });
console.log(has(obj3, 'inheritedProp')); // false, inherited properties are not checked

// Example 4: Checking nested object properties
const obj4 = { person: { name: 'Alice', age: 25 } };
console.log(has(obj4, 'person')); // true
console.log(has(obj4.person, 'name')); // true
console.log(has(obj4.person, 'address')); // false

// Example 5: Checking an empty object
const obj5 = {};
console.log(has(obj5, 'name')); // false

// Example 6: Using the function in a condition
const obj6 = { isActive: true };
if (has(obj6, 'isActive')) {
  console.log('User is active'); // Output: User is active
}

// Example 8: Handling objects with getter properties
const obj8 = {
  get name() {
    return 'Bob';
  },
};
console.log(has(obj8, 'name')); // true

// Example 9: Checking for function properties
const obj9 = {
  greet() {
    return 'Hello!';
  },
};
console.log(has(obj9, 'greet')); // true
console.log(has(obj9, 'name')); // false

// Example 10: Checking for array indexes
const obj10 = ['a', 'b', 'c'];
console.log(has(obj10, '0')); // true
console.log(has(obj10, 'length')); // true
console.log(has(obj10, '3')); // false, as index 3 doesn't exist
