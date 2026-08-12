import React, { useState, ChangeEvent } from 'react';
import { Copy, Check, Search } from 'lucide-react';
import { colors, getColorValues } from './colorUtils';

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
        className={`h-[3rem] w-[5rem]  ${shade.color} flex border dark:border-gray-200/10 rounded-[.3rem] hover:shadow-sm relative group`}
      >
        {isHovered && (
          <button
            onClick={copyToClipboard}
            className="absolute bottom-1 right-1 bg-background/10 text-foreground bg-opacity-90 hover:bg-opacity-100 text-[0.45rem] py-1 px-2 rounded flex items-end justify-end gap-1"
          >
            {copied ? (
              <Check className="size-2 text-[var(--icon-color)]" />
            ) : (
              <Copy className="size-2 text-[var(--icon-color)]" />
            )}
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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full py-4 sm:py-6">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Tailwind Colors</h1>
          <p className="text-sm text-muted-foreground">Tailwind CSS colors in HSL, RGB, and HEX formats.</p>
        </div>
        <div className="relative flex w-full max-w-md items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="size-4 text-muted-foreground" />
          </div>
          <input
            name="search"
            type="search"
            placeholder="Search by color name or Tailwind class..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search colors"
            className="block w-full rounded-md border border-gray-300 bg-background py-2 pl-10 pr-3 text-sm leading-5 text-muted-foreground placeholder:text-xs placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-200/10"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 py-6 text-sm text-foreground sm:py-10">
        {filteredColors.length > 0 ? (
          filteredColors.map((color) => (
            <div
              key={color.name}
              className="flex w-full min-w-0 flex-col gap-3 rounded-md bg-background px-2 py-2 sm:flex-row sm:items-center sm:gap-x-4 sm:px-3"
            >
              <h3 className="mb-0 w-full shrink-0 text-xs font-semibold tracking-wider text-muted-foreground sm:mb-0 sm:w-[5rem]">
                {color.name}
              </h3>
              <div className="flex flex-wrap justify-start gap-1 overflow-x-auto sm:justify-center">
                {color.shades.map((shade) => (
                  <ColorsWatch key={shade.value} shade={shade} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-muted-foreground">
            No colors found matching &quot;{searchTerm}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPalette;
