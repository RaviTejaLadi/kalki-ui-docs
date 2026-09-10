import { useState } from 'react';
import { TextHighlighter, TextHighlighterText } from 'kalki-ui';
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

const TextHighlighterPlayground = () => {
  const [defaultVariant, setDefaultVariant] = useState<Variant>('solid');
  const [defaultEmphasis, setDefaultEmphasis] = useState<Emphasis>('medium');
  const [defaultSizing, setDefaultSizing] = useState<Sizing>('comfortable');

  const generateCode = () => `<TextHighlighter
  defaultVariant="${defaultVariant}"
  defaultEmphasis="${defaultEmphasis}"
  defaultSizing="${defaultSizing}"
>
  Build UIs with <TextHighlighterText>React</TextHighlighterText> and{' '}
  <TextHighlighterText variant="underline">component-based</TextHighlighterText> architecture.
  Use <TextHighlighterText variant="tag">hooks</TextHighlighterText> like{' '}
  <TextHighlighterText variant="glass">useState</TextHighlighterText> to manage state.
</TextHighlighter>`;

  return (
    <PlaygroundShell
      preview={
        <div className="leading-relaxed text-sm max-w-xl">
          <TextHighlighter
            defaultVariant={defaultVariant}
            defaultEmphasis={defaultEmphasis}
            defaultSizing={defaultSizing}
          >
            Build UIs with <TextHighlighterText>React</TextHighlighterText> and{' '}
            <TextHighlighterText variant="underline">component-based</TextHighlighterText> architecture. Use{' '}
            <TextHighlighterText variant="tag">hooks</TextHighlighterText> like{' '}
            <TextHighlighterText variant="glass">useState</TextHighlighterText> to manage state.
          </TextHighlighter>
        </div>
      }
      controls={
        <>
          <OptionGroup label="Default variant" options={VARIANTS} value={defaultVariant} onChange={setDefaultVariant} />
          <OptionGroup
            label="Default emphasis"
            options={EMPHASES}
            value={defaultEmphasis}
            onChange={setDefaultEmphasis}
          />
          <OptionGroup label="Default sizing" options={SIZINGS} value={defaultSizing} onChange={setDefaultSizing} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default TextHighlighterPlayground;
