interface hookDocs {
  title: string;
  description: string;
  example: React.ReactNode;
  docs: {
    title: string;
    list: {
      item: string;
      options: string[];
    }[];
  }[];
}

export const useDebounceDocs: hookDocs = {
  title: 'useDebounce Hook',
  description:
    'The `useDebounce` hook delays updating the state value until after a specified delay, providing a way to limit the frequency of changes to a value. This is particularly useful in situations like user input, API calls, or window resizing where changes may be frequent and could otherwise lead to unnecessary updates.',
  example: (
    <pre>
      {`
          const [value, setValue] = useState('');
          const debouncedValue = useDebounce(value, 500);
  
          return (
            <input 
              type="text" 
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
            />
          );
        `}
    </pre>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Debounces value updates',
          options: [
            'Delays the state update to avoid frequent re-rendering.',
            'Ideal for expensive operations like API calls.',
            'Helps in handling high-frequency events like keypresses.',
          ],
        },
        {
          item: 'Customizable delay',
          options: [
            'The delay parameter is customizable, with the default set to 500ms.',
            'Allows adjusting how long the hook waits before updating the debounced value.',
            'Useful for fine-tuning responsiveness based on application needs.',
          ],
        },
        {
          item: 'Easy to use with hooks',
          options: [
            'Works seamlessly with functional components in React.',
            'Can be easily combined with other hooks like useState and useEffect.',
            'Provides a simple interface for debouncing values in React.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'Timer-based implementation',
          options: [
            'The hook uses a setTimeout to delay state update.',
            'Clears the previous timer when the value or delay changes.',
            'Ensures only the latest value is kept after the delay.',
          ],
        },
        {
          item: 'Dependence on value and delay',
          options: [
            'The hook depends on the `value` and `delay` props.',
            'Whenever the value or delay changes, the effect reruns.',
            'Allows dynamic control over the debounce timing.',
          ],
        },
        {
          item: 'Return debounced value',
          options: [
            'Returns the debounced value after the specified delay.',
            'Helps to avoid performance bottlenecks caused by frequent state changes.',
            'Useful for scenarios where updating state too often can lead to unnecessary renders.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Search Input with Debounce',
          options: [
            'Useful for searching through large datasets without triggering a request for every keystroke.',
            'Prevents rapid API calls as the user types.',
            'Improves performance and user experience.',
          ],
        },
        {
          item: 'Window Resize Handling',
          options: [
            'Can be used to delay handling resize events, avoiding rapid state updates.',
            'Helps to prevent unnecessary re-renders on window resize.',
            'Ideal for scenarios like responsive layouts.',
          ],
        },
        {
          item: 'Form Validation',
          options: [
            'Delays form validation as the user types to avoid real-time validation.',
            'Improves the UX by not showing error messages too frequently.',
            'Useful for forms with complex validation logic.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Set appropriate delay times',
          options: [
            'Choose a delay value that suits the responsiveness of your app.',
            'Too short a delay may lead to performance issues, while too long may feel unresponsive.',
            'Typically, 500ms to 1000ms is a good default for many use cases.',
          ],
        },
        {
          item: 'Use for performance-critical operations',
          options: [
            'Debounce expensive operations, like API requests, to improve performance.',
            'Helps to reduce unnecessary requests when handling user input.',
            'Recommended for search inputs, form validation, and infinite scrolling.',
          ],
        },
        {
          item: 'Avoid debouncing for critical UI updates',
          options: [
            'Do not debounce for updates that require immediate feedback, like animations or real-time data updates.',
            'Debouncing should be used for scenarios where you can tolerate slight delays.',
            'Helps balance performance with user experience.',
          ],
        },
      ],
    },
  ],
};
