import { useClipboard } from "@/modules/hooks";
import React from "react";

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

export const useClipboardDocs: hookDocs = {
  title: 'useClipboard Hook',
  description:
    'A React hook to copy text to the clipboard and manage the state of the operation. It handles success, error, and timeout scenarios, providing a seamless clipboard integration.',
  example: (
    <div>
      <button
        onClick={() => {
          const { copy, copied, error } = useClipboard({ timeout: 1000 });
          copy('Hello World!');
          if (copied) console.log('Text copied!');
          if (error) console.error(error);
        }}
      >
        Copy Text
      </button>
    </div>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Clipboard Copy Functionality',
          options: [
            "Copies the provided text to the user's clipboard.",
            'Uses the modern `navigator.clipboard` API for efficient copying.',
            'Handles fallback errors when the clipboard API is not supported.',
          ],
        },
        {
          item: 'Error Management',
          options: [
            'Captures and provides detailed error information when copy fails.',
            'Graceful degradation if the browser does not support the clipboard API.',
            'Allows resetting of error states to retry operations.',
          ],
        },
        {
          item: 'Timeout Management',
          options: [
            'Customizable timeout to reset the `copied` state.',
            'Ensures a visual indication or status reset after the specified time.',
            'Prevents lingering states using `clearTimeout` logic.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'State Management',
          options: [
            'Maintains `copied` state to track the success of clipboard operations.',
            'Handles error states using a dedicated `error` state variable.',
            'Manages timeout using `copyTimeout` state and `clearTimeout` logic.',
          ],
        },
        {
          item: 'API Integration',
          options: [
            'Relies on the `navigator.clipboard` API for clipboard operations.',
            'Ensures backward compatibility by handling unsupported browsers.',
            'Uses Promises to handle asynchronous clipboard operations.',
          ],
        },
        {
          item: 'Reset Functionality',
          options: [
            'Provides a `reset` method to clear error and copied states.',
            'Ensures the hook can be reused without lingering effects.',
            'Resets internal timeout to avoid unexpected behavior.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Copying Text Content',
          options: [
            'Allow users to copy promotional codes or links.',
            'Facilitate copying of configuration settings or API keys.',
            "Enable 'Copy to Clipboard' functionality in text editors.",
          ],
        },
        {
          item: 'Form Data Sharing',
          options: [
            'Copying user inputs for debugging or sharing purposes.',
            'Providing quick access to prefilled forms or templates.',
            'Sharing validation results or error messages.',
          ],
        },
        {
          item: 'Interactive UI Components',
          options: [
            'Integrate with buttons to provide feedback when copying is successful.',
            'Show toast notifications or animations for successful operations.',
            'Use in quizzes or tests for copying correct answers.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Error Handling',
          options: [
            'Always check for `error` before assuming success.',
            'Provide user feedback when the clipboard operation fails.',
            'Log errors for debugging unsupported browser scenarios.',
          ],
        },
        {
          item: 'Timeout Customization',
          options: [
            'Set a reasonable timeout value to avoid confusing users.',
            'Customize timeout based on use case, e.g., longer durations for animations.',
            'Ensure timeout aligns with UI feedback mechanisms.',
          ],
        },
        {
          item: 'Browser Compatibility',
          options: [
            'Test in multiple browsers to ensure consistent behavior.',
            'Provide fallbacks for older browsers without clipboard support.',
            'Inform users when clipboard features are unavailable.',
          ],
        },
      ],
    },
  ],
};
