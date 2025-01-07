import React from 'react';

/**
 * Documentation for the useInterval custom hook
 */
export const useIntervalDocs = {
  title: 'useInterval Hook',
  description: 'A React custom hook to manage intervals with start and stop capabilities.',
  example: (
    <pre>
      {`// Example Usage
import { useInterval } from './hooks/useInterval';

function Counter() {
  const [count, setCount] = useState(0);

  const { start, stop } = useInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => start(1000)}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}`}
    </pre>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Dynamic Interval Management',
          options: [
            'Easily start and stop intervals.',
            'Allows dynamic changes to the interval duration.',
            'Supports null to completely disable the interval.'
          ],
        },
        {
          item: 'Performance Optimization',
          options: [
            'Uses useRef to persist callback reference.',
            'Avoids unnecessary re-renders.',
            'Efficient memory cleanup on component unmount.'
          ],
        },
        {
          item: 'Error Handling',
          options: [
            'Throws descriptive errors for invalid parameters.',
            'Ensures callback and initialDelay types are checked.',
            'Prevents runtime issues with type validation.'
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'Callback Persistence',
          options: [
            'The callback function is stored using useRef.',
            'Ensures the latest version of the callback is always used.',
            'Prevents issues with stale closures.'
          ],
        },
        {
          item: 'State Management',
          options: [
            'Uses useState to manage interval delay dynamically.',
            'Allows controlling interval activation and deactivation.',
            'Supports reinitializing with a new delay.'
          ],
        },
        {
          item: 'Interval Cleanup',
          options: [
            'Cleans up intervals on component unmount.',
            'Prevents memory leaks with proper clearInterval calls.',
            'Ensures predictable behavior when the delay changes.'
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Real-Time Updates',
          options: [
            'Automatically refresh data at regular intervals.',
            'Create live clocks or timers.',
            'Sync real-time UI components like stock tickers.'
          ],
        },
        {
          item: 'Game Loops',
          options: [
            'Manage frame updates for simple browser games.',
            'Schedule periodic actions in game logic.',
            'Control game mechanics with adjustable intervals.'
          ],
        },
        {
          item: 'Polling APIs',
          options: [
            'Poll APIs for new data at defined intervals.',
            'Automatically update dashboard data.',
            'Implement retry mechanisms for failed API calls.'
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Keep Callbacks Pure',
          options: [
            'Ensure callbacks do not depend on changing props or state directly.',
            'Use functional updates to access the latest state values.',
            'Avoid side effects directly inside the callback.'
          ],
        },
        {
          item: 'Use Appropriate Delay',
          options: [
            'Set intervals based on application performance requirements.',
            'Avoid very short delays to prevent performance bottlenecks.',
            'Use null to disable intervals when not needed.'
          ],
        },
        {
          item: 'Handle Component Unmount',
          options: [
            'Always clean up intervals when the component unmounts.',
            'Use the stop function to prevent memory leaks.',
            'Test edge cases for predictable interval behavior.'
          ],
        },
      ],
    },
  ],
};
