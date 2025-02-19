import { Loader2 } from 'lucide-react';
import Div from '../common/Div';

export default function Loading() {
  return (
    <Div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-100 dark:from-sky-300 dark:via-blue-400 dark:to-cyan-300">
      <Div className="flex flex-col items-center space-y-4 animate-fade-in">
        <Div className="relative">
          <Div className="absolute inset-0 animate-pulse rounded-full bg-sky-300 opacity-40 blur-xl" />
          <Loader2 className="animate-spin text-sky-600 dark:text-sky-800 h-12 w-12" />
        </Div>
        <p className="text-xl font-bold text-sky-700 dark:text-sky-900 animate-bounce">Please wait, loading...</p>
        <Div className="w-40 bg-gray-300 dark:bg-gray-500 rounded-full h-2 overflow-hidden">
          <Div className="bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-700 h-full w-1/2 animate-loading-bar rounded-full" />
        </Div>
      </Div>
    </Div>
  );
}
