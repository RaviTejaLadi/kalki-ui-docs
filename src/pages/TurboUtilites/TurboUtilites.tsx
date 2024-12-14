// import { turboAssign } from '@/modules/object';
// import React, { useState } from 'react';
// function measurePerformance(fn: () => void, iterations = 10000): number {
//   const start = performance.now();
//   for (let i = 0; i < iterations; i++) {
//     fn();
//   }
//   return performance.now() - start;
// }

// const TurboUtilites: React.FC = () => {
//   const [results, setResults] = useState<{
//     turboAssignExamples: any[];
//     objectAssignExamples: any[];
//     performanceResults: {
//       turboAssign: number;
//       objectAssign: number;
//     };
//   }>({
//     turboAssignExamples: [],
//     objectAssignExamples: [],
//     performanceResults: {
//       turboAssign: 0,
//       objectAssign: 0,
//     },
//   });

//   const runComparisons = () => {
//     // TurboAssign Examples
//     const turboAssignExamples = [
//       // Example 1: Basic Object Merging
//       (() => {
//         const target = { a: 1 };
//         const result = turboAssign(target, { b: 2 }, { c: 3 });
//         return result;
//       })(),

//       // Example 2: Overwriting Existing Properties
//       (() => {
//         const target = { x: 'original' };
//         const result = turboAssign(target, { x: 'overwritten' });
//         return result;
//       })(),

//       // Example 3: Merging Nested Objects
//       (() => {
//         const target = { user: { name: 'John' } };
//         const result = turboAssign(target, { user: { age: 30 } });
//         return result;
//       })(),

//       // Example 4: Mixing Different Types
//       (() => {
//         const target = { a: 1 };
//         const result = turboAssign(target, { b: 'string' }, { c: true });
//         return result;
//       })(),

//       // Example 5: Deep Merge Limitation Demonstration
//       (() => {
//         const target = { nested: { a: 1 } };
//         const result = turboAssign(target, { nested: { b: 2 } });
//         return result;
//       })(),
//     ];

//     // Object.assign Examples
//     const objectAssignExamples = [
//       // Example 1: Basic Object Merging
//       (() => {
//         const target = { a: 1 };
//         const result = Object.assign(target, { b: 2 }, { c: 3 });
//         return result;
//       })(),

//       // Example 2: Overwriting Existing Properties
//       (() => {
//         const target = { x: 'original' };
//         const result = Object.assign(target, { x: 'overwritten' });
//         return result;
//       })(),

//       // Example 3: Merging Nested Objects
//       (() => {
//         const target = { user: { name: 'John' } };
//         const result = Object.assign(target, { user: { age: 30 } });
//         return result;
//       })(),

//       // Example 4: Mixing Different Types
//       (() => {
//         const target = { a: 1 };
//         const result = Object.assign(target, { b: 'string' }, { c: true });
//         return result;
//       })(),

//       // Example 5: Deep Merge Limitation Demonstration
//       (() => {
//         const target = { nested: { a: 1 } };
//         const result = Object.assign(target, { nested: { b: 2 } });
//         return result;
//       })(),
//     ];

//     // Performance Measurement
//     const turboAssignPerf = measurePerformance(() => {
//       const target = { a: 1 };
//       turboAssign(target, { b: 2 }, { c: 3 });
//     });

//     const objectAssignPerf = measurePerformance(() => {
//       const target = { a: 1 };
//       Object.assign(target, { b: 2 }, { c: 3 });
//     });

//     setResults({
//       turboAssignExamples,
//       objectAssignExamples,
//       performanceResults: {
//         turboAssign: turboAssignPerf,
//         objectAssign: objectAssignPerf,
//       },
//     });
//   };
//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">TurboAssign vs Object.assign Comparison</h1>

//       <button onClick={runComparisons} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
//         Run Comparisons
//       </button>

//       {results.turboAssignExamples.length > 0 && (
//         <div className="grid md:grid-cols-2 gap-4">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">TurboAssign Examples</h2>
//             {results.turboAssignExamples.map((example, index) => (
//               <pre key={index} className="bg-gray-100 p-2 rounded mb-2 text-sm overflow-auto">
//                 {JSON.stringify(example, null, 2)}
//               </pre>
//             ))}
//             <div className="bg-green-100 p-2 rounded">
//               Performance: {results.performanceResults.turboAssign.toFixed(4)} ms
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">Object.assign Examples</h2>
//             {results.objectAssignExamples.map((example, index) => (
//               <pre key={index} className="bg-gray-100 p-2 rounded mb-2 text-sm overflow-auto">
//                 {JSON.stringify(example, null, 2)}
//               </pre>
//             ))}
//             <div className="bg-green-100 p-2 rounded">
//               Performance: {results.performanceResults.objectAssign.toFixed(4)} ms
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="mt-4 bg-yellow-100 p-2 rounded">
//         <h3 className="font-bold">Performance Comparison Notes:</h3>
//         <ul className="list-disc list-inside">
//           <li>Performance measured over 10,000 iterations</li>
//           <li>Lower time indicates faster execution</li>
//           <li>Actual performance may vary based on environment</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TurboUtilites;

import { Zap } from 'lucide-react';
import React from 'react';
import { ExplanationSection } from './ExplanationSection';
import { ExampleSection } from './ExampleSection';
import { PerformanceSection } from './PerformanceSection';
import SystemInfoTable from '../SystemInfoTable';

const TurboUtilites: React.FC = () => {
  return (
    <div className="container bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-8">
        <header className="bg-white rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Turbo Utilities
                </h1>
                <p className="text-muted-foreground mt-1">High-performance JavaScript utilities</p>
              </div>
            </div>
          </div>
        </header>

        <ExplanationSection />
        {/* <ExampleSection /> */}
        <PerformanceSection />
      </div>
      {/* <SystemInfoTable/> */}
    </div>
  );
};

export default TurboUtilites;
