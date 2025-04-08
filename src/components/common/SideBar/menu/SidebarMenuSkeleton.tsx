import React from 'react';
import { Skeleton } from '../../Skeleton';

export const SidebarMenuSkeleton: React.FC = () => {
  return (
    <div className="space-y-2 p-2">
      <Skeleton />
    </div>
  );
};
