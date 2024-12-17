import React from 'react';
import ColorPalette from '@/components/common/ColorPalette/ColorPalette';

/**
 * Component that renders a container with a color palette.
 * Displays visual color information using the ColorPalette component.
 * 
 * @returns A div container wrapping the ColorPalette component
 * @component
 */
const Colors: React.FC = () => {
  return (
    <div className='container'>
      <ColorPalette />
    </div>
  );
};

export default Colors;
