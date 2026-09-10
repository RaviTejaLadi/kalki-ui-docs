import { useState } from 'react';
import { Heading } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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

type HeadingSettings = Record<StyleSetting, boolean> & {
  as: HeadingLevel;
};

const HEADING_LEVELS: HeadingLevel[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
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

const HeadingPlayground = () => {
  const [settings, setSettings] = useState<HeadingSettings>({
    as: 'h2',
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
    const props = [`as="${settings.as}"`, ...STYLE_SETTINGS.filter((setting) => settings[setting])];
    return `<Heading ${props.join(' ')}>Heading Preview</Heading>`;
  };

  return (
    <PlaygroundShell
      preview={<Heading {...settings}>Heading Preview</Heading>}
      controls={
        <>
          <OptionGroup
            label="Heading level"
            options={HEADING_LEVELS}
            value={settings.as}
            onChange={(as) => setSettings((current) => ({ ...current, as }))}
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

export default HeadingPlayground;
