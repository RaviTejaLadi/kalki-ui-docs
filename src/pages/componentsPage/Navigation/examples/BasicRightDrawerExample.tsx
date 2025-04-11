import Button from '@/components/common/Button';
import Drawer from '@/components/common/Drawer';
import { useState } from 'react';

export const BasicRightDrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Right Drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="400px">
        <Drawer.Header closeButton onClose={() => setIsOpen(false)}>
          <Drawer.Title>Right Drawer</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer opens from the right side.</p>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};
