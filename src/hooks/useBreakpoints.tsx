import { useState, useEffect, useCallback } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  [key: string]: number;
}

interface ScreenSize {
  width: number;
  breakpoint: string;
}

const defaultBreakpoints: Breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1400,
  '3xl': 1600,
};

const getBreakpoint = (width: number, breakpoints: Breakpoints): string => {
  if (width >= breakpoints.xxxl) return '3xl';
  if (width >= breakpoints.xxl) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

/**
 * Custom React hook to get the current screen size and breakpoint based on the provided breakpoints.
 *
 * @param {Partial<Breakpoints>} customBreakpoints - An optional object to override the default breakpoints.
 * @returns {ScreenSize} An object containing the current screen width and the corresponding breakpoint.
 *
 * @example
 * const { width, breakpoint } = useBreakpoints();
 *
 * @example
 * const customBreakpoints = { sm: 480, md: 768, lg: 1024, xl: 1280 };
 * const { width, breakpoint } = useBreakpoints(customBreakpoints);
 */
const useBreakpoints = (customBreakpoints: Partial<Breakpoints> = {}): ScreenSize => {
  const validCustomBreakpoints = Object.fromEntries(
    Object.entries(customBreakpoints).filter(([_, value]) => value !== undefined)
  ) as Breakpoints;
  const breakpoints: Breakpoints = { ...defaultBreakpoints, ...validCustomBreakpoints };

  const [screenSize, setScreenSize] = useState<ScreenSize>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    breakpoint: typeof window !== 'undefined' ? getBreakpoint(window.innerWidth, breakpoints) : 'xs',
  }));

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setScreenSize({
      width: newWidth,
      breakpoint: getBreakpoint(newWidth, breakpoints),
    });
  }, [breakpoints]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return screenSize;
};

export default useBreakpoints;
