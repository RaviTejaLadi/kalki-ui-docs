import { useState } from 'react';
import { Star } from 'lucide-react';
import { Tag, TagClose, TagIcon, TagText } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, COLOR_VARIANTS, OptionGroup } from './PlaygroundShell';

const TAG_VARIANTS = COLOR_VARIANTS.filter((variant) => variant !== 'help');
const TAG_SIZES = ['xs', 'sm', 'md', 'lg'] as const;

type TagVariant = (typeof TAG_VARIANTS)[number];
type TagSize = (typeof TAG_SIZES)[number];

const TagPlayground = () => {
  const [variant, setVariant] = useState<TagVariant>('primary');
  const [size, setSize] = useState<TagSize>('sm');
  const [withIcon, setWithIcon] = useState(true);
  const [withClose, setWithClose] = useState(true);
  const [visible, setVisible] = useState(true);

  const generateCode = () => {
    const children = [
      withIcon &&
        `  <TagIcon>
    <Star className="size-3" />
  </TagIcon>`,
      '  <TagText>Design</TagText>',
      withClose && '  <TagClose onClick={() => {}} />',
    ].filter(Boolean);

    return `<Tag variant="${variant}" size="${size}">
${children.join('\n')}
</Tag>`;
  };

  return (
    <PlaygroundShell
      preview={
        visible ? (
          <Tag variant={variant} size={size}>
            {withIcon && (
              <TagIcon>
                <Star className="size-3" />
              </TagIcon>
            )}
            <TagText>Design</TagText>
            {withClose && <TagClose onClick={() => setVisible(false)} />}
          </Tag>
        ) : (
          <button type="button" className="text-sm underline" onClick={() => setVisible(true)}>
            Reset tag
          </button>
        )
      }
      controls={
        <>
          <OptionGroup label="Variant" options={TAG_VARIANTS} value={variant} onChange={setVariant} />
          <OptionGroup label="Size" options={TAG_SIZES} value={size} onChange={setSize} />
          <CheckboxGrid
            options={[
              { label: 'With icon', checked: withIcon, onChange: setWithIcon },
              { label: 'With close', checked: withClose, onChange: setWithClose },
            ]}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default TagPlayground;
