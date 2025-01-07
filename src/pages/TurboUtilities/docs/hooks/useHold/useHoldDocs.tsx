export const useHoldDocs = {
    title: "useHold Hook Documentation",
    description: "The `useHold` hook is a custom React hook designed to detect and handle hold actions (long presses) on an element. It supports both mouse and touch events, making it suitable for a wide range of use cases.",
    example: (
      <div>
        <button
          {...useHold(() => alert('Held!'), { delay: 1500, doPreventDefault: true })}
        >
          Hold Me
        </button>
      </div>
    ),
    docs: [
      {
        title: "Features",
        list: [
          {
            item: "Cross-device Compatibility",
            options: [
              "Supports both mouse and touch events.",
              "Handles multi-touch scenarios gracefully.",
              "Works seamlessly on mobile and desktop devices."
            ]
          },
          {
            item: "Customizable Behavior",
            options: [
              "Allows setting a custom delay for hold detection.",
              "Optional prevention of default touch behaviors.",
              "Flexible callback execution based on user interaction."
            ]
          },
          {
            item: "Easy Integration",
            options: [
              "Returns event handlers ready for direct use in JSX.",
              "Encapsulates event management, reducing boilerplate code.",
              "Simplifies handling of cleanup and event unbinding."
            ]
          }
        ]
      },
      {
        title: "Implementation Details",
        list: [
          {
            item: "Event Management",
            options: [
              "Attaches and removes event listeners dynamically.",
              "Uses `setTimeout` to detect long press duration.",
              "Handles `touchend` events to prevent default behavior when required."
            ]
          },
          {
            item: "State Management",
            options: [
              "Uses `useRef` for storing timeout and target references.",
              "Ensures proper cleanup to avoid memory leaks.",
              "Maintains separation of concerns by abstracting state logic."
            ]
          },
          {
            item: "Callback Handling",
            options: [
              "Executes the provided callback after the specified delay.",
              "Passes the event object to the callback for context.",
              "Supports additional arguments through closures if needed."
            ]
          }
        ]
      },
      {
        title: "Example Use Cases",
        list: [
          {
            item: "Interactive Buttons",
            options: [
              "Implementing a hold-to-confirm feature.",
              "Adding long-press actions for context menus.",
              "Creating customizable button interactions."
            ]
          },
          {
            item: "Touchscreen Applications",
            options: [
              "Detecting hold gestures for drag-and-drop interfaces.",
              "Supporting hold actions for mobile game controls.",
              "Enhancing user experience in touchscreen-specific workflows."
            ]
          },
          {
            item: "Accessibility Features",
            options: [
              "Providing alternative input methods for users.",
              "Integrating hold actions for assistive technologies.",
              "Improving UI accessibility by reducing accidental interactions."
            ]
          }
        ]
      },
      {
        title: "Best Practices",
        list: [
          {
            item: "Optimizing Performance",
            options: [
              "Avoid long delays unless necessary.",
              "Debounce or throttle actions triggered by the callback.",
              "Test on multiple devices to ensure responsiveness."
            ]
          },
          {
            item: "Ensuring Usability",
            options: [
              "Provide visual feedback during hold actions.",
              "Clearly communicate the purpose of hold interactions to users.",
              "Fallback to alternative actions for unsupported devices."
            ]
          },
          {
            item: "Code Maintainability",
            options: [
              "Document custom delay values and callback logic.",
              "Reuse the hook across similar components for consistency.",
              "Keep the callback function lightweight to minimize delays."
            ]
          }
        ]
      }
    ]
  };
  