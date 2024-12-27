export interface HookOverview {
  id: string;
  title: string;
  desc: string;
  doc?: React.ReactNode;
}

export const hooksOverview: HookOverview[] = [
  {
    id: 'useHover',
    title: 'useHover',
    desc: 'Hook to detect when an element is being hovered over',
    doc: '',
  },
  {
    id: 'useConfirmExit',
    title: 'useConfirmExit',
    desc: 'Prompts user for confirmation before leaving the page',
    doc: '',
  },
  {
    id: 'useFavicon',
    title: 'useFavicon',
    desc: 'Dynamically update the page favicon',
    doc: '',
  },
  {
    id: 'useLocalStorage',
    title: 'useLocalStorage',
    desc: 'Persist state in localStorage with a React-like API',
    doc: '',
  },
  {
    id: 'useDebounce',
    title: 'useDebounce',
    desc: 'Debounce a value or function call',
    doc: '',
  },
  {
    id: 'useClickOutside',
    title: 'useClickOutside',
    desc: 'Detect clicks outside of a specified element',
    doc: '',
  },
  {
    id: 'useSingleEffect',
    title: 'useSingleEffect',
    desc: 'Run an effect only once during component lifecycle',
    doc: '',
  },
  {
    id: 'useEventListener',
    title: 'useEventListener',
    desc: 'Safely add and remove event listeners',
    doc: '',
  },
  {
    id: 'useIsomorphicLayoutEffect',
    title: 'useIsomorphicLayoutEffect',
    desc: 'Safe alternative to useLayoutEffect for SSR',
    doc: '',
  },
  {
    id: 'useFirstRender',
    title: 'useFirstRender',
    desc: 'Detect if component is in its first render',
    doc: '',
  },
  {
    id: 'useScript',
    title: 'useScript',
    desc: 'Dynamically load external scripts',
    doc: '',
  },
  {
    id: 'useMediaQuery',
    title: 'useMediaQuery',
    desc: 'React to CSS media query changes',
    doc: '',
  },
  {
    id: 'usePrefersTheme',
    title: 'usePrefersTheme',
    desc: "Detect user's preferred color scheme",
    doc: '',
  },
  {
    id: 'useMousePosition',
    title: 'useMousePosition',
    desc: 'Track mouse cursor position',
    doc: '',
  },
  {
    id: 'useUrgentUpdate',
    title: 'useUrgentUpdate',
    desc: 'Force immediate component updates',
    doc: '',
  },
  {
    id: 'useLeaveDetection',
    title: 'useLeaveDetection',
    desc: 'Detect when user attempts to leave the page',
    doc: '',
  },
  {
    id: 'useInputValue',
    title: 'useInputValue',
    desc: 'Manage input field values with ease',
    doc: '',
  },
  {
    id: 'useToggle',
    title: 'useToggle',
    desc: 'Toggle between boolean states',
    doc: '',
  },
  {
    id: 'useClipboard',
    title: 'useClipboard',
    desc: 'Copy text to clipboard and manage copy state',
    doc: '',
  },
  {
    id: 'useHold',
    title: 'useHold',
    desc: 'Detect when an element is being held/pressed',
    doc: '',
  },
  {
    id: 'useIdle',
    title: 'useIdle',
    desc: 'Detect user inactivity',
    doc: '',
  },
  {
    id: 'useTitle',
    title: 'useTitle',
    desc: 'Dynamically update document title',
    doc: '',
  },
  {
    id: 'useScrollPosition',
    title: 'useScrollPosition',
    desc: 'Track scroll position',
    doc: '',
  },
  {
    id: 'useUpdateEffect',
    title: 'useUpdateEffect',
    desc: 'Run effect only on updates, skipping first render',
    doc: '',
  },
  {
    id: 'useCookie',
    title: 'useCookie',
    desc: 'Manage browser cookies',
    doc: '',
  },
  {
    id: 'useCookieListener',
    title: 'useCookieListener',
    desc: 'Listen to changes in browser cookies',
    doc: '',
  },
  {
    id: 'useInterval',
    title: 'useInterval',
    desc: 'Set and manage intervals with React lifecycle awareness',
    doc: '',
  },
  {
    id: 'useSize',
    title: 'useSize',
    desc: 'Track element dimensions',
    doc: '',
  },
  {
    id: 'useBatteryStatus',
    title: 'useBatteryStatus',
    desc: 'Monitor device battery status and charging state',
    doc: '',
  },
  {
    id: 'useFullscreen',
    title: 'useFullscreen',
    desc: 'Toggle fullscreen mode for elements',
    doc: '',
  },
  {
    id: 'useDeviceOS',
    title: 'useDeviceOS',
    desc: "Detect user's operating system",
    doc: '',
  },
  {
    id: 'useNetwork',
    title: 'useNetwork',
    desc: 'Monitor network connection status',
    doc: '',
  },
  {
    id: 'useTabNotification',
    title: 'useTabNotification',
    desc: 'Manage browser tab notifications',
    doc: '',
  },
  {
    id: 'useOrientation',
    title: 'useOrientation',
    desc: 'Track device orientation changes',
    doc: '',
  },
  {
    id: 'useWindowSize',
    title: 'useWindowSize',
    desc: 'Monitor window dimensions',
    doc: '',
  },
  {
    id: 'useIntersectionObserver',
    title: 'useIntersectionObserver',
    desc: 'Track element visibility in viewport',
    doc: '',
  },
  {
    id: 'usePreventBodyScroll',
    title: 'usePreventBodyScroll',
    desc: 'Prevent body scrolling when needed',
    doc: '',
  },
  {
    id: 'useKeyPress',
    title: 'useKeyPress',
    desc: 'Detect keyboard key presses',
    doc: '',
  },
];
