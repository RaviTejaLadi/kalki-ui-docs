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
  
  export const useFirstRenderDocs: hookDocs = {
    title: 'useFirstRender',
    description:
      'The `useFirstRender` hook is a custom React hook designed to detect whether a component is being rendered for the first time. It uses a `useRef` to track the render status.',
    example: `
  import React, { useEffect } from 'react';
  import { useFirstRender } from './hooks';
  
  function MyComponent() {
    const isFirstRender = useFirstRender();
  
    useEffect(() => {
      if (isFirstRender) {
        console.log('This is the first render.');
      } else {
        console.log('This is not the first render.');
      }
    }, [isFirstRender]);
  
    return <div>Hello, World!</div>;
  }
  `,
    docs: [
      {
        title: 'Features',
        list: [
          {
            item: 'Detect First Render',
            options: [
              'Identifies if the current render is the initial render of the component.',
              'Prevents unnecessary actions during the first render.',
              'Easy integration into components that require first-render checks.'
            ],
          },
          {
            item: 'Lightweight and Efficient',
            options: [
              'Utilizes React’s `useRef` for minimal re-render impact.',
              'Does not rely on state updates to track render count.',
              'Optimized for performance in React functional components.'
            ],
          },
          {
            item: 'Reusable Hook',
            options: [
              'Can be used in multiple components without redundancy.',
              'Encourages cleaner and DRY code for detecting first renders.',
              'Supports better organization and modularity in React applications.'
            ],
          },
        ],
      },
      {
        title: 'Implementation Details',
        list: [
          {
            item: 'useRef Usage',
            options: [
              'The hook uses a `useRef` object to persist the render status across renders.',
              'The `useRef` object is initialized with `true` to indicate the first render.',
              'Subsequent renders update the value to `false`.'
            ],
          },
          {
            item: 'Conditional Logic',
            options: [
              'Checks the `useRef` value on every render.',
              'Returns `true` on the first render and `false` afterwards.',
              'Ensures accurate detection without causing re-renders.'
            ],
          },
          {
            item: 'Side Effect Free',
            options: [
              'The hook does not introduce side effects into the component.',
              'Only reads and updates a `useRef` value.',
              'Avoids triggering React’s render cycle unnecessarily.'
            ],
          },
        ],
      },
      {
        title: 'Example Use Cases',
        list: [
          {
            item: 'Initial Data Fetching',
            options: [
              'Fetch data only during the first render to prevent duplicate requests.',
              'Useful in scenarios like fetching configuration or user data.',
              'Avoids complex conditional logic in `useEffect`.'
            ],
          },
          {
            item: 'First Render Logging',
            options: [
              'Log messages or events only during the initial render.',
              'Debugging tools to track component mount events.',
              'Simplifies monitoring of lifecycle events.'
            ],
          },
          {
            item: 'Animation or UI Setup',
            options: [
              'Trigger animations or transitions only on first render.',
              'Helps in onboarding flows or initial UI setup.',
              'Prevents unwanted re-triggering of animations.'
            ],
          },
        ],
      },
      {
        title: 'Best Practices',
        list: [
          {
            item: 'Avoid Side Effects',
            options: [
              'Use the hook only for detecting render state, not for executing side effects.',
              'Combine with `useEffect` for side-effectful operations.',
              'Keeps the hook simple and focused.'
            ],
          },
          {
            item: 'Use Sparingly',
            options: [
              'Only use `useFirstRender` where detecting the first render is crucial.',
              'Avoid overusing the hook in every component.',
              'Ensures better readability and maintainability.'
            ],
          },
          {
            item: 'Combine with Other Hooks',
            options: [
              'Use alongside `useEffect` for conditional logic.',
              'Combine with context or state for advanced scenarios.',
              'Leverage it as part of a larger custom hook if needed.'
            ],
          },
        ],
      },
    ],
  };
  