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

export const useCookieDocs: hookDocs = {
  title: 'useCookie Hook Documentation',
  description:
    'The `useCookie` hook is a custom React hook that provides an easy interface for interacting with cookies. It allows you to read, set, and delete cookies with automatic synchronization with the state. It also supports the expiration of cookies and listens for changes in the cookie value.',
  example: (
    <div>
      <h3>Example Usage of `useCookie` Hook</h3>
      <pre>{`
  import { useCookie } from './hooks/useCookie';
  
  const MyComponent = () => {
    const [cookieValue, setCookieValue, deleteCookieValue] = useCookie('myCookie', 'initialValue');
  
    const handleChange = () => {
      setCookieValue('newValue');
    };
  
    return (
      <div>
        <p>Current Cookie Value: {cookieValue}</p>
        <button onClick={handleChange}>Change Cookie</button>
        <button onClick={deleteCookieValue}>Delete Cookie</button>
      </div>
    );
  };
  `}</pre>
    </div>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Automatic Cookie Management',
          options: [
            'Automatically sets the cookie with the provided value if it doesn’t already exist.',
            'Automatically updates the cookie when the state changes.',
            'Handles expiration of cookies by default (set to 365 days).',
          ],
        },
        {
          item: 'Sync with State',
          options: [
            'The cookie value is synchronized with the component state.',
            'Any changes made to the cookie are reflected in the component state.',
            'State is initialized with the current cookie value (or initial value if not present).',
          ],
        },
        {
          item: 'Deletion Support',
          options: [
            'Supports cookie deletion using the `deleteValue` function.',
            'When a cookie is deleted, the state is also reset.',
            'Deletion is handled gracefully without causing errors or side effects.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'useSingleEffect Hook',
          options: [
            'The `useSingleEffect` hook ensures the cookie is set only once during the component lifecycle.',
            'It sets the cookie if it does not already exist.',
            'Prevents unnecessary repeated cookie-setting actions.',
          ],
        },
        {
          item: 'useCookieListener Hook',
          options: [
            'The `useCookieListener` hook listens for changes to the cookie and updates the state accordingly.',
            'It re-renders the component when the cookie value changes.',
            'This ensures that the UI is always in sync with the cookie value.',
          ],
        },
        {
          item: 'Cookie Serialization',
          options: [
            'The hook uses `parseToCookieType` to serialize the state value before saving it to the cookie.',
            'It also uses `parseToDataType` to deserialize the cookie value back to its original state.',
            'This allows for a wide range of data types to be stored in cookies, not just strings.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'User Preferences',
          options: [
            'Store user-selected themes (light/dark mode) in cookies.',
            'Persist user language preferences across page reloads.',
            'Allow users to customize app settings, and keep them across sessions.',
          ],
        },
        {
          item: 'Authentication State',
          options: [
            'Store authentication tokens or session information in cookies.',
            'Maintain login state even after the user refreshes the page.',
            'Automatically log users in based on the presence of a valid cookie.',
          ],
        },
        {
          item: 'Shopping Cart',
          options: [
            'Store the contents of a shopping cart in cookies.',
            'Persist cart items even after a page reload or app restart.',
            'Enable users to return to their cart later, even if they navigate away from the site.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Use Cookies for Small Data',
          options: [
            'Avoid storing large data objects or sensitive information in cookies.',
            'Cookies have size limitations (usually around 4 KB).',
            'For large or sensitive data, consider using localStorage or server-side sessions.',
          ],
        },
        {
          item: 'Use Expiration for Security',
          options: [
            'Always set expiration for cookies to limit their lifespan.',
            'By default, `useCookie` sets the cookie to expire in 365 days.',
            'Consider setting a shorter expiration for sensitive data like authentication tokens.',
          ],
        },
        {
          item: 'Ensure Cookie Compatibility',
          options: [
            'Check for cross-browser compatibility when using cookies.',
            'Use secure flags for cookies in production to enhance security.',
            'Avoid relying on cookies alone for sensitive data handling (use encryption and HTTPS).',
          ],
        },
      ],
    },
  ],
};
