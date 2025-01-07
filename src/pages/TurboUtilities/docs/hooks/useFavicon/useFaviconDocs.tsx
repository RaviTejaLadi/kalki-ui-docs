export const useFaviconDocs: hookDocs = {
    title: "useFavicon Hook",
    description: "A custom React hook to dynamically set the favicon of your application.",
    example: (
      <pre>
        {`
  import React from 'react';
  import { useFavicon } from './hooks/useFavicon';
  
  function App() {
    const { setFavicon } = useFavicon('/default-favicon.ico');
  
    const changeFavicon = () => {
      setFavicon('/new-favicon.ico');
    };
  
    return (
      <div>
        <h1>useFavicon Hook Example</h1>
        <button onClick={changeFavicon}>Change Favicon</button>
      </div>
    );
  }
  
  export default App;
        `}
      </pre>
    ),
    docs: [
      {
        title: "Features",
        list: [
          {
            item: "Dynamic Favicon Update",
            options: [
              "Allows changing the favicon at runtime.",
              "Fallback to default favicon if none is provided.",
              "Supports various favicon formats (e.g., .ico, .png).",
            ],
          },
          {
            item: "Easy Integration",
            options: [
              "Can be used in any React component.",
              "Does not require additional dependencies.",
              "Automatically appends or updates the favicon link tag in the document head.",
            ],
          },
          {
            item: "Performance Optimized",
            options: [
              "Reuses existing favicon link element if present.",
              "Minimal DOM manipulation for better performance.",
              "Efficient handling of edge cases, such as missing link elements.",
            ],
          },
        ],
      },
      {
        title: "Implementation Details",
        list: [
          {
            item: "Hook Logic",
            options: [
              "Defines a `set` function to handle favicon updates.",
              "Uses `querySelector` to find or create a favicon link element.",
              "Appends the link element to the document head if necessary.",
            ],
          },
          {
            item: "Default Favicon Support",
            options: [
              "Accepts a `defaultHref` parameter for fallback.",
              "Checks if a custom href is provided before setting the default.",
              "Provides a simple mechanism to ensure consistent favicon behavior.",
            ],
          },
          {
            item: "Type Safety",
            options: [
              "Uses TypeScript for type checking.",
              "Ensures `href` values are always valid strings.",
              "Handles cases where document head or link elements might be null.",
            ],
          },
        ],
      },
      {
        title: "Example Use Cases",
        list: [
          {
            item: "Brand Identity",
            options: [
              "Dynamically update favicon to reflect user-specific themes.",
              "Show loading or success icons during key actions.",
              "Switch between light and dark mode favicons.",
            ],
          },
          {
            item: "Web Applications",
            options: [
              "Change favicon based on current page or route.",
              "Use different favicons for different application environments (e.g., development, production).",
              "Enhance user engagement by providing visual feedback in the favicon.",
            ],
          },
          {
            item: "Dynamic State Indication",
            options: [
              "Display a notification badge in the favicon.",
              "Indicate real-time application states, such as a chat message count.",
              "Provide status updates, such as online/offline indicators.",
            ],
          },
        ],
      },
      {
        title: "Best Practices",
        list: [
          {
            item: "Ensure Favicon Format Compatibility",
            options: [
              "Use widely supported favicon formats (e.g., .ico, .png).",
              "Test favicons on different browsers and devices.",
              "Ensure proper sizing for high-DPI screens.",
            ],
          },
          {
            item: "Avoid Frequent Updates",
            options: [
              "Limit the frequency of favicon changes to avoid performance issues.",
              "Update favicons only when necessary to reduce DOM manipulation.",
              "Use caching strategies to improve load times for favicons.",
            ],
          },
          {
            item: "Fallback Mechanisms",
            options: [
              "Provide a default favicon to handle edge cases.",
              "Ensure that the favicon link element is always present.",
              "Handle errors gracefully when setting favicons fails.",
            ],
          },
        ],
      },
    ],
  };
  