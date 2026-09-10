import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'kalki-ui';
import PlaygroundShell, { OptionGroup, SIZES_SM_2XL } from './PlaygroundShell';

const POSITIONS = ['top', 'right', 'bottom', 'left', 'center'] as const;
const MODAL_SIZES = [...SIZES_SM_2XL, 'fullscreen'] as const;

type Position = (typeof POSITIONS)[number];
type ModalSize = (typeof MODAL_SIZES)[number];

const ModalPlayground = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>('center');
  const [size, setSize] = useState<ModalSize>('md');

  const code = `<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal
  open={open}
  position="${position}"
  size="${size}"
  onClose={() => setOpen(false)}
>
  <ModalHeader closeButton onClose={() => setOpen(false)}>
    <ModalTitle>Confirm action</ModalTitle>
  </ModalHeader>
  <ModalBody>
    This modal demonstrates position and size variants for overlays.
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={() => setOpen(false)}>Confirm</Button>
  </ModalFooter>
</Modal>`;

  return (
    <PlaygroundShell
      preview={
        <>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal open={open} position={position} size={size} onClose={() => setOpen(false)}>
            <ModalHeader closeButton onClose={() => setOpen(false)}>
              <ModalTitle>Confirm action</ModalTitle>
            </ModalHeader>
            <ModalBody>This modal demonstrates position and size variants for overlays.</ModalBody>
            <ModalFooter className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </ModalFooter>
          </Modal>
        </>
      }
      controls={
        <>
          <OptionGroup label="Position" options={POSITIONS} value={position} onChange={setPosition} />
          <OptionGroup label="Size" options={MODAL_SIZES} value={size} onChange={setSize} />
        </>
      }
      code={code}
    />
  );
};

export default ModalPlayground;
