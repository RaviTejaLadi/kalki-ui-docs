import React, { useState } from 'react';
import { Copy, Check, Search } from 'lucide-react';
import { colors, getColorValues } from './colorUtils';

const ColorSwatch: React.FC<{ shade: { value: number; color: string } }> = ({ shade }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const colorValues = getColorValues(shade.color);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-[5.9rem] h-28 ${shade.color} flex border rounded-md hover:shadow-sm relative group`}>
        {isHovered && (
          <div className="absolute inset-0 rounded flex flex-col gap-1 flex-wrap items-center justify-center ">
            <button
              onClick={() => copyToClipboard(colorValues.rgb, 'rgb')}
              className="w-fit bg-white bg-opacity-90 hover:bg-opacity-100 text-xs py-1 px-2 rounded flex items-center justify-center gap-1"
            >
              {copied === 'rgb' ? <Check className="size-2" /> : <Copy className="size-2" />}
              RGB
            </button>
            <button
              onClick={() => copyToClipboard(colorValues.hsl, 'hsl')}
              className="w-fit bg-white bg-opacity-90 hover:bg-opacity-100 text-xs py-1 px-2 rounded flex items-center justify-center gap-1"
            >
              {copied === 'hsl' ? <Check className="size-2" /> : <Copy className="size-2" />}
              HSL
            </button>
            <button
              onClick={() => copyToClipboard(colorValues.hex, 'hex')}
              className="w-fit bg-white bg-opacity-90 hover:bg-opacity-100 text-xs py-1 px-2 rounded flex items-center justify-center gap-1"
            >
              {copied === 'hex' ? <Check className="size-2" /> : <Copy className="size-2" />}
              HEX
            </button>
            <button
              onClick={() => copyToClipboard(shade.color, 'tailwind')}
              className="w-fit bg-white bg-opacity-90 hover:bg-opacity-100 text-xs py-1 px-2 rounded flex items-center justify-center gap-1"
            >
              {copied === 'tailwind' ? <Check className="size-2" /> : <Copy className="size-2" />}
              TW
            </button>
          </div>
        )}
      </div>
      <span className="mt-1 text-xs text-muted-foreground">{shade.value}</span>
    </div>
  );
};

/**
 * ColorPalette component renders a searchable list of Tailwind CSS colors.
 *
 * @component
 * @example
 * return (
 *   <ColorPalette />
 * )
 *
 * @returns {JSX.Element} The rendered ColorPalette component.
 *
 * The component includes:
 * - A search input to filter colors by name or Tailwind class.
 * - A list of filtered colors displayed with their respective shades.
 * - A message when no colors match the search term.
 *
 * @remarks
 * The component uses Tailwind CSS for styling and assumes the presence of a `colors` array and a `ColorSwatch` component.
 *
 * @hook
 * The component uses the `useState` hook to manage the search term state.
 */
const ColorPalette: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter colors based on search term
  const filteredColors = colors.filter((color) => {
    const searchLower = searchTerm.toLowerCase();

    // Check if color name matches
    if (color.name.toLowerCase().includes(searchLower)) {
      return true;
    }

    // Check if any shade's Tailwind class matches
    return color.shades.some((shade) => shade.color.toLowerCase().includes(searchLower));
  });
  return (
    <div className="px-5">
      <div className="pl-2 pt-14">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Tailwind Colors</h1>
        <p className="text-sm text-muted-foreground">Tailwind CSS colors in HSL, RGB, and HEX formats.</p>
      </div>
      <div className="relative mt-4 flex items-center max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="size-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by color name or Tailwind class..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block text-muted-foreground w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="py-10 text-foreground flex flex-wrap justify-center gap-3  text-sm">
        {filteredColors.length > 0 ? (
          filteredColors.map((color) => (
            <div key={color.name} className="border w-full shadow-sm rounded-md px-3 py-2">
              <h3 className="text-sm text-foreground font-semibold mb-2">{color.name}</h3>
              <div className="flex space-x-2 overflow-auto">
                {color.shades.map((shade) => (
                  <ColorSwatch key={shade.value} shade={shade} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-10">No colors found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
