import { useBatteryStatus } from '@/modules/hooks';
import React from 'react';

const BatteryStatusDisplay: React.FC = () => {
  const { level, isCharging } = useBatteryStatus();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
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
