import { hookDocs } from '../types';

export const useClickOutsideDocs: hookDocs = {
  title: 'useClickOutside Hook',
  description:
    'The `useClickOutside` hook allows you to detect clicks outside a specific element and trigger a handler function.',
  example: (
    <div>
      <p>Example Usage:</p>
      <pre>
        {`
import React, { useRef } from 'react';
import { useClickOutside } from './useClickOutside';

function Dropdown() {
  const dropdownRef = useRef(null);
  const handleClose = () => alert('Clicked outside!');

  useClickOutside(dropdownRef, handleClose);

  return (
    <div ref={dropdownRef}>
      <p>Click outside this box to trigger the alert.</p>
    </div>
  );
}
        `}
      </pre>
    </div>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Event-Based Detection',
          options: [
            'Supports custom events like `mousedown` or `touchstart`.',
            'Efficient event listener management.',
            'Works seamlessly with React refs.',
          ],
        },
        {
          item: 'Reusability',
          options: [
            'Can be used across multiple components.',
            'Minimizes redundant event-handling code.',
            'Lightweight and easy to integrate.',
          ],
        },
        {
          item: 'Versatility',
          options: [
            'Works with various types of DOM elements.',
            'Customizable event types.',
            'Error-proof when no ref is provided.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'React Ref Usage',
          options: [
            'Uses React refs to track the target element.',
            'Ensures proper scope isolation for event handling.',
            'Compatible with any element rendered in React.',
          ],
        },
        {
          item: 'Event Handling',
          options: [
            'Attaches a single event listener to the document.',
            'Checks if the event target is outside the ref element.',
            'Executes the provided handler function efficiently.',
          ],
        },
        {
          item: 'Hook Integration',
          options: [
            'Relies on the `useEventListener` hook for clean implementation.',
            'Avoids memory leaks with proper cleanup.',
            'Supports dynamic updates to the event type.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Dropdown Menus',
          options: [
            'Close dropdowns when clicking outside.',
            'Prevent accidental interactions with background elements.',
            'Enhance UI/UX for menus and modals.',
          ],
        },
        {
          item: 'Modal Dialogs',
          options: [
            'Detect clicks outside the modal to close it.',
            'Improve accessibility by maintaining focus.',
            'Works well with dynamic modal generation.',
          ],
        },
        {
          item: 'Tooltips and Popovers',
          options: [
            'Close tooltips or popovers on outside clicks.',
            'Enhance usability for hover-triggered components.',
            'Avoid overlapping or sticky tooltips.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Ref Management',
          options: [
            'Ensure the ref is correctly assigned to the element.',
            'Always check for null or undefined refs.',
            'Avoid using multiple refs for the same target element.',
          ],
        },
        {
          item: 'Event Optimization',
          options: [
            'Choose the appropriate event type for your use case.',
            'Minimize unnecessary event handler executions.',
            'Clean up event listeners during unmounting.',
          ],
        },
        {
          item: 'Handler Design',
          options: [
            'Ensure the handler function is memoized if necessary.',
            'Avoid side effects directly within the handler.',
            'Handle edge cases like null elements gracefully.',
          ],
        },
      ],
    },
  ],
};
