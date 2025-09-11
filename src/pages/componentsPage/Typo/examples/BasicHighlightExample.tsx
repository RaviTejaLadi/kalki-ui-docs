import Box from '@/components/common/Box';
import TextHighlighter from '@/components/common/TextHighlighter';

export const BasicHighlightExample = () => {
  return (
    <Box style={{ lineHeight: '30px' }}>
      <TextHighlighter
        colorsList={['#61dafb', '#ff9800', '#4caf50']} // overrides defaultColors
        defaultVariant="solid" // default context variant
        defaultEmphasis="medium" // default context emphasis
        defaultSizing="comfortable" // default context sizing
      >
        <div className="space-y-4 leading-relaxed">
          <p>
            <TextHighlighter.Text
              variant="solid" // solid background
              emphasis="bold" // bold text
              sizing="compact" // tight spacing
              color="#61dafb" // React blue
              className="rounded-md" // extra rounding via className
              style={{ letterSpacing: '0.5px' }} // inline style
              title="React Keyword" // example of ...props
            >
              React
            </TextHighlighter.Text>{' '}
            is a powerful JavaScript library for building user interfaces. It uses a{' '}
            <TextHighlighter.Text
              variant="underline" // underline style
              emphasis="semibold"
              sizing="relaxed"
              color="#ff9800" // orange
            >
              component-based
            </TextHighlighter.Text>{' '}
            architecture, which means you can build complex UIs by combining smaller, reusable components.
          </p>

          <p>
            One of the key ideas in React is the{' '}
            <TextHighlighter.Text
              variant="outlined" // outlined border style
              emphasis="normal"
              sizing="comfortable"
              color="#4caf50" // green
            >
              virtual DOM
            </TextHighlighter.Text>
            , which helps React update only the parts of the UI that change, instead of re-rendering the entire page.
            This makes React apps fast and efficient.
          </p>

          <p>
            React also introduces the concept of{' '}
            <TextHighlighter.Text
              variant="tag" // adds a '#' before text
              emphasis="bold"
              sizing="inherit"
              color="#e91e63" // pink
            >
              hooks
            </TextHighlighter.Text>
            , which let you use state and other React features without writing a class. For example,
            <TextHighlighter.Text
              variant="glass"
              emphasis="semibold"
              sizing="relaxed"
              color="#9c27b0" // purple
            >
              useState
            </TextHighlighter.Text>{' '}
            allows you to manage component state easily.
          </p>

          <p>
            In larger applications, you often need global state management. While React provides{' '}
            <TextHighlighter.Text variant="minimal" emphasis="medium" sizing="comfortable" color="#2196f3">
              Context API
            </TextHighlighter.Text>{' '}
            out of the box, many developers also use libraries like Redux or Zustand for more advanced scenarios.
          </p>

          <p>
            Styling in React can be achieved with plain CSS, CSS Modules, or libraries like{' '}
            <TextHighlighter.Text
              variant="gradient"
              emphasis="semibold"
              sizing="relaxed"
              color="#673ab7" // deep purple gradient
            >
              Tailwind CSS
            </TextHighlighter.Text>
            , which provides utility-first classes for rapid UI development.
          </p>

          <p>
            Finally, React’s ecosystem is huge. With frameworks like{' '}
            <TextHighlighter.Text
              variant="floating"
              emphasis="bold"
              sizing="comfortable"
              color="#f44336" // red
            >
              Next.js
            </TextHighlighter.Text>{' '}
            for server-side rendering and routing, you can build full-stack applications quickly and efficiently.
          </p>
        </div>
      </TextHighlighter>
    </Box>
  );
};
