Here’s a comparison between your custom `turboValues` function and the native JavaScript `Object.values` function, using five usage examples with consideration of execution time.

### 1. **Basic Object**
#### Example 1: Using `turboValues` and `Object.values`

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Using turboValues
console.time('turboValues');
const turboVals = turboValues(obj);
console.timeEnd('turboValues');
console.log(turboVals); // Output: [1, 2, 3]

// Using Object.values
console.time('Object.values');
const nativeVals = Object.values(obj);
console.timeEnd('Object.values');
console.log(nativeVals); // Output: [1, 2, 3]
```

### 2. **Object with Mixed Data Types**
#### Example 2: Using `turboValues` and `Object.values`

```javascript
const mixedObj = { name: "Alice", age: 30, isActive: true };

// Using turboValues
console.time('turboValues');
const turboVals2 = turboValues(mixedObj);
console.timeEnd('turboValues');
console.log(turboVals2); // Output: ["Alice", 30, true]

// Using Object.values
console.time('Object.values');
const nativeVals2 = Object.values(mixedObj);
console.timeEnd('Object.values');
console.log(nativeVals2); // Output: ["Alice", 30, true]
```

### 3. **Object with Nested Objects**
#### Example 3: Using `turboValues` and `Object.values`

```javascript
const nestedObj = { user: { name: "Bob", age: 25 }, active: true };

// Using turboValues
console.time('turboValues');
const turboVals3 = turboValues(nestedObj);
console.timeEnd('turboValues');
console.log(turboVals3); // Output: [{ name: "Bob", age: 25 }, true]

// Using Object.values
console.time('Object.values');
const nativeVals3 = Object.values(nestedObj);
console.timeEnd('Object.values');
console.log(nativeVals3); // Output: [{ name: "Bob", age: 25 }, true]
```

### 4. **Empty Object**
#### Example 4: Using `turboValues` and `Object.values`

```javascript
const emptyObj = {};

// Using turboValues
console.time('turboValues');
const turboVals4 = turboValues(emptyObj);
console.timeEnd('turboValues');
console.log(turboVals4); // Output: []

// Using Object.values
console.time('Object.values');
const nativeVals4 = Object.values(emptyObj);
console.timeEnd('Object.values');
console.log(nativeVals4); // Output: []
```

### 5. **Large Object with Many Properties**
#### Example 5: Using `turboValues` and `Object.values`

```javascript
const largeObj = {};
for (let i = 0; i < 100000; i++) {
  largeObj[`key${i}`] = i;
}

// Using turboValues
console.time('turboValues');
const turboVals5 = turboValues(largeObj);
console.timeEnd('turboValues');

// Using Object.values
console.time('Object.values');
const nativeVals5 = Object.values(largeObj);
console.timeEnd('Object.values');
```

### **Comparison of Execution Time:**
- **`turboValues`:** Your custom function is less optimized compared to `Object.values`, as it uses `Object.keys` and manual iteration to extract values. This adds some overhead.
- **`Object.values`:** This is a native method implemented in the JavaScript engine, which is highly optimized for performance, and it directly returns the values of the object.

### Performance Testing:
- **Small objects** will show similar performance for both functions, but for **large objects**, `Object.values` will generally be faster because it’s implemented natively in the JavaScript engine.
- **Memory usage** might also be more efficient for `Object.values` since it doesn’t perform the extra key collection step.

In summary, while `turboValues` works correctly, `Object.values` is the preferred method for performance, especially when dealing with larger objects.