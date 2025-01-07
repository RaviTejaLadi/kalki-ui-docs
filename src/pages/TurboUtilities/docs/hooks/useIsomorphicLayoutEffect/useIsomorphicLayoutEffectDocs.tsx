export const useIsomorphicLayoutEffectDocs = {
    title: 'useIsomorphicLayoutEffect Hook',
    description:
      'A utility hook that conditionally uses useLayoutEffect on the client side and useEffect on the server side to avoid warnings in server-side rendering environments.',
    example: (
      <pre>
        {`
  import { useState } from 'react';
  import { useIsomorphicLayoutEffect } from './hooks';
  
  function ExampleComponent() {
    const [value, setValue] = useState(0);
  
    useIsomorphicLayoutEffect(() => {
      console.log('Effect runs on the client or server appropriately');
      setValue((prev) => prev + 1);
    }, []);
  
    return <div>Value: {value}</div>;
  }
        `}
      </pre>
    ),
    docs: [
      {
        title: 'Features',
        list: [
          {
            item: 'Environment Awareness',
            options: [
              'Automatically detects whether the code is running on the server or client.',
              'Uses useLayoutEffect on the client for DOM updates.',
              'Falls back to useEffect on the server to prevent SSR warnings.'
            ]
          },
          {
            item: 'Prevent SSR Warnings',
            options: [
              'Helps avoid the warning "useLayoutEffect does nothing on the server".',
              'Ensures compatibility with server-side rendering frameworks.',
              'Safe to use in both SSR and client-side-only applications.'
            ]
          },
          {
            item: 'Seamless Integration',
            options: [
              'Can be easily swapped into existing components.',
              'Does not require changes to component logic.',
              'Transparent to users of the component.'
            ]
          }
        ]
      },
      {
        title: 'Implementation Details',
        list: [
          {
            item: 'Conditional Hook Selection',
            options: [
              'Determines the environment using typeof window.',
              'If window is defined, useLayoutEffect is chosen.',
              'If window is undefined, useEffect is chosen.'
            ]
          },
          {
            item: 'Code Simplicity',
            options: [
              'Implemented with a simple ternary condition.',
              'Small and lightweight code footprint.',
              'No external dependencies required.'
            ]
          },
          {
            item: 'Reusable Utility',
            options: [
              'Packaged as a standalone utility hook.',
              'Can be shared across multiple projects.',
              'Encourages best practices in handling effects.'
            ]
          }
        ]
      },
      {
        title: 'Example Use Cases',
        list: [
          {
            item: 'DOM Manipulations',
            options: [
              'Measuring element dimensions.',
              'Applying animations or transitions.',
              'Updating scroll positions.'
            ]
          },
          {
            item: 'Third-Party Library Integrations',
            options: [
              'Initializing external libraries that depend on the DOM.',
              'Configuring visualization libraries like D3.',
              'Setting up event listeners that require the DOM.'
            ]
          },
          {
            item: 'Component Initialization',
            options: [
              'Fetching initial data for rendering.',
              'Setting up timers or intervals.',
              'Reading or writing browser storage.'
            ]
          }
        ]
      },
      {
        title: 'Best Practices',
        list: [
          {
            item: 'Use Sparingly',
            options: [
              'Prefer useEffect when server-side rendering is not involved.',
              'Reserve for scenarios where DOM updates are essential.',
              'Avoid excessive reliance to maintain component readability.'
            ]
          },
          {
            item: 'Test Across Environments',
            options: [
              'Ensure functionality in both client and server environments.',
              'Simulate server-side rendering during testing.',
              'Verify no warnings or errors are logged during rendering.'
            ]
          },
          {
            item: 'Encapsulate Complex Logic',
            options: [
              'Wrap useIsomorphicLayoutEffect in custom hooks for reuse.',
              'Combine with other hooks for composability.',
              'Minimize direct usage in components for better abstraction.'
            ]
          }
        ]
      }
    ]
  };
  