import * as React from 'react';
import { ChartContext } from './context/context';

/**
 * Custom hook to access the chart context.
 *
 * This hook must be used within a `<ChartContainer />` component.
 * If used outside of a `<ChartContainer />`, it will throw an error.
 *
 * @returns {ChartContextType} The chart context value.
 * @throws {Error} If the hook is used outside of a `<ChartContainer />`.
 */
export function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
}
