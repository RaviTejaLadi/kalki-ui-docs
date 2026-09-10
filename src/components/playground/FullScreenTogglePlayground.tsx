import { useState } from 'react';
import { FullScreenToggle } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup, SIZES_XS_3XL } from './PlaygroundShell';

type Variant = (typeof COLOR_VARIANTS)[number];
type Size = Exclude<(typeof SIZES_XS_3XL)[number], '3xl'>;

const SIZES = SIZES_XS_3XL.filter((size): size is Size => size !== '3xl');

const FullScreenTogglePlayground = () => {
  const [variant, setVariant] = useState<Variant>('light');
  const [size, setSize] = useState<Size>('xs');

  const generateCode = () =>
    `<FullScreenToggle variant="${variant}" size="${size}">\n  Toggle fullscreen\n</FullScreenToggle>`;

  return (
    <PlaygroundShell
      preview={
        <FullScreenToggle variant={variant} size={size}>
          Toggle fullscreen
        </FullScreenToggle>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={COLOR_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES} value={size} onChange={setSize} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default FullScreenTogglePlayground;
