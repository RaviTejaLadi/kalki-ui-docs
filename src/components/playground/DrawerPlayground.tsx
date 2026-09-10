import { useState } from 'react';
import { Button, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

const POSITIONS = ['top', 'right', 'bottom', 'left'] as const;
const WIDTHS = ['280px', '360px', '480px'] as const;

type Position = (typeof POSITIONS)[number];
type Width = (typeof WIDTHS)[number];

const DrawerPlayground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>('right');
  const [width, setWidth] = useState<Width>('360px');

  const isHorizontal = position === 'left' || position === 'right';

  const generateCode = () => `<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
<Drawer
  isOpen={isOpen}
  position="${position}"
  ${isHorizontal ? `width="${width}"` : 'height="240px"'}
  onClose={() => setIsOpen(false)}
>
  <DrawerHeader closeButton onClose={() => setIsOpen(false)}>
    <DrawerTitle>Navigation</DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
    Use drawers for secondary navigation and contextual panels.
  </DrawerBody>
</Drawer>`;

  return (
    <PlaygroundShell
      preview={
        <>
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          <Drawer
            isOpen={isOpen}
            position={position}
            width={isHorizontal ? width : undefined}
            height={!isHorizontal ? '240px' : undefined}
            onClose={() => setIsOpen(false)}
          >
            <DrawerHeader closeButton onClose={() => setIsOpen(false)}>
              <DrawerTitle>Navigation</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Use drawers for secondary navigation and contextual panels.</DrawerBody>
          </Drawer>
        </>
      }
      controls={
        <>
          <OptionGroup label="Position" options={POSITIONS} value={position} onChange={setPosition} />
          {isHorizontal && <OptionGroup label="Width" options={WIDTHS} value={width} onChange={setWidth} />}
        </>
      }
      code={generateCode()}
    />
  );
};

export default DrawerPlayground;
