import { Button, Modal, ModalHeader, ModalFooter, ModalTitle, ModalBody } from 'kalki-ui';
import { useState } from 'react';

export const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <Modal open={isOpen} size="md" onClose={() => setIsOpen(false)} position="top">
          <ModalHeader closeButton onClose={() => setIsOpen(false)}>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This is the modal content.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};
