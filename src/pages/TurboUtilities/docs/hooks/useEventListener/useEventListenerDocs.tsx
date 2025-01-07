export const useEventListenerDocs: hookDocs = {
  title: 'useEventListener Hook',
  description:
    'A React hook for attaching and managing event listeners on DOM elements or the window object with ease and reactivity.',
  example: (
    <pre>
      {`import React, { useState, useRef } from 'react';
  import { useEventListener } from './useEventListener';
  
  function ExampleComponent() {
    const [key, setKey] = useState('');
    const divRef = useRef(null);
  
    // Example: Listening for a keypress event
    useEventListener('keydown', (e) => setKey(e.key));
  
    // Example: Listening for a click event on a specific element
    useEventListener('click', (e) => console.log('Div clicked!'), divRef);
  
    return (
      <div ref={divRef}>
        <p>Last key pressed: {key}</p>
        <p>Click inside this div to log a message.</p>
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
          item: 'Flexible Targeting',
          options: [
            'Can attach listeners to the window object by default.',
            'Supports targeting specific elements using React refs.',
            'Handles dynamic changes to the target element.',
          ],
        },
        {
          item: 'Reactivity',
          options: [
            'Automatically updates the handler when it changes.',
            'Uses `useIsomorphicLayoutEffect` for SSR compatibility.',
            'Ensures the latest handler is always used.',
          ],
        },
        {
          item: 'Cleanup',
          options: [
            'Automatically removes event listeners on component unmount.',
            'Prevents memory leaks by managing listeners efficiently.',
            'Ensures consistent cleanup behavior.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'useRef for Handler',
          options: [
            'Stores the handler in a `useRef` to avoid re-adding listeners.',
            'Prevents unnecessary re-renders caused by re-creating the listener.',
            'Ensures the most recent handler is used.',
          ],
        },
        {
          item: 'useIsomorphicLayoutEffect',
          options: [
            'Handles updates safely in both client and server environments.',
            'Ensures DOM updates are synchronized before paint.',
            'Reacts to changes in the handler efficiently.',
          ],
        },
        {
          item: 'Event Listener Management',
          options: [
            'Adds listeners using `addEventListener`.',
            'Removes listeners using `removeEventListener`.',
            'Accounts for missing or non-event-listening targets.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Keyboard Interaction',
          options: [
            'Listen for global keyboard shortcuts.',
            'Capture specific keypress events for custom logic.',
            'Track navigation using arrow keys in a carousel.',
          ],
        },
        {
          item: 'Mouse and Touch Events',
          options: [
            'Handle click events on specific DOM nodes.',
            'Implement drag-and-drop functionality with mouse/touch events.',
            'Track mouse movement or hover states dynamically.',
          ],
        },
        {
          item: 'Window and Document Events',
          options: [
            'React to window resize or scroll events.',
            'Handle focus or blur events at the document level.',
            'Track custom global events dispatched on the window object.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Efficient Usage',
          options: [
            'Use refs for targeting elements to ensure stability.',
            'Keep handler functions lightweight to avoid performance bottlenecks.',
            'Avoid attaching listeners to multiple high-frequency events unnecessarily.',
          ],
        },
        {
          item: 'Handler Management',
          options: [
            'Always use stable handlers to avoid re-creating listeners.',
            'Avoid inline functions as handlers directly in the hook.',
            'Debounce or throttle event callbacks for performance optimization.',
          ],
        },
        {
          item: 'Debugging',
          options: [
            'Test events in different environments (e.g., SSR, CSR).',
            'Log target elements to verify listener attachment.',
            'Handle cases where the target element might not exist.',
          ],
        },
      ],
    },
  ],
};
