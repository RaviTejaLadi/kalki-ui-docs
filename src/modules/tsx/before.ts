/**
 * Returns a function that will only execute up to (but not including) the Nth call.
 * @template T - The type of arguments the function accepts.
 * @param times - The number of calls allowed before `func` is no longer executed.
 * @param func - The function to be executed up to `times - 1` calls.
 * @returns A function that, when invoked, executes `func` and remembers the result of the last execution.
 * 
 * Example usage:
 * ```tsx
 * const logMessage = before(3, () => console.log("Executed"));
 * logMessage(); // Logs: "Executed"
 * logMessage(); // Logs: "Executed"
 * logMessage(); // No output
 * ```
 */
export default function before<T extends any[], R>(
    times: number,
    func: (...args: T) => R
  ): (...args: T) => R | undefined {
    let memo: R | undefined;
    return function (this: any, ...args: T): R | undefined {
      if (--times > 0) {
        memo = func.apply(this, args);
      }
      if (times <= 1) {
        func = null as any; // Prevents further execution
      }
      return memo;
    };
  }
  
  // Example Usages:
  
  // 1. Basic example
  const basicExample = before(3, () => console.log("Called"));
  basicExample(); // Logs: "Called"
  basicExample(); // Logs: "Called"
  basicExample(); // No output
  
  // 2. With arguments
  const productBefore = before(3, (a: number, b: number) => {
    const result = a * b;
    console.log("Product:", result);
    return result;
  });
  productBefore(2, 3); // Logs: "Product: 6"
  productBefore(4, 5); // Logs: "Product: 20"
  productBefore(6, 7); // No output
  
  // 3. Storing last execution result
  const storeResult = before(4, () => Math.random());
  console.log(storeResult()); // Outputs a random number
  console.log(storeResult()); // Outputs the same number
  console.log(storeResult()); // Outputs the same number
  console.log(storeResult()); // No output
  
  // 4. Restricting event handler
  const clickHandler = before(2, () => console.log("Button clicked"));
  document.body.addEventListener("click", clickHandler); // Logs "Button clicked" only on the first click
  
  // 5. Countdown example
  let countdown = 3;
  const countdownAction = before(4, () => console.log(`Action at countdown: ${--countdown}`));
  countdownAction(); // Logs: "Action at countdown: 2"
  countdownAction(); // Logs: "Action at countdown: 1"
  countdownAction(); // Logs: "Action at countdown: 0"
  countdownAction(); // No output
  
  // 6. Conditional logic
  const conditionalExample = before(3, () => console.log("This will run twice"));
  conditionalExample(); // Logs: "This will run twice"
  conditionalExample(); // Logs: "This will run twice"
  conditionalExample(); // No output
  
  // 7. Avoiding repeated calls in setup
  const setupOnce = before(2, () => console.log("Setup executed"));
  setupOnce(); // Logs: "Setup executed"
  setupOnce(); // No output
  
  // 8. Wrapping an expensive computation
  const expensiveComputation = before(4, (x: number) => {
    const result = x * x;
    console.log(`Computed square: ${result}`);
    return result;
  });
  expensiveComputation(5); // Logs: "Computed square: 25"
  expensiveComputation(6); // Logs: "Computed square: 36"
  expensiveComputation(7); // Logs: "Computed square: 49"
  expensiveComputation(8); // No output
  
  // 9. Limited API requests simulation
  const apiRequest = before(3, () => console.log("API Request executed"));
  apiRequest(); // Logs: "API Request executed"
  apiRequest(); // Logs: "API Request executed"
  apiRequest(); // No output
  
  // 10. Use case for animations
  const animateBefore = before(3, () => console.log("Animation frame executed"));
  animateBefore(); // Logs: "Animation frame executed"
  animateBefore(); // Logs: "Animation frame executed"
  animateBefore(); // No output
  