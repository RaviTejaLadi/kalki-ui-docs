import { useState } from 'react';
import { Paragraph, TextCarousel } from 'kalki-ui';
import PlaygroundShell, { COLOR_VARIANTS, OptionGroup, SIZES_XS_3XL } from './PlaygroundShell';

const TEXT_CAROUSEL_VARIANTS = [...COLOR_VARIANTS.filter((variant) => variant !== 'help'), 'outline'] as const;
const INTERVALS = ['0', '2000', '4000'] as const;

type Variant = (typeof TEXT_CAROUSEL_VARIANTS)[number];
type Size = (typeof SIZES_XS_3XL)[number];
type Interval = (typeof INTERVALS)[number];

const TextCarouselPlayground = () => {
  const [variant, setVariant] = useState<Variant>('primary');
  const [size, setSize] = useState<Size>('md');
  const [interval, setInterval] = useState<Interval>('0');

  const generateCode = () => `<TextCarousel variant="${variant}" size="${size}" interval={${interval}}>
  <Paragraph>New components are added every week.</Paragraph>
  <Paragraph>Build consistent interfaces with Kalki UI.</Paragraph>
  <Paragraph>Explore the documentation for more examples.</Paragraph>
</TextCarousel>`;

  return (
    <PlaygroundShell
      preview={
        <TextCarousel variant={variant} size={size} interval={Number(interval)} className="w-full max-w-xl">
          <Paragraph>New components are added every week.</Paragraph>
          <Paragraph>Build consistent interfaces with Kalki UI.</Paragraph>
          <Paragraph>Explore the documentation for more examples.</Paragraph>
        </TextCarousel>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={TEXT_CAROUSEL_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_XS_3XL} value={size} onChange={setSize} />
          <OptionGroup label="Interval (ms)" options={INTERVALS} value={interval} onChange={setInterval} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default TextCarouselPlayground;
