import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { turboForEachObject } from '@/modules/object';

export function ExampleSection() {
  const [output, setOutput] = useState<string>('');

  const runExample = () => {
    const sampleObject = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
      occupation: 'Developer',
    };

    let result = '';

    // Using turboForEachObject
    turboForEachObject(sampleObject, (value, key) => {
      result += `${key}: ${value}\n`;
    });

    setOutput(result);
  };

  return (
    <section className="p-6 bg-white rounded-lg ">
      <div className="flex items-center gap-2 mb-4">
        <PlayCircle className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-foreground">Example Usage</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm text-gray-700">
            {`const sampleObject = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  occupation: 'Developer'
};

turboForEachObject(sampleObject, (value, key) => {
  console.log(\`\${key}: \${value}\`);
});`}
          </pre>
        </div>

        <button
          onClick={runExample}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Run Example
        </button>

        {output && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Output:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg text-sm">{output}</pre>
          </div>
        )}
      </div>
    </section>
  );
}
