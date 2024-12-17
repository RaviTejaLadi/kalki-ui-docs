import { useState } from "react";

/**
 * Custom hook to manage state with localStorage.
 *
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initialValue - The initial value to use if there is no value in localStorage.
 * @returns {[T, (value: T | ((val: T) => T)) => void]} - A stateful value, and a function to update it.
 *
 * @example
 * const [name, setName] = useLocalStorage<string>('name', 'Bob');
 * setName('Alice');
 */
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      if (!item) window.localStorage.setItem(key, JSON.stringify(initialValue));
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
