import { Code } from 'lucide-react';

export function ExplanationSection() {
  return (
    <section className="p-6 bg-background dark:bg-inherit border dark:border-gray-200/10 rounded-lg ">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-foreground tracking-wide">Understanding Turbo ForEach</h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p className='tracking-wide'>
          The <code className="bg-gray-100 px-2 py-1 rounded text-xs">turboForEachObject</code> is a high-performance
          implementation of object iteration designed to be faster than the native{' '}
          <code className="bg-gray-100 px-2 py-1 rounded text-xs">Object.entries().forEach()</code>.
        </p>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground tracking-wide">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li className='tracking-wide'>Direct key iteration using Object.keys()</li>
            <li className='tracking-wide'>Manual for-loop implementation for better performance</li>
            <li className='tracking-wide'>Optional thisContext binding support</li>
            <li className='tracking-wide'>TypeScript support with generics</li>
            <li className='tracking-wide'>Reduced overhead compared to native methods</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
