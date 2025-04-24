import { ExternalLink, Code, Info } from 'lucide-react';
import { ComponentMeta, statusProps } from '../types/ComponentMeta';

interface ComponentMetaCardProps {
  meta: ComponentMeta;
}

export default function ComponentMetaCard({ meta }: ComponentMetaCardProps) {
  const entries = Object.entries(meta).filter(([, v]) => v !== undefined && v !== '');

  // Status badge styling
  const getStatusBadgeStyle = (status: statusProps) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'beta':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'deprecated':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'experimental':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  // Format label function
  const formatLabel = (key: string): string => {
    return key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Render value based on key type
  const renderValue = (key: string, value: string) => {
    if (key === 'status') {
      return (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full inline-flex items-center ${getStatusBadgeStyle(
            value as statusProps
          )}`}
        >
          <span
            className={`mr-1 w-2 h-2 rounded-full ${
              value === 'stable'
                ? 'bg-green-500'
                : value === 'deprecated'
                ? 'bg-red-500'
                : value === 'beta'
                ? 'bg-blue-500'
                : 'bg-amber-500'
            }`}
          />
          {value}
        </span>
      );
    }

    if (key === 'import' || key === 'source') {
      return (
        <div className="font-mono bg-gray-100 dark:bg-gray-800/60 rounded px-2 py-1 text-xs overflow-x-auto">
          {value}
        </div>
      );
    }

    if (key === 'createAnIssue') {
      return (
        <a
          href={value}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={14} className="mr-1" />
          Create issue
        </a>
      );
    }

    return Array.isArray(value) ? value.join(', ') : value;
  };

  return (
    <div className="rounded-lg border dark:border-gray-800 border-gray-200 my-4 overflow-hidden transition-all ">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
          <Info size={18} className="mr-2 text-[--icon-color]" />
          Component Metadata
        </h2>
        {meta.componentName && (
          <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium text-foreground">
            {meta.componentName}
          </div>
        )}
      </div>

      <div className="p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="group hover:bg-gray-50 space-y-2 dark:hover:bg-gray-900/40 p-3 rounded-md transition-colors"
            >
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 flex items-center">
                <Code size={14} className="mr-1.5 opacity-70" />
                {formatLabel(key)}
              </dt>
              <dd className="text-sm text-gray-900 dark:text-gray-200 break-words">{renderValue(key, value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
