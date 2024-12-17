import React, { useEffect, useState, useRef } from 'react';

interface SystemInfo {
  key: string;
  value: string | number | boolean | null;
}

interface LocationInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

/**
 * A React component that displays detailed system and location information in a table format.
 * 
 * This component collects and displays various system information including:
 * - Browser details (user agent, platform, language)
 * - Screen properties (resolution, color depth)
 * - Network information (connection type, speed)
 * - Battery status (if available)
 * - GPU information
 * - Geolocation data based on IP address
 * 
 * The component also provides functionality to:
 * - View the collected data in a formatted table
 * - Toggle JSON view of the data
 * - Copy the JSON data to clipboard
 * 
 * @returns {JSX.Element} A table displaying system information and location details
 * with options to view and copy data in JSON format
 * 
 * @example
 * ```tsx
 * <SystemInfoTable />
 * ```
 */
const SystemInfoTable: React.FC = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo[]>([]);
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
  const [showJSON, setShowJSON] = useState(false);
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const getSystemInfo = async () => {
      const info: SystemInfo[] = [
        { key: 'User Agent', value: navigator.userAgent },
        { key: 'Platform', value: navigator.platform },
        { key: 'Browser Language', value: navigator.language },
        { key: 'Preferred Languages', value: navigator.languages.join(', ') },
        { key: 'Cookies Enabled', value: navigator.cookieEnabled },
        { key: 'Hardware Concurrency (Cores)', value: navigator.hardwareConcurrency },
        { key: 'Screen Width', value: `${screen.width}px` },
        { key: 'Screen Height', value: `${screen.height}px` },
        { key: 'Available Screen Width', value: `${screen.availWidth}px` },
        { key: 'Available Screen Height', value: `${screen.availHeight}px` },
        { key: 'Color Depth', value: screen.colorDepth },
        { key: 'Pixel Depth', value: screen.pixelDepth },
        { key: 'Viewport Width', value: `${window.innerWidth}px` },
        { key: 'Viewport Height', value: `${window.innerHeight}px` },
        { key: 'Device Pixel Ratio', value: window.devicePixelRatio },
        { key: 'Time Zone', value: Intl.DateTimeFormat().resolvedOptions().timeZone },
        { key: 'Local Date and Time', value: new Date().toString() },
      ];

      // Network Information
      const connection = (navigator as any).connection || {};
      info.push(
        { key: 'Connection Type', value: connection.type || 'N/A' },
        { key: 'Effective Connection Type', value: connection.effectiveType || 'N/A' },
        { key: 'Downlink (Mbps)', value: connection.downlink || 'N/A' },
        { key: 'RTT (ms)', value: connection.rtt || 'N/A' }
      );

      // Battery Information
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          info.push(
            { key: 'Battery Level', value: `${Math.round(battery.level * 100)}%` },
            { key: 'Charging', value: battery.charging },
            { key: 'Charging Time (s)', value: battery.chargingTime || 'N/A' },
            { key: 'Discharging Time (s)', value: battery.dischargingTime || 'N/A' }
          );
        } catch (error) {
          console.error('Error fetching battery information:', error);
        }
      }

      // GPU Information
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo && gl) {
          info.push(
            {
              key: 'GPU Vendor',
              value: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            },
            {
              key: 'GPU Renderer',
              value: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
            }
          );
        }
      } catch (error) {
        console.error('Error fetching GPU information:', error);
      }

      // Fetch user's location based on IP address
      const response = await fetch('https://ipapi.co/json/');
      const locationData = await response.json();
      setLocationInfo({
        ip: locationData.ip,
        city: locationData.city,
        region: locationData.region_name,
        country: locationData.country_name,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timezone: locationData.timezone,
      });

      setSystemInfo(info);
    };

    getSystemInfo();
  }, []);

  const handleCopyJSON = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">System Information</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {systemInfo.map((info, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-4 py-2">{info.key}</td>
              <td className="border border-gray-300 px-4 py-2">{info.value?.toString() || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {locationInfo && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Location Information</h2>
          <p>IP Address: {locationInfo.ip}</p>
          <p>City: {locationInfo.city}</p>
          <p>Region: {locationInfo.region}</p>
          <p>Country: {locationInfo.country}</p>
          <p>Latitude: {locationInfo.latitude}</p>
          <p>Longitude: {locationInfo.longitude}</p>
          <p>Timezone: {locationInfo.timezone}</p>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowJSON(!showJSON)}
        >
          {showJSON ? 'Hide JSON' : 'Show JSON'}
        </button>
        {showJSON && (
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${
              copied ? 'bg-green-600' : ''
            }`}
            onClick={handleCopyJSON}
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        )}
      </div>

      {showJSON && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <textarea
            ref={textAreaRef}
            readOnly
            value={JSON.stringify({ systemInfo, locationInfo }, null, 2)}
            className="w-full h-64 p-2 bg-gray-100 border-none resize-none focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default SystemInfoTable;
