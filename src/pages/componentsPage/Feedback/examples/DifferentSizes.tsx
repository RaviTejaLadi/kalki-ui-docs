import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { useState } from 'react';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fullscreen';

const DifferentSizes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<ModalSize>('sm');

  const handleModal = (size: ModalSize, opt: boolean) => {
    setSize(size);
    setIsOpen(opt);
  };

  return (
    <Box>
      <Box padding="10px" margin="10px" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
        {['sm' as const, 'md' as const, 'lg' as const, 'xl' as const, '2xl' as const, 'fullscreen' as const].map(
          (size) => (
            <Button key={size} onClick={() => handleModal(size, true)}>
              {size}
            </Button>
          )
        )}
      </Box>
      <Modal open={isOpen} size={size}>
        <Modal.Header closeButton onClose={() => setIsOpen(false)}>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a large-sized modal.</p>
        </Modal.Body>
      </Modal>
    </Box>
  );
};

export default DifferentSizes;
