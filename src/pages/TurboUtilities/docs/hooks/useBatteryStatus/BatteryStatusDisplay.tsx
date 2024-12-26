import { useBatteryStatus } from '@/modules/hooks';
import React from 'react';

const BatteryStatusDisplay: React.FC = () => {
  const { level, isCharging } = useBatteryStatus();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <div className="font-sans leading-relaxed p-5">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Explanation of the <code className="bg-gray-100 px-1 py-0.5 rounded">useBatteryStatus</code> Hook
        </h1>
        <p className="mb-4">
          This custom React hook (<code className="bg-gray-100 px-1 py-0.5 rounded">useBatteryStatus</code>) is designed
          to fetch and monitor the battery status of the user's device. It leverages the{' '}
          <strong>Battery Status API</strong> (via{' '}
          <code className="bg-gray-100 px-1 py-0.5 rounded">navigator.getBattery</code>) to provide information about:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            The current battery level (as a percentage, e.g.,{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded">80</code> for 80%).
          </li>
          <li>
            Whether the device is currently charging (<code className="bg-gray-100 px-1 py-0.5 rounded">true</code> or{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded">false</code>).
          </li>
        </ul>
        <h2 className="text-xl text-gray-700 font-semibold mb-3">Features of the Hook</h2>
        <h3 className="text-lg text-gray-600 font-medium mb-2">Initialization:</h3>
        <p className="mb-4">Fetches the current battery status when the component mounts.</p>
        <h3 className="text-lg text-gray-600 font-medium mb-2">Real-Time Updates:</h3>
        <p className="mb-4">
          Listens to <code className="bg-gray-100 px-1 py-0.5 rounded">chargingchange</code> and{' '}
          <code className="bg-gray-100 px-1 py-0.5 rounded">levelchange</code> events to keep the status updated in
          real-time.
        </p>
        <h3 className="text-lg text-gray-600 font-medium mb-2">Cleanup:</h3>
        <p>Removes event listeners when the component unmounts.</p>
      </div>

      <h1>Battery Status</h1>
      <p>
        <strong>Battery Level:</strong> {level}%
      </p>
      <p>
        <strong>Charging Status:</strong> {isCharging ? 'Charging 🔌' : 'Not Charging 🔋'}
      </p>
    </div>
  );
};

export default BatteryStatusDisplay;
