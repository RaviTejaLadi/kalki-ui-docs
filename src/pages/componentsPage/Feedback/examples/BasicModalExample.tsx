import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal/Modal';
import { useState } from 'react';

export const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <Modal open={isOpen} size="md" onClose={() => setIsOpen(false)} position="top" >
          <Modal.Header closeButton onClose={() => setIsOpen(false)}>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This is the modal content.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
