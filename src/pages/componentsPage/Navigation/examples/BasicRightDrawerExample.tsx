import { Button, Drawer, DrawerHeader, DrawerTitle, DrawerBody } from 'kalki-ui';
import { useState } from 'react';

export const BasicRightDrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Right Drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="400px">
        <DrawerHeader closeButton onClose={() => setIsOpen(false)}>
          <DrawerTitle>Right Drawer</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer opens from the right side.</p>
        </DrawerBody>
      </Drawer>
    </div>
  );
};
