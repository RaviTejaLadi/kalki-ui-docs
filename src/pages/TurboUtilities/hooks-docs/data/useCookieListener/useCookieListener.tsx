import React from 'react';

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

export const useCookieListenerDocs: hookDocs = {
  title: 'useCookieListener Hook',
  description:
    'The `useCookieListener` hook is used to listen for changes in specific cookies and trigger a callback function when any of the cookie values change.',
  example: (
    <pre>
      {`import { useCookieListener } from './hooks/useCookieListener';
  
  const MyComponent = () => {
    const handleCookieChange = (newValue, cookieName) => {
      console.log(\`Cookie \${cookieName} changed to: \${newValue}\`);
    };
  
    useCookieListener(handleCookieChange, ['user', 'theme']);
  
    return <div>Check the console for cookie changes.</div>;
  };`}
    </pre>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Automatic Cookie Change Detection',
          options: [
            'Detects when specific cookies change and triggers the provided effect callback.',
            'Checks for changes in cookies every second to ensure the latest values.',
            'Ideal for tracking and responding to cookie changes in real time.',
          ],
        },
        {
          item: 'Supports Multiple Cookies',
          options: [
            'Allows listening to changes in multiple cookies simultaneously.',
            'Cookie names can be passed as an array.',
            'Handles multiple cookies effectively with minimal configuration.',
          ],
        },
        {
          item: 'Flexible Callback Function',
          options: [
            'The callback function provides both the new value and the cookie name.',
            'Customizable behavior based on cookie value changes.',
            'Effect function can be used for a variety of actions like re-rendering components, logging, or updating app state.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'useRef for Storing Cookie Values',
          options: [
            'Stores initial cookie values in a `useRef` to avoid unnecessary re-renders.',
            '`cookieValues.current` holds the latest known values of the cookies.',
            'Effect only triggers when a cookie value changes, preventing redundant function calls.',
          ],
        },
        {
          item: 'Polling with setInterval',
          options: [
            'The hook uses `setInterval` to check cookie values every second.',
            'This ensures that changes are detected even if the browser or app does not trigger an immediate update.',
            'Be mindful of the interval duration for performance considerations.',
          ],
        },
        {
          item: 'Clearing the Interval',
          options: [
            'The interval is cleared on component unmount to prevent memory leaks.',
            'Cleanup is done by the `return` function inside `useEffect`.',
            'This avoids any unnecessary background operations once the component is unmounted.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'User Authentication Tracking',
          options: [
            'Monitor changes to authentication cookies (like `auth_token`) to trigger user logout or refresh session.',
            'Useful in applications where session expiration or user re-authentication can occur dynamically.',
            'Can also be used to sync authentication state across different parts of the app.',
          ],
        },
        {
          item: 'Theme or Settings Persistence',
          options: [
            'Listen for changes to theme or settings cookies (like `theme` or `language`) to dynamically apply preferences.',
            'Provides an efficient way to update UI elements based on user preferences saved in cookies.',
            'Useful in applications where the user’s theme or locale preferences need to be synced across sessions.',
          ],
        },
        {
          item: 'Tracking Cookie Changes for Analytics',
          options: [
            'Monitor changes in tracking or analytics cookies to update metrics or trigger specific actions.',
            'Can be used to dynamically capture changes in user behavior or preferences.',
            'Ideal for applications that rely heavily on cookies for tracking analytics data.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Use with Caution on Performance-Intensive Pages',
          options: [
            'Avoid using this hook on pages where cookie changes need to be detected frequently to avoid performance issues.',
            'Consider using a longer interval or event-based listeners for better performance on large apps.',
            'Poll only the cookies that are essential to track to optimize performance.',
          ],
        },
        {
          item: 'Cleanup Interval on Component Unmount',
          options: [
            'Always ensure that the interval is cleared when the component using the hook is unmounted to prevent memory leaks.',
            'The `useEffect` cleanup function handles this, so always return the cleanup function.',
            'This ensures that no unnecessary background processes remain active after the component is removed.',
          ],
        },
        {
          item: 'Limit Polling Frequency for Optimization',
          options: [
            'Avoid setting the interval to too short, as frequent checks can negatively impact performance.',
            'For use cases with frequent cookie updates, consider using a custom event listener or other mechanisms.',
            'Polling every second may be too frequent for some use cases—adjust based on the needs of your app.',
          ],
        },
      ],
    },
  ],
};
