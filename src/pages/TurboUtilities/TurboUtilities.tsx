import { Zap } from 'lucide-react';
import React from 'react';
import { overView } from './docs/overview';
import Link from '@/components/common/Link';

const TurboUtilities: React.FC = () => {
  return (
    <div className="container bg-background dark:bg-inherit py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-8">
        <header className="bg-background dark:bg-inherit rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl tracking-wide font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Turbo Utilities
                </h1>
                <p className="text-muted-foreground mt-1 tracking-wide">
                  High-performance JavaScript and React utilities
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {overView.map((item) => (
            <Link
              key={item.id}
              className=" rounded-md p-4 dark:bg-background/10 border dark:border-gray-200/10  hover:shadow-md transition"
              to={item.path}
            >
              <h3 className="text-sm font-medium text-purple-500">{item.title}</h3>
              <p className="text-xs py-1 text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurboUtilities;
