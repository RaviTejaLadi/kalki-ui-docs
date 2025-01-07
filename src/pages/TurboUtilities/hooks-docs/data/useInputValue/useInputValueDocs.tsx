import React from 'react';

interface HookDocs {
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

export const useInputValueDocs: HookDocs = {
  title: "useInputValue Hook",
  description: "A custom React hook for managing controlled input values in a flexible and type-safe manner.",
  example: (
    <code>
      {`
import React from 'react';
import { useInputValue } from './hooks';

function App() {
  const [inputValue, handleInputChange] = useInputValue('');

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}
export default App;
      `}
    </code>
  ),
  docs: [
    {
      title: "Features",
      list: [
        {
          item: "Type Safety",
          options: [
            "Supports generic types for value handling.",
            "Prevents type mismatches during state updates.",
            "Works with different input types like text, checkbox, etc."
          ]
        },
        {
          item: "Flexibility",
          options: [
            "Handles various input types automatically.",
            "Can set values directly or through events.",
            "Supports both primitive and object states."
          ]
        },
        {
          item: "Ease of Use",
          options: [
            "Simplifies controlled input handling in forms.",
            "Combines state management and event handling.",
            "Reduces boilerplate code in components."
          ]
        }
      ]
    },
    {
      title: "Implementation Details",
      list: [
        {
          item: "Core Functionality",
          options: [
            "Leverages React's useState hook for state management.",
            "Provides a reusable handleChange function for input events.",
            "Interprets different event types to set the appropriate value."
          ]
        },
        {
          item: "Event Handling",
          options: [
            "Detects input type dynamically (e.g., text, checkbox).",
            "Processes ChangeEvent from native inputs.",
            "Handles direct value updates bypassing events."
          ]
        },
        {
          item: "Generic Support",
          options: [
            "Uses TypeScript generics for versatile value types.",
            "Ensures type consistency across updates.",
            "Allows customization for specific use cases."
          ]
        }
      ]
    },
    {
      title: "Example Use Cases",
      list: [
        {
          item: "Simple Input Management",
          options: [
            "Handling text inputs in forms.",
            "Managing state for checkboxes.",
            "Updating numeric inputs dynamically."
          ]
        },
        {
          item: "Complex Forms",
          options: [
            "Managing form values with mixed input types.",
            "Simplifying controlled component logic.",
            "Reducing boilerplate in large forms."
          ]
        },
        {
          item: "Reusable Components",
          options: [
            "Integrating with custom form components.",
            "Providing consistent input handling logic.",
            "Sharing input handling logic across multiple projects."
          ]
        }
      ]
    },
    {
      title: "Best Practices",
      list: [
        {
          item: "TypeScript Usage",
          options: [
            "Always specify the generic type for consistent type checking.",
            "Use appropriate types for input values (e.g., string, boolean).",
            "Avoid unnecessary type casting when using the hook."
          ]
        },
        {
          item: "Integration",
          options: [
            "Use with React's controlled components for better state control.",
            "Combine with form libraries like Formik for enhanced functionality.",
            "Keep the hook logic isolated and reusable."
          ]
        },
        {
          item: "Performance",
          options: [
            "Avoid unnecessary re-renders by memoizing components.",
            "Use debounce or throttle for performance-intensive inputs.",
            "Minimize the number of state updates in high-frequency scenarios."
          ]
        }
      ]
    }
  ]
};
