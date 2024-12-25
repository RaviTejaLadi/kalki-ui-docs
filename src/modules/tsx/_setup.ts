// Save bytes in the minified (but not gzipped) version:
export const ArrayProto = Array.prototype;
export const ObjProto = Object.prototype;
export const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
export const push = ArrayProto.push;
export const slice = ArrayProto.slice;
export const toString = ObjProto.toString;
export const hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
export const supportsArrayBuffer = typeof ArrayBuffer !== 'undefined';
export const supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
export const nativeIsArray = Array.isArray;
export const nativeKeys = Object.keys;
export const nativeCreate = Object.create;
export const nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
export const _isNaN = isNaN;
export const _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
export const hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
export const nonEnumerableProps: string[] = [
  'valueOf',
  'isPrototypeOf',
  'toString',
  'propertyIsEnumerable',
  'hasOwnProperty',
  'toLocaleString',
];

// The largest integer that can be represented exactly.
export const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
