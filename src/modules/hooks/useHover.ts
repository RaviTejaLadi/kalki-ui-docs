import { useState, useEffect, useRef, useCallback } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<EventTarget | null>(null);
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return undefined;
  }, [onMouseEnter, onMouseLeave]);

  return { ref, hovered };
}
