import { useEffect, useRef, useState } from 'react';

export function useInterval(callback: () => void, initialDelay: number) {
  if (typeof callback !== 'function') {
    throw new Error(`Invalid parameter type. 'callback' should be a function but received ${callback}`);
  }

  if (typeof initialDelay !== 'number') {
    throw new Error(`Invalid parameter type. 'initialDelay should be a number but received ${initialDelay}'`);
  }

  const savedCallback = useRef<(() => void) | undefined>();

  const [delay, setDelay] = useState<number | null | undefined>(initialDelay);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // runs the interval procedure
    function tick() {
      if (!savedCallback.current) {
        return;
      }

      savedCallback.current();
    }

    // handling interval call
    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);

  // if delay is not set, start it with initialDelay
  const start = (delay: number) => {
    setDelay(delay || initialDelay);
  };

  const stop = () => {
    setDelay(null);
  };

  return { start, stop };
}
