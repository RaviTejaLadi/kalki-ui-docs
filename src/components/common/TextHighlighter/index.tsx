import React, { useMemo } from 'react';
import { HighlightContext } from './HighlightContext';
import { TextHighlighterInfo } from './TextHighlighterInfo';
import { TextHighlighterText } from './TextHighlighterText';
import { defaultColors, TextHighlighterProps } from './types';

/**
 * A component that provides highlighting context for its children.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child elements to render within the highlighter context
 * @param {Array<string>} [props.colorsList=defaultColors] - List of colors available for highlighting
 * @param {('solid'|'outline')} [props.defaultVariant='solid'] - Default variant style for highlights
 * @param {('low'|'medium'|'high')} [props.defaultEmphasis='medium'] - Default emphasis level for highlights
 * @param {('inherit'|'sm'|'md'|'lg')} [props.defaultSizing='inherit'] - Default sizing for highlighted text
 * 
 * @returns {JSX.Element} A context provider wrapping the children with highlighting configuration
 * 
 * @example
 * ```jsx
 * <TextHighlighter colorsList={['red', 'blue']} defaultVariant="solid">
 *   <HighlightedText>Some text</HighlightedText>
 * </TextHighlighter>
 * ```
 */
const TextHighlighter: React.FC<TextHighlighterProps> = ({
  children,
  colorsList = defaultColors,
  defaultVariant = 'solid',
  defaultEmphasis = 'medium',
  defaultSizing = 'inherit',
}) => {
  const contextValue = useMemo(
    () => ({
      colorsList,
      defaultVariant,
      defaultEmphasis,
      defaultSizing,
    }),
    [colorsList, defaultVariant, defaultEmphasis, defaultSizing]
  );

  return (
    <HighlightContext.Provider value={contextValue}>
      {children}
    </HighlightContext.Provider>
  );
};

export default Object.assign(
  TextHighlighter as React.ForwardRefExoticComponent<
    TextHighlighterProps & React.RefAttributes<HTMLDivElement>
  >,
  {
    Info: TextHighlighterInfo,
    Text: TextHighlighterText,
  }
);

export { TextHighlighterInfo, TextHighlighterText };
