import { useState } from 'react';
import { Spinner } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup, SIZES_SM_XL } from './PlaygroundShell';

const SPINNER_VARIANTS = COLOR_VARIANTS.filter((variant) => variant !== 'help');
type SpinnerVariant = (typeof SPINNER_VARIANTS)[number];
type SpinnerSize = (typeof SIZES_SM_XL)[number];

const SpinnerPlayground = () => {
  const [variant, setVariant] = useState<SpinnerVariant>('primary');
  const [size, setSize] = useState<SpinnerSize>('sm');

  return (
    <PlaygroundShell
      preview={<Spinner variant={variant} size={size} aria-label="Loading" />}
      controls={
        <>
          <OptionGroup label="Variant" options={SPINNER_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_SM_XL} value={size} onChange={setSize} />
        </>
      }
      code={`<Spinner variant="${variant}" size="${size}" aria-label="Loading" />`}
    />
  );
};

export default SpinnerPlayground;
