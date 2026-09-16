import { useState } from 'react';
import { Banner, BannerSubTitle, BannerTitle, Button } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, OptionGroup } from './PlaygroundShell';

const BANNER_SIZES = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;

const BannerPlayground = () => {
  const [size, setSize] = useState<(typeof BANNER_SIZES)[number]>('md');
  const [controls, setControls] = useState(true);

  const generateCode = () => `<Banner size="${size}"${
    controls ? '\n  controls={<Button size="sm">Learn more</Button>}' : ''
  }>
  <BannerTitle>Welcome to Kalki UI</BannerTitle>
  <BannerSubTitle>Build polished interfaces with composable components.</BannerSubTitle>
</Banner>`;

  return (
    <PlaygroundShell
      preview={
        <Banner
          size={size}
          controls={controls ? <Button size="sm">Learn more</Button> : undefined}
          className="w-full"
        >
          <BannerTitle>Welcome to Kalki UI</BannerTitle>
          <BannerSubTitle>Build polished interfaces with composable components.</BannerSubTitle>
        </Banner>
      }
      controls={
        <>
          <OptionGroup label="Size" options={BANNER_SIZES} value={size} onChange={setSize} />
          <CheckboxGrid options={[{ label: 'Controls', checked: controls, onChange: setControls }]} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default BannerPlayground;
