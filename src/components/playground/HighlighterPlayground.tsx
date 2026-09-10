import { useState } from 'react';
import { Highlighter } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

type Variant =
  | 'solid'
  | 'outlined'
  | 'underline'
  | 'pill'
  | 'gradient'
  | 'glass'
  | 'shadow'
  | 'floating'
  | 'minimal'
  | 'tag';
type Emphasis = 'normal' | 'medium' | 'semibold' | 'bold';
type Sizing = 'inherit' | 'compact' | 'comfortable' | 'relaxed';

const VARIANTS: Variant[] = [
  'solid',
  'outlined',
  'underline',
  'pill',
  'gradient',
  'glass',
  'shadow',
  'floating',
  'minimal',
  'tag',
];
const EMPHASES: Emphasis[] = ['normal', 'medium', 'semibold', 'bold'];
const SIZINGS: Sizing[] = ['inherit', 'compact', 'comfortable', 'relaxed'];
const PREVIEW_TEXT = 'Build polished interfaces with React and TypeScript.';

const HighlighterPlayground = () => {
  const [variant, setVariant] = useState<Variant>('solid');
  const [emphasis, setEmphasis] = useState<Emphasis>('medium');
  const [sizing, setSizing] = useState<Sizing>('inherit');

  const generateCode = () =>
    `<Highlighter
  highlightText={["React", "TypeScript"]}
  variant="${variant}"
  emphasis="${emphasis}"
  sizing="${sizing}"
>
  ${PREVIEW_TEXT}
</Highlighter>`;

  return (
    <PlaygroundShell
      preview={
        <Highlighter highlightText={['React', 'TypeScript']} variant={variant} emphasis={emphasis} sizing={sizing}>
          {PREVIEW_TEXT}
        </Highlighter>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Emphasis" options={EMPHASES} value={emphasis} onChange={setEmphasis} />
          <OptionGroup label="Sizing" options={SIZINGS} value={sizing} onChange={setSizing} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default HighlighterPlayground;
