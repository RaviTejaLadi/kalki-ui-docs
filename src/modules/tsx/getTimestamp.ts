/**
 * Returns the current timestamp as an integer.
 * This function attempts to use `Date.now()` for a potentially faster way of getting the timestamp,
 * and falls back to `new Date().getTime()` if `Date.now()` is not available (in older environments).
 *
 * @returns The current timestamp as an integer (number of milliseconds since Unix epoch).
 *
 * @example
 * // Example 1: Getting the current timestamp
 * const timestamp = getTimestamp();
 * console.log(timestamp); // Example output: 1633036800000
 *
 * @example
 * // Example 2: Logging the timestamp at different times
 * setTimeout(() => {
 *   const timestamp2 = getTimestamp();
 *   console.log(timestamp2); // Example output: 1633036860000
 * }, 1000); // The timestamp after 1 second
 *
 * @example
 * // Example 3: Using timestamp for measuring time intervals
 * const start = getTimestamp();
 * setTimeout(() => {
 *   const end = getTimestamp();
 *   console.log(end - start); // Example output: Time difference in milliseconds (e.g., 1000)
 * }, 1000);
 *
 * @example
 * // Example 4: Comparing timestamps to check if a date has passed
 * const targetTimestamp = getTimestamp() + 5000; // 5 seconds from now
 * const currentTimestamp = getTimestamp();
 * console.log(currentTimestamp < targetTimestamp); // Example output: true (if checked before 5 seconds pass)
 *
 * @example
 * // Example 5: Using timestamp to create a unique ID
 * const uniqueID = `id-${getTimestamp()}`;
 * console.log(uniqueID); // Example output: "id-1633036900000"
 *
 * @example
 * // Example 6: Storing timestamps in an array
 * const timestamps = [];
 * for (let i = 0; i < 5; i++) {
 *   timestamps.push(getTimestamp());
 * }
 * console.log(timestamps); // Example output: Array of timestamps [1633036900000, ...]
 *
 * @example
 * // Example 7: Measuring elapsed time in an async function
 * async function measureAsyncTime() {
 *   const start = getTimestamp();
 *   await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
 *   const end = getTimestamp();
 *   console.log(`Elapsed time: ${end - start} ms`); // Example output: "Elapsed time: 2000 ms"
 * }
 * measureAsyncTime();
 *
 * @example
 * // Example 8: Using timestamp for caching with expiration
 * const cache = { data: 'some data', timestamp: getTimestamp() };
 * const cacheExpiry = 60000; // 1 minute
 * const isExpired = getTimestamp() - cache.timestamp > cacheExpiry;
 * console.log(isExpired); // Example output: false (if less than 1 minute has passed)
 *
 * @example
 * // Example 9: Using timestamp in logs
 * const logMessage = `${getTimestamp()} - User clicked button`;
 * console.log(logMessage); // Example output: "1633036920000 - User clicked button"
 *
 * @example
 * // Example 10: Creating a timestamp-based file name
 * const fileName = `file-${getTimestamp()}.txt`;
 * console.log(fileName); // Example output: "file-1633036940000.txt"
 */
export default Date.now ||
  function () {
    return new Date().getTime();
  };
