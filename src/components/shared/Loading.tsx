import { Loader2 } from 'lucide-react';
import Div from '../common/Div';

export default function Loading() {
  return (
    <Div className="flex justify-center items-center w-full h-full p-4">
      <Div className="flex items-center space-x-2">
        <Loader2 className="animate-spin text-purple-500 h-8 w-8" />
        <p className="text-lg font-semibold text-purple-600">Loading...</p>
      </Div>
    </Div>
  );
}
