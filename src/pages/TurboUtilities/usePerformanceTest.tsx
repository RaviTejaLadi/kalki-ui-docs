import { useState } from 'react';

export interface TestResult {
  turbo: number;
  native: number;
  difference: {
    percentage: number;
    isTurboFaster: boolean;
  };
}

interface TestConfig {
  iterations?: number;
  warmupIterations?: number;
  delay?: number;
}

export function usePerformanceTest(
  turboFn: Function,
  nativeFn: Function,
  setupFn?: () => any,
  config: TestConfig = {}
) {
  const [results, setResults] = useState<TestResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { iterations = 1000, warmupIterations = 100, delay = 100 } = config;

  const calculateSpeedDifference = (turboTime: number, nativeTime: number) => {
    const diff = ((nativeTime - turboTime) / nativeTime) * 100;
    return {
      percentage: Math.abs(Number(diff.toFixed(1))),
      isTurboFaster: turboTime < nativeTime,
    };
  };

  const runBenchmark = async () => {
    setIsRunning(true);
    setError(null);

    try {
      // Use setTimeout to allow the loading state to render
      setTimeout(async () => {
        try {
          // Setup test data
          const testData = setupFn ? setupFn() : null;

          // Warm up phase
          for (let i = 0; i < warmupIterations; i++) {
            turboFn(testData);
            nativeFn(testData);
          }

          // Benchmark Turbo function
          const turboStart = performance.now();
          for (let i = 0; i < iterations; i++) {
            turboFn(testData);
          }
          const turboEnd = performance.now();

          // Benchmark native function
          const nativeStart = performance.now();
          for (let i = 0; i < iterations; i++) {
            nativeFn(testData);
          }
          const nativeEnd = performance.now();

          // Calculate results
          const turboTime = Number((turboEnd - turboStart).toFixed(2));
          const nativeTime = Number((nativeEnd - nativeStart).toFixed(2));

          setResults({
            turbo: turboTime,
            native: nativeTime,
            difference: calculateSpeedDifference(turboTime, nativeTime),
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred during benchmarking');
        } finally {
          setIsRunning(false);
        }
      }, delay);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while setting up the benchmark');
      setIsRunning(false);
    }
  };

  return {
    results,
    isRunning,
    error,
    runBenchmark,
  };
}
