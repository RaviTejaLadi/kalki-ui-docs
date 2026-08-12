import { Highlighter } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['children', 'string', '-', 'Full text content in which phrases will be highlighted.'],
  ['highlightText', 'string[]', '[]', 'Words or phrases to highlight within the children text.'],
  ['colorsList', 'string[]', '[]', 'Optional custom colors for highlighted segments.'],
  [
    'variant',
    "'solid' | 'outlined' | 'underline' | 'pill' | 'gradient' | 'glass' | 'shadow' | 'floating' | 'minimal' | 'tag'",
    'solid',
    'Visual style applied to highlighted segments.',
  ],
  ['emphasis', "'normal' | 'medium' | 'semibold' | 'bold'", 'medium', 'Font weight of highlighted text.'],
  ['sizing', "'inherit' | 'compact' | 'comfortable' | 'relaxed'", 'inherit', 'Spacing around highlighted segments.'],
  ['className', 'string', '-', 'Additional classes for the root container.'],
  ['textClassName', 'string', '-', 'Additional classes for non-highlighted text segments.'],
];

export const docs: docsData[] = [
  {
    title: 'Basic Highlighter',
    desc: 'Highlight specific words inside a sentence.',
    code: `
import { Highlighter } from "kalki-ui";

export default function BasicHighlighter() {
  return (
    <Highlighter highlightText={["highlighted"]}>
      This is a sentence with highlighted word.
    </Highlighter>
  );
}
`,
    snippet: <Highlighter highlightText={['highlighted']}>This is a sentence with highlighted word.</Highlighter>,
  },
  {
    title: 'Outlined Variant',
    desc: 'Use an outlined style for a softer emphasis.',
    code: `
import { Highlighter } from "kalki-ui";

export default function OutlinedHighlighter() {
  return (
    <Highlighter variant="outlined" highlightText={["important", "details"]}>
      Review the important details before continuing.
    </Highlighter>
  );
}
`,
    snippet: (
      <Highlighter variant="outlined" highlightText={['important', 'details']}>
        Review the important details before continuing.
      </Highlighter>
    ),
  },
];
