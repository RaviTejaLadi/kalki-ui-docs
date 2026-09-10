import { useState } from 'react';
import { Stack, StackItem } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const DIRECTIONS = ['row', 'column'] as const;
const JUSTIFY_OPTIONS = ['start', 'center', 'end', 'between', 'around'] as const;
const ALIGN_OPTIONS = ['start', 'center', 'end', 'stretch'] as const;
const WRAP_OPTIONS = ['wrap', 'nowrap'] as const;
const SPACING_OPTIONS = ['0', '1', '2', '3', '4', '6', '8'] as const;

const StackPlayground = () => {
  const [direction, setDirection] = useState<(typeof DIRECTIONS)[number]>('row');
  const [justifyContent, setJustifyContent] = useState<(typeof JUSTIFY_OPTIONS)[number]>('start');
  const [alignItems, setAlignItems] = useState<(typeof ALIGN_OPTIONS)[number]>('stretch');
  const [flexWrap, setFlexWrap] = useState<(typeof WRAP_OPTIONS)[number]>('nowrap');
  const [spacing, setSpacing] = useState<(typeof SPACING_OPTIONS)[number]>('4');

  const generateCode = () => `<Stack
  direction="${direction}"
  justifyContent="${justifyContent}"
  alignItems="${alignItems}"
  flexWrap="${flexWrap}"
  spacing={${spacing}}
>
  <StackItem>Item 1</StackItem>
  <StackItem>Item 2</StackItem>
  <StackItem>Item 3</StackItem>
</Stack>`;

  return (
    <PlaygroundShell
      preview={
        <Stack
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
          flexWrap={flexWrap}
          spacing={Number(spacing)}
          className="w-full min-h-40"
        >
          {['bg-blue-500', 'bg-emerald-500', 'bg-amber-500'].map((color, index) => (
            <StackItem key={color}>
              <div className={`${color} rounded p-4 text-white`}>Item {index + 1}</div>
            </StackItem>
          ))}
        </Stack>
      }
      controls={
        <>
          <OptionGroup label="Direction" options={DIRECTIONS} value={direction} onChange={setDirection} />
          <OptionGroup
            label="Justify content"
            options={JUSTIFY_OPTIONS}
            value={justifyContent}
            onChange={setJustifyContent}
          />
          <OptionGroup label="Align items" options={ALIGN_OPTIONS} value={alignItems} onChange={setAlignItems} />
          <OptionGroup label="Flex wrap" options={WRAP_OPTIONS} value={flexWrap} onChange={setFlexWrap} />
          <OptionGroup label="Spacing" options={SPACING_OPTIONS} value={spacing} onChange={setSpacing} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default StackPlayground;
