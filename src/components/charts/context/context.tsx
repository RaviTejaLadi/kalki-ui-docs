import React from 'react';
import { ChartContextProps } from '../types';

/**
 * Context for the Chart component.
 * Provides a way to pass chart-related properties down the component tree
 * without having to pass props manually at every level.
 *
 * @type {React.Context<ChartContextProps | null>}
 */
export const ChartContext = React.createContext<ChartContextProps | null>(null);
