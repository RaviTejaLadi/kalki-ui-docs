import React from 'react';
import BatteryStatusDisplay from './BatteryStatusDisplay';

interface BatteryStatusDocs {
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
export const useBatteryStatusDocs: BatteryStatusDocs = {
  title: 'useBatteryStatus',
  description:
    "The useBatteryStatus hook is a custom React hook designed to monitor the device's battery status in real-time. It leverages the Battery Status API (via navigator.getBattery) to fetch and observe the current battery level and charging state",
  example: <BatteryStatusDisplay />,
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'Battery Information Retrieval',
          options: [
            "The hook fetches the device's battery information using the getBattery API.",
            'Provides the current battery level (as a percentage) and charging status (boolean).',
          ],
        },
        {
          item: 'Real-Time Updates',
          options: [
            'Automatically listens for changes in battery level and charging status.',
            'Updates the state when either changes.',
          ],
        },
        {
          item: 'Ease of Use',
          options: [
            'Abstracts complex interactions with the BatteryManager API.',
            'Provides a simple, reusable way to monitor battery status in React components.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'State Management',
          options: ["Maintains the battery level and charging status in a local state using React's useState."],
        },
        {
          item: 'API Access',
          options: [
            'Uses the getBattery method from the Navigator API to retrieve battery information.',
            'Defines a custom NavigatorType to augment the Navigator type in TypeScript.',
          ],
        },
        {
          item: 'Effect Hook',
          options: [
            'Fetches initial battery data and sets up event listeners using useEffect.',
            'Cleans up event listeners when the component unmounts to prevent memory leaks.',
          ],
        },
        {
          item: 'Event Listeners',
          options: ['Listens to charging change and level change events to update the state dynamically.'],
        },
        {
          item: 'Compatibility Check',
          options: ['Ensures compatibility with older browsers by checking for the getBattery API.'],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Power-Sensitive Applications',
          options: [
            'Adjust application performance based on battery status, such as reducing animations or disabling background processes when the battery is low.',
          ],
        },
        {
          item: 'Device Monitoring Dashboards',
          options: ['Display device health metrics, including battery information.'],
        },
        {
          item: 'Battery-Saving Mode',
          options: [
            "Enable a 'Battery Saver Mode' in applications when the battery level is below a certain threshold.",
          ],
        },
        {
          item: 'Web Games or Media Apps',
          options: ['Inform users when the battery is running low during long usage sessions.'],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Browser Compatibility',
          options: [
            'Check for the existence of the getBattery API, as it is not supported in all browsers.',
            'Provide fallback behavior if the API is unavailable.',
          ],
        },
        {
          item: 'Avoid Redundant State Updates',
          options: ['Ensure that state updates occur only when necessary to avoid unnecessary re-renders.'],
        },
        {
          item: 'Clean Up Resources',
          options: ['Always remove event listeners in the cleanup function of useEffect to prevent memory leaks.'],
        },
        {
          item: 'Error Handling',
          options: ['Wrap API calls in try-catch blocks to handle potential errors gracefully.'],
        },
        {
          item: 'Performance Optimization',
          options: ['Debounce or throttle state updates if the battery events fire too frequently.'],
        },
      ],
    },
  ],
};
