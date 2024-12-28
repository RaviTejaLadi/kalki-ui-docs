import { useWindowSize } from '@/modules/hooks';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

export const ResponsiveCard = () => {
  // Using our custom hook to get window dimensions
  const { width } = useWindowSize();

  // Determine device type based on window width
  const getDeviceType = () => {
    if (width < 640) return { type: 'Mobile', Icon: Smartphone };
    if (width < 1024) return { type: 'Tablet', Icon: Tablet };
    return { type: 'Desktop', Icon: Monitor };
  };

  const { type, Icon } = getDeviceType();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Window Size Demo</h2>
        <p className="text-gray-600 mb-4">
          Current window dimensions:
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            Width: <span className="font-mono">{width}px</span>
          </p>
          <p className="text-sm text-gray-500">
            Device Type: <span className="font-semibold text-blue-500">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};