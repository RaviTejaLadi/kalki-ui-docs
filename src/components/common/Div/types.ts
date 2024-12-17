import React from 'react';

/**
 * Props for the Div component.
 * 
 * @extends {React.HTMLProps<HTMLDivElement>}
 * 
 * @property {'solid' | 'dashed' | 'dotted' | 'none'} [borderStyle] - The style of the border.
 * @property {'gray' | 'blue' | 'green' | 'yellow' | 'purple' | 'none'} [backgroundColor] - The background color of the div.
 */
interface DivProps extends React.HTMLProps<HTMLDivElement> {
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  backgroundColor?: 'gray' | 'blue' | 'green' | 'yellow' | 'purple' | 'none';
}

export { type DivProps };
