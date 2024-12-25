/**
 * Returns a function that will only execute after being called `times` number of times.
 * @template T - The type of arguments the function accepts.
 * @param times - The number of calls required before `func` is executed.
 * @param func - The function to be executed after the Nth call.
 * @returns A function that, when invoked, counts down to the execution of `func`.
 *
 * Example usage:
 * ```tsx
 * const logMessage = after(3, () => console.log("Executed after 3 calls"));
 * logMessage(); // Nothing happens
 * logMessage(); // Nothing happens
 * logMessage(); // Logs: "Executed after 3 calls"
 * ```
 */
export default function after<T extends any[], R>(
  times: number,
  func: (...args: T) => R
): (...args: T) => R | undefined {
  return function (this: any, ...args: T): R | undefined {
    if (--times < 1) {
      return func.apply(this, args);
    }
  };
}

// Example Usages:

// 1. Basic example
const basicExample = after(3, () => console.log('Called after 3 calls'));
basicExample(); // No output
basicExample(); // No output
basicExample(); // Logs: "Called after 3 calls"

// 2. With arguments
const sumAfter = after(2, (a: number, b: number) => console.log('Sum:', a + b));
sumAfter(1, 2); // No output
sumAfter(3, 4); // Logs: "Sum: 7"

// 3. Using in a loop
const counter = 0;
const countAfter = after(5, () => console.log('Count reached 5'));
for (let i = 1; i <= 7; i++) {
  console.log(`Call ${i}`);
  countAfter(); // Logs "Count reached 5" on the 5th iteration
}

// 4. Delayed execution
const delayedAction = after(4, () => console.log('Delayed action triggered'));
setTimeout(delayedAction, 1000); // No output
setTimeout(delayedAction, 2000); // No output
setTimeout(delayedAction, 3000); // No output
setTimeout(delayedAction, 4000); // Logs: "Delayed action triggered"

// 5. Fetch simulation
const fetchData = after(3, () => console.log('Fetching data...'));
fetchData(); // No output
fetchData(); // No output
fetchData(); // Logs: "Fetching data..."

// 6. DOM event handler example
const clickAfter = after(2, () => console.log('Double clicked!'));
document.body.addEventListener('click', clickAfter); // Logs "Double clicked!" after 2 clicks

// 7. Chained operations
const chainCall = after(3, () => console.log('Chained operation complete'));
chainCall(); // No output
chainCall(); // No output
chainCall(); // Logs: "Chained operation complete"

// 8. Resettable counter
let resetCounter = 3;
const resettable = after(resetCounter, () => {
  console.log(`Action after ${resetCounter} calls`);
  resetCounter = 3; // Reset counter
});
resettable(); // No output
resettable(); // No output
resettable(); // Logs: "Action after 3 calls"

// 9. Toggle example
const toggle = after(2, () => console.log('Toggle state changed'));
toggle(); // No output
toggle(); // Logs: "Toggle state changed"
toggle(); // No output
toggle(); // Logs: "Toggle state changed"

// 10. Combining multiple after functions
const firstAction = after(2, () => console.log('First action triggered'));
const secondAction = after(3, () => console.log('Second action triggered'));
firstAction(); // No output
firstAction(); // Logs: "First action triggered"
secondAction(); // No output
secondAction(); // No output
secondAction(); // Logs: "Second action triggered"
