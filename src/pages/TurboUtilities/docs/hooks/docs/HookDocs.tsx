import { CodeBlock } from './CodeBlock';
import { Section } from './Section';
import { BookOpen, Code2, Cpu, Gauge, Shield } from 'lucide-react';

const usageCode = `function MyComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      Window size: {width}px × {height}px
    </div>
  );
}`;

const returnTypeCode = `{
  width: number;  // Current window width in pixels
  height: number; // Current window height in pixels
}`;

const responsiveLayoutCode = `const { width } = useWindowSize();
const isMobile = width < 640;

return isMobile ? <MobileView /> : <DesktopView />;`;

const dynamicStylingCode = `const { width } = useWindowSize();
const columns = width > 1024 ? 4 : width > 768 ? 3 : 2;

return <Grid columns={columns} />;`;

export const HookDocs = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-background dark:bg-inherit ">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl font-bold text-foreground">useWindowSize Hook</h1>
      </div>

      <p className="text-muted-foreground mb-8">
        A custom React hook that tracks the browser window's dimensions in real-time.
      </p>

      <Section title="Installation">
        <CodeBlock code="import { useWindowSize } from './hooks/useWindowSize';" />
      </Section>

      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      <Section title="Return Value">
        <CodeBlock code={returnTypeCode} />
      </Section>

      <Section title="Features">
        <ul className="list-none space-y-3">
          {[
            'Real-time window size tracking',
            'Automatic cleanup of event listeners',
            'TypeScript support',
            'SSR-safe with fallback values',
            'Efficient re-rendering',
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Implementation Details">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Cpu className="w-5 h-5 mt-1 text-blue-500" />
            <div>
              <h3 className="font-semibold text-foreground">State Management</h3>
              <ul className="list-disc ml-5 text-muted-foreground">
                <li>Uses useState to maintain window dimensions</li>
                <li>Initial state uses current window size or falls back to 0</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 mt-1 text-blue-500" />
            <div>
              <h3 className="font-semibold text-foreground">Event Handling</h3>
              <ul className="list-disc ml-5 text-muted-foreground">
                <li>Sets up a resize event listener using useEffect</li>
                <li>Automatically removes listener on component unmount</li>
                <li>Handles SSR scenarios with type checking</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Example Use Cases">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Responsive Layouts</h3>
            <CodeBlock code={responsiveLayoutCode} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Dynamic Styling</h3>
            <CodeBlock code={dynamicStylingCode} />
          </div>
        </div>
      </Section>

      <Section title="Best Practices">
        <div className="bg-blue-50 p-4 rounded-lg">
          <ul className="list-none space-y-3">
            {[
              'Only use when you need real-time window size updates',
              'Consider debouncing for performance in high-update scenarios',
              'Use in conjunction with CSS media queries when possible',
              'Avoid using for static breakpoint checks',
            ].map((practice, index) => (
              <li key={index} className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-500" />
                <span className="text-muted-foreground">{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};
