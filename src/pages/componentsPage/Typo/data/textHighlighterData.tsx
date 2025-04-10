// import { CaseInsensitiveHighlightExample } from '../examples/CaseInsensitiveHighlightExample';
// import { CustomColorHighlightExample } from '../examples/CustomColorHighlightExample';
// import { DynamicHighlightExample } from '../examples/DynamicHighlightExample';
// import { ParagraphHighlightExample } from '../examples/ParagraphHighlightExample';

import { docsData } from '@/types/docsData';
import { BasicHighlightExample } from '../examples/BasicHighlightExample';

export const docs: docsData[] = [
  {
    title: 'Basic Text Highlighting',
    desc: 'Highlight specific words in a text passage.',
    code: `
    <Box style={{ lineHeight: '30px' }}>
      <TextHighlighter>
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          React
        </TextHighlighter.Text>
        is a
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          JavaScript
        </TextHighlighter.Text>
        library for building user interfaces. It allows developers to create reusable
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          UI components
        </TextHighlighter.Text>
        and manage the state of applications
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          efficiently.
        </TextHighlighter.Text>
      </TextHighlighter>
    </Box>
      `,
    snippet: <BasicHighlightExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['children', 'node', '-', 'The text content to be highlighted. Required prop.'],
  [
    'highlightText',
    'array of strings',
    '-',
    'An array of words or phrases to be highlighted in the text. Required prop.',
  ],
  [
    'colorsList',
    'array of strings',
    '[]',
    'An optional array of custom colors to use for highlighting. If not provided or if there are more words to highlight than colors provided, it will use default colors.',
  ],
];

