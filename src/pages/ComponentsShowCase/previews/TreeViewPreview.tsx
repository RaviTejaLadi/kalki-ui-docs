import TreeView from '@/components/common/TreeView/TreeView';

const sampleData = {
  name: 'Root',
  children: [
    { name: 'Folder A', children: [{ name: 'File 1' }, { name: 'File 2' }] },
    { name: 'Folder B', children: [{ name: 'File 3' }] },
  ],
};

export const TreeViewPreviews = {
  basic: (
    <div className="text-sm max-w-[200px]">
      <TreeView data={sampleData} showCheckBox={false} />
    </div>
  ),
};
