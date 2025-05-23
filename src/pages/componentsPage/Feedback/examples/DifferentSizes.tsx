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

  const getReadableSize = (size: ModalSize) => {
    switch (size) {
      case 'sm':
        return 'Small';
      case 'md':
        return 'Medium';
      case 'lg':
        return 'Large';
      case 'xl':
        return 'Extra Large';
      case '2xl':
        return '2X Large';
      case 'fullscreen':
        return 'Fullscreen';
      default:
        return '';
    }
  };

  return (
    <Box>
      <Box padding="10px" margin="10px" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
        {['sm', 'md', 'lg', 'xl', '2xl', 'fullscreen'].map((size) => (
          <Button key={size} onClick={() => handleModal(size as ModalSize, true)}>
            {size}
          </Button>
        ))}
      </Box>

      <Modal open={isOpen} size={size}>
        <Modal.Header closeButton onClose={() => setIsOpen(false)}>
          <Modal.Title>{getReadableSize(size)} Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a {getReadableSize(size).toLowerCase()}-sized modal.</p>
        </Modal.Body>
      </Modal>
    </Box>
  );
};

export default DifferentSizes;
