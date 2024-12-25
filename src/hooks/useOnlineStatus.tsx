import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the online status of the browser.
 *
 * This hook listens for the `online` and `offline` events on the `window` object
 * and updates the state accordingly.
 *
 * @returns {boolean} `true` if the browser is online, `false` if offline.
 *
 * @example
 * ```tsx
 * const isOnline = useOnlineStatus();
 * console.log(isOnline); // true or false based on the browser's online status
 * ```
 */
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
