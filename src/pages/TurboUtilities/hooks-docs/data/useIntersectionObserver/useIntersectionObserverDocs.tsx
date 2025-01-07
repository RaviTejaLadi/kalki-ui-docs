export const useIntersectionObserverDocs = {
  title: 'useIntersectionObserver Hook',
  description: `The useIntersectionObserver hook is a custom React hook for observing the visibility of an element using the Intersection Observer API. It simplifies the process of detecting when an element enters or exits the viewport, with optional support for animating once when the element becomes visible.`,
  example: (
    <div>
      <p>Example Usage:</p>
      <pre>
        {`
  import React from 'react';
  import { useIntersectionObserver } from './useIntersectionObserver';
  
  const MyComponent = () => {
    const { observeRef, isVisible } = useIntersectionObserver({
      animateOnce: true,
      options: { threshold: 0.5, rootMargin: '0px' },
    });
  
    return (
      <div ref={observeRef} style={{ height: '100px', backgroundColor: isVisible ? 'green' : 'red' }}>
        {isVisible ? 'Visible' : 'Not Visible'}
      </div>
    );
  };
          `}
      </pre>
    </div>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Visibility Detection',
          options: [
            'Detects when an element enters or exits the viewport.',
            'Supports multiple thresholds for precise visibility.',
            'Customizable root margin for fine control.',
          ],
        },
        {
          item: 'Optional Animations',
          options: [
            'Supports animating an element once upon becoming visible.',
            'Automatically disconnects observer for performance.',
            'Ideal for lazy loading or one-time animations.',
          ],
        },
        {
          item: 'Browser Compatibility',
          options: [
            'Warns if Intersection Observer is not supported.',
            'Fallback handling for unsupported environments.',
            'Relies on modern browser features.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'Ref Management',
          options: [
            'Utilizes useRef for element observation.',
            'Ensures safe cleanup of observers on component unmount.',
            'Prevents memory leaks by disconnecting observers.',
          ],
        },
        {
          item: 'State Management',
          options: [
            'Tracks visibility state with useState.',
            'Automatically updates when visibility changes.',
            'Accessible boolean state for easy integration.',
          ],
        },
        {
          item: 'Intersection Observer API',
          options: [
            'Supports native Intersection Observer options.',
            'Customizable threshold and root margin.',
            'Handles single and multiple threshold values.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Lazy Loading',
          options: [
            'Load images only when they enter the viewport.',
            'Reduce initial page load time.',
            'Optimize resource loading for better performance.',
          ],
        },
        {
          item: 'Animations',
          options: [
            'Trigger animations when elements become visible.',
            'Create engaging scroll-based animations.',
            'Ensure animations play only once if desired.',
          ],
        },
        {
          item: 'Analytics and Tracking',
          options: [
            'Track user engagement by observing specific elements.',
            'Measure visibility duration for in-depth analytics.',
            'Log visibility events for conversion tracking.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Optimize Performance',
          options: [
            'Disconnect observers when not needed.',
            'Minimize frequent updates by batching threshold changes.',
            'Use appropriate root margin for efficient observation.',
          ],
        },
        {
          item: 'Error Handling',
          options: [
            'Handle unsupported browsers gracefully.',
            'Provide fallback UI for better user experience.',
            'Warn developers when Intersection Observer is unavailable.',
          ],
        },
        {
          item: 'Integrate with Existing Code',
          options: [
            'Combine with other hooks for enhanced functionality.',
            'Use within context providers for shared visibility state.',
            'Ensure compatibility with server-side rendering.',
          ],
        },
      ],
    },
  ],
};
