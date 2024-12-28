import Drawer from '@/components/common/Drawer';
import { hooksOverview } from './docs/hooks/overView';
import { useState } from 'react';
import { HookDocs } from './docs/hooks/docs/HookDocs';

interface HookItem {
  id: string;
  title: string;
  desc: string;
}

const TurboHooks = () => {
  const [selectedItem, setSelectedItem] = useState<HookItem | null>(null);

  const handleOpenDrawer = (item: HookItem) => {
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hooksOverview.map((item) => (
          <div
            key={item.id}
            className="rounded-md p-4 dark:bg-background/10 border dark:border-gray-200/10 hover:shadow-md transition"
            onClick={() => handleOpenDrawer(item)}
          >
            <h3 className="text-sm font-medium text-purple-500">{item.title}</h3>
            <p className="text-xs py-1 text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Drawer isOpen={Boolean(selectedItem)} position="right" width="60%">
          <Drawer.Header closeButton onClose={handleCloseDrawer}>
            <Drawer.Title>{selectedItem.title}</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            {/* <p>{selectedItem.desc}</p> */}
            <HookDocs/>
          </Drawer.Body>
        </Drawer>
      )}
    </div>
  );
};

export default TurboHooks;
