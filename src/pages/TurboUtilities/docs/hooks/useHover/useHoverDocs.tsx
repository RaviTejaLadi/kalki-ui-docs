import { hookDocs } from "../types";

export const useHoverDocs: hookDocs = {
    title: "useHover Hook",
    description: "A custom React hook to detect hover state on an element.",
    example: (
      <div>
        <p>Example:</p>
        <code>
          {`
            import React from 'react';
            import { useHover } from './useHover';
  
            const HoverComponent = () => {
              const { ref, hovered } = useHover();
  
              return (
                <div
                  ref={ref}
                  style={{
                    width: '200px',
                    height: '100px',
                    background: hovered ? 'blue' : 'gray',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {hovered ? 'Hovered!' : 'Hover me!'}
                </div>
              );
            };
  
            export default HoverComponent;
          `}
        </code>
      </div>
    ),
    docs: [
      {
        title: "Features",
        list: [
          {
            item: "Simplified hover detection",
            options: [
              "Easily track hover state of any DOM element.",
              "No need to manually attach or detach event listeners.",
              "Seamless integration with functional components.",
            ],
          },
          {
            item: "Customizable",
            options: [
              "Supports any type of DOM element.",
              "Can be reused for multiple elements by using separate refs.",
              "Works with advanced styling scenarios like conditional classes.",
            ],
          },
          {
            item: "Optimized Performance",
            options: [
              "Uses `useCallback` for stable event handlers.",
              "Attaches and removes listeners dynamically.",
              "Minimizes re-renders by directly controlling state.",
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
              "Uses `useState` to manage the hover state.",
              "State updates only when the hover state changes.",
              "Clean separation of state and event logic.",
            ],
          },
          {
            item: "Event Binding",
            options: [
              "Attaches event listeners on `mouseenter` and `mouseleave`.",
              "Detaches listeners during cleanup to avoid memory leaks.",
              "Ensures safe operations with null checks for `ref.current`.",
            ],
          },
          {
            item: "Ref Handling",
            options: [
              "Uses `useRef` to bind a DOM element.",
              "Allows seamless integration with React's `ref` forwarding.",
              "Ensures compatibility with any DOM or custom components.",
            ],
          },
        ],
      },
      {
        title: "Example Use Cases",
        list: [
          {
            item: "Interactive UI Elements",
            options: [
              "Highlight a button when hovered.",
              "Change text or style dynamically on hover.",
              "Add animations or transitions triggered by hover state.",
            ],
          },
          {
            item: "Tooltips and Overlays",
            options: [
              "Show tooltips on hover over an element.",
              "Display contextual menus or options when hovering.",
              "Control visibility of overlays for better UX.",
            ],
          },
          {
            item: "Games or Visual Effects",
            options: [
              "Create hover-based game mechanics.",
              "Trigger particle effects or animations on hover.",
              "Provide feedback in gamified learning apps.",
            ],
          },
        ],
      },
      {
        title: "Best Practices",
        list: [
          {
            item: "State Optimization",
            options: [
              "Avoid setting heavy computations in the hover state.",
              "Use lightweight hover state changes for responsive UI.",
              "Debounce hover actions if they trigger intensive tasks.",
            ],
          },
          {
            item: "Accessibility",
            options: [
              "Ensure fallback interactions for keyboard users.",
              "Test hover functionality with screen readers.",
              "Avoid hover-dependent functionality for mobile devices.",
            ],
          },
          {
            item: "Styling",
            options: [
              "Use CSS transitions for smooth hover effects.",
              "Combine hover state with responsive designs.",
              "Avoid excessive hover-based interactions in dense layouts.",
            ],
          },
        ],
      },
    ],
  };
  