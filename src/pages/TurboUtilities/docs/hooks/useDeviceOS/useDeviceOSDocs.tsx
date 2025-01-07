export const useDeviceOSDocs = {
  title: 'useDeviceOS',
  description:
    "A React hook that determines the operating system of the user's device based on the browser's navigator API and user agent information.",
  example: (
    <pre>
      {`import { useDeviceOS } from './hooks';
  
        const DeviceInfo = () => {
          const os = useDeviceOS();
          return <div>Your device OS is: {os}</div>;
        };`}
    </pre>
  ),
  docs: [
    {
      title: 'Features',
      list: [
        {
          item: 'User Agent Data Integration',
          options: [
            'Utilizes the modern Navigator.userAgentData API for accurate detection.',
            'Fallbacks to older userAgent string parsing when userAgentData is unavailable.',
            'Handles mobile emulators effectively.',
          ],
        },
        {
          item: 'Cross-Platform Support',
          options: [
            'Supports iOS, Linux, Windows, and other platforms.',
            'Dynamically identifies unique platforms using regex.',
            "Provides a default 'Unknown' OS if the platform cannot be determined.",
          ],
        },
        {
          item: 'Robust Parsing',
          options: [
            'Uses a regex-based approach to extract platform details from user agent strings.',
            'Handles edge cases like incomplete or unconventional user agent strings.',
            'Minimizes errors by providing defaults when parsing fails.',
          ],
        },
      ],
    },
    {
      title: 'Implementation Details',
      list: [
        {
          item: 'Navigator.userAgentData',
          options: [
            'Accesses the platform property from the Navigator.userAgentData object.',
            'Simplifies OS identification for browsers supporting the API.',
            'Offers a more secure and privacy-preserving alternative to userAgent.',
          ],
        },
        {
          item: 'Fallback Logic',
          options: [
            'Implements a checkOSBasedOnAgentInfo function for fallback detection.',
            "Handles common user agent substrings like 'iPhone', 'iPad', 'Linux', and 'Windows'.",
            'Returns the most likely OS based on heuristic matching.',
          ],
        },
        {
          item: 'Custom Parsing',
          options: [
            'Includes an extractUniqueOS function to handle obscure or unique platforms.',
            'Extracts and formats platform details using regex.',
            'Provides consistent output for unconventional user agents.',
          ],
        },
      ],
    },
    {
      title: 'Example Use Cases',
      list: [
        {
          item: 'Platform-Specific UI',
          options: [
            "Display tailored UI elements based on the user's operating system.",
            'Offer platform-specific instructions for software downloads.',
            'Enhance user experience by pre-configuring options based on OS.',
          ],
        },
        {
          item: 'Analytics',
          options: [
            'Track the distribution of operating systems among your users.',
            'Generate reports to identify platform-specific trends.',
            'Optimize development focus based on usage patterns.',
          ],
        },
        {
          item: 'Error Reporting',
          options: [
            "Include the user's OS information in bug reports.",
            'Facilitate platform-specific debugging and testing.',
            'Identify OS-specific performance issues or compatibility problems.',
          ],
        },
      ],
    },
    {
      title: 'Best Practices',
      list: [
        {
          item: 'Graceful Fallbacks',
          options: [
            "Always provide a default return value (e.g., 'Unknown') for undetected OS.",
            'Handle edge cases and unusual user agent strings.',
            'Ensure compatibility with older browsers by supporting userAgent fallback.',
          ],
        },
        {
          item: 'Security and Privacy',
          options: [
            'Prefer using userAgentData when available for enhanced privacy.',
            'Avoid over-relying on userAgent strings due to spoofing risks.',
            'Minimize data collection to only necessary information.',
          ],
        },
        {
          item: 'Testing and Validation',
          options: [
            'Test the hook across multiple platforms and browsers.',
            'Simulate various user agent strings to validate fallback logic.',
            'Regularly update the parsing logic to handle new platforms or API changes.',
          ],
        },
      ],
    },
  ],
};
