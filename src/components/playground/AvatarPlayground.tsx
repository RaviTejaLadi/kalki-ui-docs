import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const AVATAR_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
const AVATAR_SHAPES = ['circle', 'square'] as const;
const AVATAR_URL = 'https://github.com/shadcn.png';

type Size = (typeof AVATAR_SIZES)[number];
type Shape = (typeof AVATAR_SHAPES)[number];

const AvatarPlayground = () => {
  const [size, setSize] = useState<Size>('md');
  const [shape, setShape] = useState<Shape>('circle');
  const [showImage, setShowImage] = useState(true);

  const generateCode = () => `<Avatar size="${size}" shape="${shape}">
${showImage ? `  <AvatarImage src="${AVATAR_URL}" alt="Avatar" />\n` : ''}  <AvatarFallback>KU</AvatarFallback>
</Avatar>`;

  return (
    <PlaygroundShell
      preview={
        <Avatar size={size} shape={shape}>
          {showImage && <AvatarImage src={AVATAR_URL} alt="Avatar" />}
          <AvatarFallback>KU</AvatarFallback>
        </Avatar>
      }
      controls={
        <>
          <OptionGroup label="Size" options={AVATAR_SIZES} value={size} onChange={setSize} />
          <OptionGroup label="Shape" options={AVATAR_SHAPES} value={shape} onChange={setShape} />
          <CheckboxGrid options={[{ label: 'Show image', checked: showImage, onChange: setShowImage }]} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default AvatarPlayground;
