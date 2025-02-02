import React, { useState } from 'react';
import { Copy, Check, Search } from 'lucide-react';
import { colors, getColorValues } from './colorUtils';
import { Input } from '../Form';

const ColorsWatch: React.FC<{ shade: { value: number; color: string } }> = ({ shade }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colorValues = getColorValues(shade.color);
  const copyToClipboard = () => {
    const text = `/* ${shade.color} */\nRGB: ${colorValues.rgb}\nHSL: ${colorValues.hsl}\nHEX: ${colorValues.hex}\nTailwind: ${shade.color}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-[5.9rem] h-28 ${shade.color} flex border dark:border-gray-200/10 rounded-md hover:shadow-sm relative group`}
      >
        {isHovered && (
          <button
            onClick={copyToClipboard}
            className="absolute bottom-2 right-2 bg-background/10 text-foreground bg-opacity-90 hover:bg-opacity-100 text-[0.45rem] py-1 px-2 rounded flex items-center justify-center gap-1"
          >
            {copied ? <Check className="size-5" /> : <Copy className="size-5" />} 
          </button>
        )}
      </div>
      <span className="mt-1 text-[0.45rem] text-muted-foreground">{shade.value}</span>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColors = colors.filter((color) => {
    const searchLower = searchTerm.toLowerCase();

    if (color.name.toLowerCase().includes(searchLower)) {
      return true;
    }

    return color.shades.some((shade) => shade.color.toLowerCase().includes(searchLower));
  });

  return (
    <div className="px-5">
      <div className="flex items-end justify-between">
        <div className="pl-2 pt-14">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Tailwind Colors</h1>
          <p className="text-sm text-muted-foreground">Tailwind CSS colors in HSL, RGB, and HEX formats.</p>
        </div>
        <div className="relative mt-4 flex items-center max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="size-4 text-muted-foreground" />
          </div>
          <Input
            name="search"
            type="search"
            placeholder="Search by color name or Tailwind class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block text-muted-foreground placeholder:text-xs w-[30rem] pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="py-10 text-foreground flex flex-wrap justify-center gap-3 text-sm">
        {filteredColors.length > 0 ? (
          filteredColors.map((color) => (
            <div
              key={color.name}
              className="border w-[45%] bg-background dark:bg-inherit dark:border-gray-200/10 shadow-sm rounded-md px-3 py-2"
            >
              <h3 className="text-sm text-foreground font-semibold mb-4">{color.name}</h3>
              <div className="flex justify-center flex-wrap space-x-2 overflow-auto">
                {color.shades.map((shade) => (
                  <ColorsWatch key={shade.value} shade={shade} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted-foreground py-10">No colors found matching &quot;{searchTerm}&quot;</div>
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
