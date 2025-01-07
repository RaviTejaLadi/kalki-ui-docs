export const useIdleDocs = {
    title: "useIdle Hook",
    description: "A React hook that tracks user inactivity and sets an idle state after a specified timeout.",
    example: (
      <pre>
        {`
  import React from 'react';
  import { useIdle } from './hooks';
  
  function App() {
    const idle = useIdle(3000, { initialState: false });
  
    return (
      <div>
        <h1>User is {idle ? 'idle' : 'active'}</h1>
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
            item: "Customizable Events",
            options: [
              "Allows specifying which user events to listen for (e.g., 'keypress', 'mousemove').",
              "Supports all standard DOM events.",
              "Default events include 'keypress', 'mousemove', 'touchmove', 'click', and 'scroll'."
            ],
          },
          {
            item: "Timeout-based Inactivity Detection",
            options: [
              "Triggers an idle state after a defined period of inactivity.",
              "Resets the timer whenever a specified event occurs.",
              "Useful for implementing features like session timeouts or user activity monitoring."
            ],
          },
          {
            item: "Initial State Customization",
            options: [
              "Allows setting the initial idle state to true or false.",
              "Useful for aligning with initial app logic.",
              "Prevents redundant state changes at initialization."
            ],
          },
        ],
      },
      {
        title: "Implementation Details",
        list: [
          {
            item: "Timeout Management",
            options: [
              "Uses a ref to store the timeout ID, ensuring reliable cleanup.",
              "Clears and resets the timeout on every user event.",
              "Avoids memory leaks with proper cleanup in the useEffect cleanup function."
            ],
          },
          {
            item: "Event Listener Binding",
            options: [
              "Attaches listeners for specified events to the document.",
              "Removes listeners on component unmount to prevent memory leaks.",
              "Combines user-defined and default events seamlessly."
            ],
          },
          {
            item: "State Management",
            options: [
              "Uses useState for managing the idle state.",
              "Ensures immediate state updates on user activity.",
              "Provides a straightforward API for checking activity status."
            ],
          },
        ],
      },
      {
        title: "Example Use Cases",
        list: [
          {
            item: "Session Timeout",
            options: [
              "Automatically log out users after a period of inactivity.",
              "Prompt users to extend their session before timeout.",
              "Ensure secure access by tracking user activity."
            ],
          },
          {
            item: "UI Optimization",
            options: [
              "Hide or disable certain UI elements during idle state.",
              "Pause background processes when the user is inactive.",
              "Trigger animations or notifications upon returning to active state."
            ],
          },
          {
            item: "Analytics Tracking",
            options: [
              "Track user engagement based on activity patterns.",
              "Measure time spent actively interacting with the application.",
              "Generate inactivity reports for user behavior analysis."
            ],
          },
        ],
      },
      {
        title: "Best Practices",
        list: [
          {
            item: "Optimize Timeout Value",
            options: [
              "Choose a reasonable timeout duration to balance responsiveness and user experience.",
              "Avoid very short durations to prevent excessive state changes.",
              "Test with various durations based on the application context."
            ],
          },
          {
            item: "Event Selection",
            options: [
              "Include only necessary events to minimize overhead.",
              "Avoid overloading with too many event listeners.",
              "Adjust event list based on the application's primary interactions."
            ],
          },
          {
            item: "State Synchronization",
            options: [
              "Ensure the initialState aligns with the app's startup requirements.",
              "Use the idle state to trigger other app logic if needed.",
              "Avoid unnecessary state updates to optimize performance."
            ],
          },
        ],
      },
    ],
  };
  