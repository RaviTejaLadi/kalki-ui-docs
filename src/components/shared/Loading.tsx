import { Loader2 } from 'lucide-react';
import Div from '../common/Div';

export default function Loading() {
  return (
    <Div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900 dark:from-purple-200 dark:via-purple-300 dark:to-purple-400">
      <Div className="flex flex-col items-center space-y-4 animate-fade-in">
        <Div className="relative">
          <Div className="absolute inset-0 animate-pulse rounded-full bg-purple-500 opacity-30 blur-xl" />
          <Loader2 className="animate-spin text-purple-200 dark:text-purple-800 h-12 w-12" />
        </Div>
        <p className="text-xl font-bold text-purple-100 dark:text-purple-900 animate-bounce">Please wait, loading...</p>
        <Div className="w-40 bg-gray-700 dark:bg-gray-200 rounded-full h-2 overflow-hidden">
          <Div className="bg-gradient-to-r from-purple-300 to-purple-500 dark:from-purple-500 dark:to-purple-700 h-full w-1/2 animate-loading-bar rounded-full" />
        </Div>
      </Div>
    </Div>
  );
}
