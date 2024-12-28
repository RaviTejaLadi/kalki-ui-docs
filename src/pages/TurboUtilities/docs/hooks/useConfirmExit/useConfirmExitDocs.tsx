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

export const useConfirmExitDocs: hookDocs = {
  title: 'useConfirmExit Hook',
  description:
    'The `useConfirmExit` hook provides a confirmation prompt when a user attempts to exit the page or close the browser tab. It can be used to prevent unintentional page exits when a user has unsaved changes or other important information that needs to be reviewed.',
  example: (
    <pre>
      {`import { useConfirmExit } from './hooks/useConfirmExit';

function MyComponent() {
  const isUnsavedChanges = true; // Example condition

  useConfirmExit(isUnsavedChanges, "You have unsaved changes. Are you sure you want to leave?");
  
  return <div>Your content here</div>;
}`}
    </pre>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Confirm Exit Prompt',
          options: [
            'Displays a confirmation dialog before the user leaves the page.',
            'Customizable prompt message.',
            'Prevents unintentional page closure.',
          ],
        },
        {
          item: 'Conditional Execution',
          options: [
            'Can be enabled or disabled based on a condition (boolean or function).',
            'Supports dynamic control based on user actions.',
            'The handler runs only if the condition is true.',
          ],
        },
        {
          item: 'Browser Compatibility',
          options: [
            'Works with modern browsers (although custom messages are no longer supported in many).',
            'Uses the standard `beforeunload` event for exit confirmation.',
            'Compatible with most desktop and mobile browsers.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'Event Listener Binding',
          options: [
            'The hook adds an event listener to `window` for the `beforeunload` event.',
            'The listener is removed when the component unmounts or the `enabled` state changes.',
            'The event handler prevents the default action to show the confirmation dialog.',
          ],
        },
        {
          item: 'Message Customization',
          options: [
            'The confirmation message is customizable via the `message` parameter.',
            'Browser behavior may vary for custom messages due to modern browser limitations.',
            'If no message is provided, the default browser message will be used.',
          ],
        },
        {
          item: 'Type of `enabled` Prop',
          options: [
            'Can be a boolean or a function.',
            'If `enabled` is a function, it will be called to determine if the handler should execute.',
            'When `enabled` is false, the confirmation prompt is disabled.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Unsaved Changes',
          options: [
            'Prevent users from navigating away if they have unsaved changes in a form.',
            'Ideal for apps like email or document editors.',
            'Helps avoid accidental loss of data.',
          ],
        },
        {
          item: 'Critical Actions',
          options: [
            'Warn users before closing the page when they are in the middle of a critical action.',
            'Useful in apps that require confirmation for actions like deleting or updating important data.',
            'Helps to avoid accidental clicks or navigation.',
          ],
        },
        {
          item: 'Session Management',
          options: [
            'Ensure users are aware of session timeouts or planned logouts before navigating away.',
            'Can be used to notify users about expiring sessions.',
            'Prevent users from unintentionally losing their session data.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Enable Only When Necessary',
          options: [
            'Only enable the confirmation prompt when the user has unsaved data or critical actions pending.',
            'Overuse of this feature can lead to frustrating user experience.',
            'Ensure it doesn’t block normal user flows.',
          ],
        },
        {
          item: 'Use Clear Messaging',
          options: [
            'The confirmation message should clearly inform the user about the consequences of leaving the page.',
            'Avoid generic messages like "Are you sure?" — specify what the user is about to lose.',
            'Provide context to the user for better decision-making.',
          ],
        },
        {
          item: 'Consider Mobile Users',
          options: [
            'Mobile browsers may behave differently when showing the confirmation prompt.',
            'Ensure the confirmation message is concise and clear on smaller screens.',
            'Test on different devices to ensure a consistent experience.',
          ],
        },
      ],
    },
  ],
};
