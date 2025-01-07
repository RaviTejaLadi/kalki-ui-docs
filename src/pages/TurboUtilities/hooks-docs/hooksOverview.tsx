import { useHoverDocs } from './data/useHoverDocs';
import { HookDocs } from './types';

export interface HookOverview {
  id: string;
  title: string;
  desc: string;
  docs?: HookDocs;
}

export const hooksOverviewList: HookOverview[] = [
  {
    id: 'useHover',
    title: 'useHover',
    desc: 'Hook to detect when an element is being hovered over',
    docs: useHoverDocs,
  },
  {
    id: 'useConfirmExit',
    title: 'useConfirmExit',
    desc: 'Prompts user for confirmation before leaving the page',
  },
  {
    id: 'useFavicon',
    title: 'useFavicon',
    desc: 'Dynamically update the page favicon',
  },
  {
    id: 'useLocalStorage',
    title: 'useLocalStorage',
    desc: 'Persist state in localStorage with a React-like API',
  },
  {
    id: 'useDebounce',
    title: 'useDebounce',
    desc: 'Debounce a value or function call',
  },
  {
    id: 'useClickOutside',
    title: 'useClickOutside',
    desc: 'Detect clicks outside of a specified element',
  },
  {
    id: 'useSingleEffect',
    title: 'useSingleEffect',
    desc: 'Run an effect only once during component lifecycle',
  },
  {
    id: 'useEventListener',
    title: 'useEventListener',
    desc: 'Safely add and remove event listeners',
  },
  {
    id: 'useIsomorphicLayoutEffect',
    title: 'useIsomorphicLayoutEffect',
    desc: 'Safe alternative to useLayoutEffect for SSR',
  },
  {
    id: 'useFirstRender',
    title: 'useFirstRender',
    desc: 'Detect if component is in its first render',
  },
  {
    id: 'useScript',
    title: 'useScript',
    desc: 'Dynamically load external scripts',
  },
  {
    id: 'useMediaQuery',
    title: 'useMediaQuery',
    desc: 'React to CSS media query changes',
  },
  {
    id: 'usePrefersTheme',
    title: 'usePrefersTheme',
    desc: "Detect user's preferred color scheme",
  },
  {
    id: 'useMousePosition',
    title: 'useMousePosition',
    desc: 'Track mouse cursor position',
  },
  {
    id: 'useUrgentUpdate',
    title: 'useUrgentUpdate',
    desc: 'Force immediate component updates',
  },
  {
    id: 'useLeaveDetection',
    title: 'useLeaveDetection',
    desc: 'Detect when user attempts to leave the page',
  },
  {
    id: 'useInputValue',
    title: 'useInputValue',
    desc: 'Manage input field values with ease',
  },
  {
    id: 'useToggle',
    title: 'useToggle',
    desc: 'Toggle between boolean states',
  },
  {
    id: 'useClipboard',
    title: 'useClipboard',
    desc: 'Copy text to clipboard and manage copy state',
  },
  {
    id: 'useHold',
    title: 'useHold',
    desc: 'Detect when an element is being held/pressed',
  },
  {
    id: 'useIdle',
    title: 'useIdle',
    desc: 'Detect user inactivity',
  },
  {
    id: 'useTitle',
    title: 'useTitle',
    desc: 'Dynamically update document title',
  },
  {
    id: 'useScrollPosition',
    title: 'useScrollPosition',
    desc: 'Track scroll position',
  },
  {
    id: 'useUpdateEffect',
    title: 'useUpdateEffect',
    desc: 'Run effect only on updates, skipping first render',
  },
  {
    id: 'useCookie',
    title: 'useCookie',
    desc: 'Manage browser cookies',
  },
  {
    id: 'useCookieListener',
    title: 'useCookieListener',
    desc: 'Listen to changes in browser cookies',
  },
  {
    id: 'useInterval',
    title: 'useInterval',
    desc: 'Set and manage intervals with React lifecycle awareness',
  },
  {
    id: 'useSize',
    title: 'useSize',
    desc: 'Track element dimensions',
  },
  {
    id: 'useBatteryStatus',
    title: 'useBatteryStatus',
    desc: 'Monitor device battery status and charging state',
  },
  {
    id: 'useFullscreen',
    title: 'useFullscreen',
    desc: 'Toggle fullscreen mode for elements',
  },
  {
    id: 'useDeviceOS',
    title: 'useDeviceOS',
    desc: "Detect user's operating system",
  },
  {
    id: 'useNetwork',
    title: 'useNetwork',
    desc: 'Monitor network connection status',
  },
  {
    id: 'useTabNotification',
    title: 'useTabNotification',
    desc: 'Manage browser tab notifications',
  },
  {
    id: 'useOrientation',
    title: 'useOrientation',
    desc: 'Track device orientation changes',
  },
  {
    id: 'useWindowSize',
    title: 'useWindowSize',
    desc: 'Monitor window dimensions',
  },
  {
    id: 'useIntersectionObserver',
    title: 'useIntersectionObserver',
    desc: 'Track element visibility in viewport',
  },
  {
    id: 'usePreventBodyScroll',
    title: 'usePreventBodyScroll',
    desc: 'Prevent body scrolling when needed',
  },
  {
    id: 'useKeyPress',
    title: 'useKeyPress',
    desc: 'Detect keyboard key presses',
  },
];
