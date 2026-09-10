import { useState } from 'react';
import { Box } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const SHADOWS = ['none', 'sm', 'normal', 'md', 'lg', 'xl', '2xl', 'inner'] as const;
type Shadow = (typeof SHADOWS)[number];

const BoxPlayground = () => {
  const [shadow, setShadow] = useState<Shadow>('md');
  const [outlined, setOutlined] = useState(false);
  const [rounded, setRounded] = useState(true);

  const generateCode = () => `<Box
  shadow="${shadow}"
  padding="24px"${outlined ? '\n  outlined' : ''}${rounded ? '\n  rounded' : ''}
>
  Box content
</Box>`;

  return (
    <PlaygroundShell
      preview={
        <Box shadow={shadow} outlined={outlined} rounded={rounded} padding="24px">
          Box content
        </Box>
      }
      controls={
        <>
          <OptionGroup label="Shadow" options={SHADOWS} value={shadow} onChange={setShadow} />
          <CheckboxGrid
            options={[
              { label: 'Outlined', checked: outlined, onChange: setOutlined },
              { label: 'Rounded', checked: rounded, onChange: setRounded },
            ]}
          />
        </>
      }
      code={generateCode()}
    />
  );
};

export default BoxPlayground;
