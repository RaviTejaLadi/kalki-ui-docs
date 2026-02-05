import JsonViewer from '@/components/common/JsonViewer';

export const JsonViewerPreviews = {
  basic: (
    <div className="max-h-24 overflow-auto rounded border p-2 text-xs dark:border-gray-200/10">
      <JsonViewer data={{ name: 'Preview', count: 42, active: true }} indentation={2} />
    </div>
  ),
};
