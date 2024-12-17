// import{ useState } from 'react';
// import { Timer,  } from 'lucide-react';
// import { turboForEachObject } from '@/modules/object';

// export function PerformanceSection() {
//   const [results, setResults] = useState<{
//     turbo: number;
//     native: number;
//   } | null>(null);

//   const runBenchmark = () => {
//     const testObject = Array.from({ length: 10000 }, (_, i) => i).reduce((acc, curr) => {
//       acc[`key${curr}`] = curr;
//       return acc;
//     }, {} as Record<string, number>);

//     // Warm up
//     for (let i = 0; i < 100; i++) {
//       turboForEachObject(testObject, () => {});
//       Object.entries(testObject).forEach(() => {});
//     }

//     // Benchmark turboForEachObject
//     const turboStart = performance.now();
//     for (let i = 0; i < 1000; i++) {
//       turboForEachObject(testObject, () => {});
//     }
//     const turboEnd = performance.now();

//     // Benchmark native forEach
//     const nativeStart = performance.now();
//     for (let i = 0; i < 1000; i++) {
//       Object.entries(testObject).forEach(() => {});
//     }
//     const nativeEnd = performance.now();

//     setResults({
//       turbo: Number((turboEnd - turboStart).toFixed(2)),
//       native: Number((nativeEnd - nativeStart).toFixed(2)),
//     });
//   };

//   return (
//     <section className="p-6 bg-white rounded-lg shadow-md">
//       <div className="flex items-center gap-2 mb-4">
//         <Timer className="w-6 h-6 text-purple-600" />
//         <h2 className="text-2xl font-bold text-foreground">Performance Comparison</h2>
//       </div>

//       <div className="space-y-4">
//         <p className="text-muted-foreground">
//           Compare the performance between turboForEachObject and native Object.entries().forEach() over 1000 iterations
//           with 10,000 object entries.
//         </p>

//         <button
//           onClick={runBenchmark}
//           className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
//         >
//           Run Benchmark
//         </button>

//         {results && (
//           <div className="mt-6 space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="p-4 bg-gray-50 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-2">Turbo ForEach</h3>
//                 <p className="text-2xl font-bold text-purple-600">{results.turbo}ms</p>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-2">Native ForEach</h3>
//                 <p className="text-2xl font-bold text-purple-600">{results.native}ms</p>
//               </div>
//             </div>

//             <div className="p-4 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Performance Difference</h3>
//               <p className="text-gray-700">
//                 {results.turbo < results.native
//                   ? `Turbo ForEach is ${(((results.native - results.turbo) / results.native) * 100).toFixed(1)}% faster`
//                   : `Native ForEach is ${(((results.turbo - results.native) / results.turbo) * 100).toFixed(
//                       1
//                     )}% faster`}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { Timer, BarChart, Loader2 } from 'lucide-react';
import { turboForEachObject } from '@/modules/object';

export function PerformanceSection() {
  const [results, setResults] = useState<{
    turbo: number;
    native: number;
  } | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runBenchmark = async () => {
    setIsRunning(true);

    // Use setTimeout to allow the loading state to render
    setTimeout(async () => {
      const testObject = Array.from({ length: 10000 }, (_, i) => i).reduce((acc, curr) => {
        acc[`key${curr}`] = curr;
        return acc;
      }, {} as Record<string, number>);

      // Warm up
      for (let i = 0; i < 100; i++) {
        turboForEachObject(testObject, () => {});
        Object.entries(testObject).forEach(() => {});
      }

      // Benchmark turboForEachObject
      const turboStart = performance.now();
      for (let i = 0; i < 1000; i++) {
        turboForEachObject(testObject, () => {});
      }
      const turboEnd = performance.now();

      // Benchmark native forEach
      const nativeStart = performance.now();
      for (let i = 0; i < 1000; i++) {
        Object.entries(testObject).forEach(() => {});
      }
      const nativeEnd = performance.now();

      setResults({
        turbo: Number((turboEnd - turboStart).toFixed(2)),
        native: Number((nativeEnd - nativeStart).toFixed(2)),
      });
      setIsRunning(false);
    }, 100);
  };

  const getSpeedDifference = () => {
    if (!results) return null;
    const diff = (((results.native - results.turbo) / results.native) * 100).toFixed(1);
    const isTurboFaster = results.turbo < results.native;
    return {
      percentage: Math.abs(Number(diff)),
      isTurboFaster,
    };
  };

  const speedDiff = getSpeedDifference();

  return (
    <section className="p-6 bg-white rounded-lg ">
      <div className="flex items-center gap-2 mb-6">
        <Timer className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Performance Comparison</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <p className="text-gray-700">
            This benchmark compares the performance between{' '}
            <code className="bg-purple-100 px-2 py-0.5 rounded">turboForEachObject</code> and native{' '}
            <code className="bg-purple-100 px-2 py-0.5 rounded">Object.entries().forEach()</code> over:
          </p>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>• 1,000 iterations</li>
            <li>• 10,000 object entries</li>
            <li>• Warm-up phase included</li>
          </ul>
        </div>

        <button
          onClick={runBenchmark}
          disabled={isRunning}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.02] ${
            isRunning
              ? 'bg-purple-100 text-purple-400 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {isRunning ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Running Benchmark...
              </>
            ) : (
              <>
                <BarChart className="w-5 h-5" />
                Run Performance Test
              </>
            )}
          </div>
        </button>

        {results && !isRunning && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Turbo ForEach</h3>
                <p className="text-3xl font-bold text-purple-600">{results.turbo}ms</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Native ForEach</h3>
                <p className="text-3xl font-bold text-purple-600">{results.native}ms</p>
              </div>
            </div>

            {speedDiff && (
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Analysis</h3>
                <div className="flex items-center gap-3">
                  <div
                    className={`text-4xl font-bold ${speedDiff.isTurboFaster ? 'text-green-600' : 'text-orange-600'}`}
                  >
                    {speedDiff.percentage}%
                  </div>
                  <div className="text-gray-700">
                    <p className="font-medium">{speedDiff.isTurboFaster ? 'Faster' : 'Slower'} than native forEach</p>
                    <p className="text-sm mt-1 text-gray-500">
                      {speedDiff.isTurboFaster
                        ? 'turboForEachObject shows better performance'
                        : 'Native forEach performs better in this case'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
