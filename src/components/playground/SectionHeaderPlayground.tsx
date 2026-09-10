import { useState } from 'react';
import { SectionHeader, SectionHeaderSubTitle, SectionHeaderTitle } from 'kalki-ui';
import PlaygroundShell, { OptionGroup, SIZES_SM_LG } from './PlaygroundShell';

const VARIANTS = ['default', 'transparent', 'outline'] as const;
const ALIGNMENTS = ['left', 'center', 'right'] as const;

const SectionHeaderPlayground = () => {
  const [variant, setVariant] = useState<(typeof VARIANTS)[number]>('default');
  const [size, setSize] = useState<(typeof SIZES_SM_LG)[number]>('md');
  const [align, setAlign] = useState<(typeof ALIGNMENTS)[number]>('left');

  const generateCode = () => `<SectionHeader variant="${variant}" size="${size}" align="${align}">
  <SectionHeaderTitle>Featured components</SectionHeaderTitle>
  <SectionHeaderSubTitle>Explore the latest additions to Kalki UI.</SectionHeaderSubTitle>
</SectionHeader>`;

  return (
    <PlaygroundShell
      preview={
        <SectionHeader variant={variant} size={size} align={align} className="w-full">
          <SectionHeaderTitle>Featured components</SectionHeaderTitle>
          <SectionHeaderSubTitle>Explore the latest additions to Kalki UI.</SectionHeaderSubTitle>
        </SectionHeader>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={SIZES_SM_LG} value={size} onChange={setSize} />
          <OptionGroup label="Align" options={ALIGNMENTS} value={align} onChange={setAlign} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default SectionHeaderPlayground;
