import { docsData } from '@/types/docsData';
import { BasicHighlightExample } from '../examples/BasicHighlightExample';

export const docs: docsData[] = [
  {
    title: 'Basic Text Highlighting',
    desc: 'Highlight specific words in a text passage.',
    code: `
import { Box, TextHighlighter, TextHighlighterText } from "kalki-ui";
export default function Example() {
  return (
    <Box style={{ lineHeight: "30px" }}>
      <TextHighlighter
        colorsList={["#61dafb", "#ff9800", "#4caf50"]}
        defaultVariant="solid"
        defaultEmphasis="medium"
        defaultSizing="comfortable"
      >
        <div className="space-y-4 leading-relaxed">
          <p>
            <TextHighlighterText
              variant="solid"
              emphasis="bold"
              sizing="compact"
              color="#61dafb"
              className="rounded-md"
              style={{ letterSpacing: "0.5px" }}
              title="React Keyword"
            >
              React
            </TextHighlighterText>{" "}
            is a powerful JavaScript library for building user interfaces. It uses a{" "}
            <TextHighlighterText variant="underline" emphasis="semibold" sizing="relaxed" color="#ff9800">
              component-based
            </TextHighlighterText>{" "}
            architecture, which means you can build complex UIs by combining smaller, reusable components.
          </p>

          <p>
            One of the key ideas in React is the{" "}
            <TextHighlighterText variant="outlined" emphasis="normal" sizing="comfortable" color="#4caf50">
              virtual DOM
            </TextHighlighterText>
            , which helps React update only the parts of the UI that change, instead of re-rendering the entire page.
            This makes React apps fast and efficient.
          </p>

          <p>
            React also introduces the concept of{" "}
            <TextHighlighterText variant="tag" emphasis="bold" sizing="inherit" color="#e91e63">
              hooks
            </TextHighlighterText>
            , which let you use state and other React features without writing a class. For example,{" "}
            <TextHighlighterText variant="glass" emphasis="semibold" sizing="relaxed" color="#9c27b0">
              useState
            </TextHighlighterText>{" "}
            allows you to manage component state easily.
          </p>

          <p>
            In larger applications, you often need global state management. While React provides{" "}
            <TextHighlighterText variant="minimal" emphasis="medium" sizing="comfortable" color="#2196f3">
              Context API
            </TextHighlighterText>{" "}
            out of the box, many developers also use libraries like Redux or Zustand for more advanced scenarios.
          </p>

          <p>
            Styling in React can be achieved with plain CSS, CSS Modules, or libraries like{" "}
            <TextHighlighterText variant="gradient" emphasis="semibold" sizing="relaxed" color="#673ab7">
              Tailwind CSS
            </TextHighlighterText>
            , which provides utility-first classes for rapid UI development.
          </p>

          <p>
            Finally, React's ecosystem is huge. With frameworks like{" "}
            <TextHighlighterText variant="floating" emphasis="bold" sizing="comfortable" color="#f44336">
              Next.js
            </TextHighlighterText>{" "}
            for server-side rendering and routing, you can build full-stack applications quickly and efficiently.
          </p>
        </div>
      </TextHighlighter>
    </Box>
  );
}
`,
    snippet: <BasicHighlightExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['children', 'ReactNode', '-', 'The content wrapped by the TextHighlighter context provider.'],
  ['colorsList', 'string[]', 'defaultColors', 'Palette of colors available to highlighted text segments.'],
  [
    'defaultVariant',
    `"solid" | "outlined" | "underline" | "pill" | "gradient" | "glass" | "shadow" | "floating" | "minimal" | "tag"`,
    '"solid"',
    'Default visual style applied to TextHighlighterText when variant is omitted.',
  ],
  [
    'defaultEmphasis',
    `"normal" | "medium" | "semibold" | "bold"`,
    '"medium"',
    'Default font weight applied to TextHighlighterText when emphasis is omitted.',
  ],
  [
    'defaultSizing',
    `"inherit" | "compact" | "comfortable" | "relaxed"`,
    '"inherit"',
    'Default spacing applied to TextHighlighterText when sizing is omitted.',
  ],
];

export const textHighlighterTextRows = [
  ['children', 'ReactNode', '-', 'The text content to be highlighted. Required.'],
  [
    'variant',
    `"solid" | "outlined" | "underline" | "pill" | "gradient" | "glass" | "shadow" | "floating" | "minimal" | "tag"`,
    'context.defaultVariant',
    'Controls the visual style of the highlighted text.',
  ],
  [
    'emphasis',
    `"normal" | "medium" | "semibold" | "bold"`,
    'context.defaultEmphasis',
    'Controls the font weight of the highlighted text.',
  ],
  [
    'sizing',
    `"inherit" | "compact" | "comfortable" | "relaxed"`,
    'context.defaultSizing',
    'Controls the spacing and line-height of the highlighted text.',
  ],
  ['color', 'string', '-', 'Custom highlight color. Behavior changes depending on the variant.'],
  ['className', 'string', '-', 'Additional custom CSS classes to style the text.'],
  ['style', 'CSSProperties', '-', 'Inline styles applied to the text.'],
  ['...props', 'HTMLSpanElement attributes', '-', 'All other span element props are supported.'],
];
