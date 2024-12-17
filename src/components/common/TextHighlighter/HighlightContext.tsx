import { createContext } from 'react';
import { defaultColors, HighlightContextType } from './types';

// Create context
/**
 * Context for managing text highlighting configuration across components.
 * 
 * @type {React.Context<HighlightContextType>}
 * 
 * @property {Color[]} colorsList - List of available colors for highlighting
 * @property {'solid' | 'outline'} defaultVariant - Default highlight style variant
 * @property {'low' | 'medium' | 'high'} defaultEmphasis - Default emphasis level for highlighting
 * @property {'inherit' | 'sm' | 'md' | 'lg'} defaultSizing - Default sizing for highlighted text
 * 
 * @example
 * ```tsx
 * const { colorsList, defaultVariant } = useContext(HighlightContext);
 * ```
 */
export const HighlightContext = createContext<HighlightContextType>({
  colorsList: defaultColors,
  defaultVariant: 'solid',
  defaultEmphasis: 'medium',
  defaultSizing: 'inherit',
});
