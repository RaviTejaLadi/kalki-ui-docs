export const useFullscreenDocs = {
    title: "useFullscreen Hook",
    description: "A custom React hook to toggle fullscreen mode for a specific target element, supporting various browser-specific implementations of the Fullscreen API.",
    example: (
      <pre>
        {`
  import React, { useRef } from 'react';
  import { useFullscreen } from './useFullscreen';
  
  function App() {
    const targetRef = useRef(null);
    const { isFullscreen, toggleFullscreen } = useFullscreen(targetRef);
  
    return (
      <div>
        <div ref={targetRef} style={{ width: '100%', height: '300px', background: 'lightblue' }}>
          {isFullscreen ? 'You are in fullscreen mode' : 'Click the button to enter fullscreen'}
        </div>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
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
            item: "Browser Compatibility",
            options: [
              "Supports Fullscreen API across major browsers (Chrome, Firefox, Safari, Edge).",
              "Automatically handles browser-specific methods like mozRequestFullScreen and webkitRequestFullscreen.",
              "Fallback messages when Fullscreen API is not supported."
            ],
          },
          {
            item: "Reactive State",
            options: [
              "Tracks whether the target is currently in fullscreen mode using isFullscreen state.",
              "Updates state when the fullscreen mode changes.",
              "Synchronizes state with fullscreenchange events."
            ],
          },
          {
            item: "Ease of Use",
            options: [
              "Encapsulates complex logic of toggling fullscreen mode.",
              "Simplifies fullscreen toggling with a single toggleFullscreen function.",
              "Works seamlessly with any DOM element."
            ],
          },
        ],
      },
      {
        title: "Implementation Details",
        list: [
          {
            item: "State Management",
            options: [
              "Maintains isFullscreen using useState.",
              "Updates state with the handleFullscreenChange event handler.",
              "Uses useCallback for performance optimization."
            ],
          },
          {
            item: "Event Handling",
            options: [
              "Adds a fullscreenchange event listener on mount.",
              "Removes the listener during cleanup to prevent memory leaks.",
              "Updates state based on the current fullscreen element."
            ],
          },
          {
            item: "API Handling",
            options: [
              "Switches between various browser-specific fullscreen methods.",
              "Uses modern requestFullscreen and exitFullscreen where available.",
              "Fallbacks ensure compatibility with legacy browsers."
            ],
          },
        ],
      },
      {
        title: "Example Use Cases",
        list: [
          {
            item: "Media Viewing",
            options: [
              "Enabling fullscreen for videos or image galleries.",
              "Immersive mode for presentations or slideshows.",
              "Enhanced user experience for online streaming apps."
            ],
          },
          {
            item: "Web Applications",
            options: [
              "Fullscreen mode for interactive dashboards.",
              "Expanding data visualization charts for better readability.",
              "Fullscreen editing in content creation tools."
            ],
          },
          {
            item: "Games and Entertainment",
            options: [
              "Fullscreen gameplay for web-based games.",
              "Enhanced virtual tours and 360-degree media experiences.",
              "Interactive learning applications in fullscreen."
            ],
          },
        ],
      },
      {
        title: "Best Practices",
        list: [
          {
            item: "Error Handling",
            options: [
              "Always check if the targetRef.current exists before calling fullscreen methods.",
              "Handle cases where the Fullscreen API is not supported.",
              "Provide user feedback when toggling fullscreen fails."
            ],
          },
          {
            item: "Accessibility",
            options: [
              "Ensure the fullscreen content is keyboard-navigable.",
              "Provide clear instructions for exiting fullscreen mode.",
              "Use ARIA roles and labels for fullscreen buttons."
            ],
          },
          {
            item: "Performance",
            options: [
              "Avoid unnecessary re-renders by using useCallback for event handlers.",
              "Detach event listeners during component unmount.",
              "Optimize DOM interactions for better user experience."
            ],
          },
        ],
      },
    ],
  };
  