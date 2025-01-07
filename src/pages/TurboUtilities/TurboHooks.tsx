import Drawer from '@/components/common/Drawer';
import { HookOverview } from './docs/hooks/overView';
import { useState } from 'react';
import { hooksOverviewList } from './hooks-docs/hooksOverview';
import { HookDocumentation } from './hooks-docs/components/HookDocumentation';
import { BookOpen } from 'lucide-react';

const TurboHooks = () => {
  const [selectedItem, setSelectedItem] = useState<HookOverview | null>(null);

  const handleOpenDrawer = (item: HookOverview) => {
    setSelectedItem(item);
  };

  const handleCloseDrawer = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hooksOverviewList.map((item) => (
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
        <Drawer isOpen={Boolean(selectedItem)} position="right" width="70%" className="h-screen">
          <Drawer.Header closeButton onClose={handleCloseDrawer}>
            <Drawer.Title className="flex items-center gap-3">
              <div className="p-[.5rem] bg-blue-100 dark:bg-blue-900/20 rounded-md">
                <BookOpen className="size-4 text-blue-500 dark:text-blue-400" />
              </div>
              <span>{selectedItem.title}</span>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body className="overflow-y-auto">
            <HookDocumentation data={selectedItem.docs} />
          </Drawer.Body>
        </Drawer>
      )}
    </div>
  );
};

export default TurboHooks;
