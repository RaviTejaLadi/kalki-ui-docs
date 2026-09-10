import { useState } from 'react';
import { Paragraph } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup, SIZES_XS_3XL } from './PlaygroundShell';

type ParagraphSize = 'default' | (typeof SIZES_XS_3XL)[number];
type StyleSetting =
  | 'underline'
  | 'overline'
  | 'dashed'
  | 'italic'
  | 'strong'
  | 'strikethrough'
  | 'marked'
  | 'smaller'
  | 'deleted'
  | 'inserted';

type ParagraphSettings = Record<StyleSetting, boolean> & {
  size: ParagraphSize;
};

const PARAGRAPH_SIZES: ParagraphSize[] = ['default', ...SIZES_XS_3XL];
const STYLE_SETTINGS: StyleSetting[] = [
  'underline',
  'overline',
  'dashed',
  'italic',
  'strong',
  'strikethrough',
  'marked',
  'smaller',
  'deleted',
  'inserted',
];
const SAMPLE_TEXT =
  'This sample paragraph demonstrates how your content will look with the selected typography settings.';

const ParagraphPlayground = () => {
  const [settings, setSettings] = useState<ParagraphSettings>({
    size: 'default',
    underline: false,
    overline: false,
    dashed: false,
    italic: false,
    strong: false,
    strikethrough: false,
    marked: false,
    smaller: false,
    deleted: false,
    inserted: false,
  });

  const generateCode = () => {
    const props = [`size="${settings.size}"`, ...STYLE_SETTINGS.filter((setting) => settings[setting])];
    return `<Paragraph ${props.join(' ')}>\n  ${SAMPLE_TEXT}\n</Paragraph>`;
  };

  return (
    <PlaygroundShell
      preview={<Paragraph {...settings}>{SAMPLE_TEXT}</Paragraph>}
      controls={
        <>
          <OptionGroup
            label="Size"
            options={PARAGRAPH_SIZES}
            value={settings.size}
            onChange={(size) => setSettings((current) => ({ ...current, size }))}
          />
          <CheckboxGrid
            options={STYLE_SETTINGS.map((setting) => ({
              label: setting.charAt(0).toUpperCase() + setting.slice(1),
              checked: settings[setting],
              onChange: (checked) => setSettings((current) => ({ ...current, [setting]: checked })),
            }))}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default ParagraphPlayground;
